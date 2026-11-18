/**
 * Client-side access levels (no server).
 * Passwords are stored only as SHA-256 hashes — change HASHES below.
 *
 * Current passwords:
 *   level 1 (kamarát): kamarat
 *   level 2 (priateľka): Lubim ta
 *
 * New password: Auth.hash("noveheslo").then(console.log)
 */
(function (global) {
    const STORAGE_KEY = "matej_access_v1";

    // level: 0 guest, 1 kamarát, 2 love (priateľka)
    const HASHES = {
        // kamarat
        "bc2851ac869fc64c9ee71c96cb75392d5b1ea09d43e3bffaef6b6b71b30e7971": {
            level: 1,
            label: "Kamarát"
        },
        // Lubim ta
        "e21ac2c638d0e76bd4b47a9b474ae1dc948dbe722aad1a455aa99241b696fa74": {
            level: 2,
            label: "Priateľka"
        }
    };

    async function hash(text) {
        const data = new TextEncoder().encode(text);
        const buf = await crypto.subtle.digest("SHA-256", data);
        return Array.from(new Uint8Array(buf))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    }

    function labelForLevel(level) {
        if (level === 1) return "Kamarát";
        if (level === 2) return "Priateľka";
        return "Hosť";
    }

    function loadSession() {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            if (!raw) return { level: 0, label: "Hosť" };
            const parsed = JSON.parse(raw);
            const level = parsed.level;
            if (level !== 0 && level !== 1 && level !== 2) {
                return { level: 0, label: "Hosť" };
            }
            // vždy aktuálny label podľa levelu (staré session s „Priateľ“ opraví)
            return { level: level, label: labelForLevel(level) };
        } catch (_) {
            return { level: 0, label: "Hosť" };
        }
    }

    function saveSession(session) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    }

    function getSession() {
        return loadSession();
    }

    function getLevel() {
        return loadSession().level;
    }

    function hasLevel(minLevel) {
        return getLevel() >= minLevel;
    }

    async function login(password) {
        if (!password) {
            return { ok: false, session: getSession(), message: "Zadaj kľúč." };
        }
        const digest = await hash(password.trim());
        const match = HASHES[digest];
        if (!match) {
            // neprepisuj existujúcu session pri preklepe
            return { ok: false, session: getSession(), message: "Nesprávny kľúč." };
        }
        const session = { level: match.level, label: labelForLevel(match.level) };
        saveSession(session);
        return { ok: true, session, message: "Odomknuté: " + session.label };
    }

    function logout() {
        const guest = { level: 0, label: "Hosť" };
        saveSession(guest);
        return guest;
    }

    function applyVisibility(root) {
        const scope = root || document;
        const level = getLevel();
        scope.querySelectorAll("[data-min-level]").forEach((el) => {
            const need = Number(el.getAttribute("data-min-level") || 0);
            const show = level >= need;
            el.hidden = !show;
            el.classList.toggle("is-unlocked", show);
        });
        scope.querySelectorAll("[data-max-level]").forEach((el) => {
            const max = Number(el.getAttribute("data-max-level") || 99);
            el.hidden = level > max;
        });
        scope.querySelectorAll("[data-auth-label]").forEach((el) => {
            el.textContent = getSession().label;
        });
    }

    function guardPage(options) {
        const opts = options || {};
        const min = opts.minLevel || 0;
        if (hasLevel(min)) {
            applyVisibility();
            return true;
        }
        applyVisibility();
        if (typeof opts.onDenied === "function") opts.onDenied(getSession());
        if (opts.redirect) {
            window.location.replace(opts.redirect);
        }
        return false;
    }

    global.Auth = {
        hash,
        login,
        logout,
        getSession,
        getLevel,
        hasLevel,
        applyVisibility,
        guardPage,
        LEVEL: { GUEST: 0, FRIEND: 1, LOVE: 2 }
    };
})(window);
