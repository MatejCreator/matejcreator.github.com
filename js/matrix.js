/**
 * Rain matrix. Pass phrases (strings) or a charset string.
 * options: { color, headColor, fontSize, speed, fade }
 */
(function (global) {
    function startMatrix(canvas, source, options) {
        const opts = Object.assign(
            {
                color: "#78c0ff",
                headColor: "#cfe9ff",
                accent: "#2d8a62",
                fontSize: 18,
                speed: 42,
                fade: 0.08
            },
            options || {}
        );

        const ctx = canvas.getContext("2d");
        let drops = [];
        let columnPhrases = [];
        let phraseOffsets = [];
        let raf = null;
        let last = 0;

        const isPhrases = Array.isArray(source) && source.length > 0;
        const charset = typeof source === "string" ? source.split("") : null;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const cols = Math.max(1, Math.floor(canvas.width / opts.fontSize));
            const old = drops.slice();
            drops = Array.from({ length: cols }, (_, i) =>
                old[i] != null ? old[i] : Math.random() * -40
            );
            if (isPhrases) {
                columnPhrases = Array.from(
                    { length: cols },
                    () => source[Math.floor(Math.random() * source.length)]
                );
                phraseOffsets = Array.from({ length: cols }, () => 0);
            }
        }

        function pickChar(col) {
            if (isPhrases) {
                const phrase = columnPhrases[col] || "♥";
                const ch = phrase[phraseOffsets[col] % phrase.length];
                phraseOffsets[col]++;
                if (phraseOffsets[col] >= phrase.length + 2) {
                    phraseOffsets[col] = 0;
                    columnPhrases[col] =
                        source[Math.floor(Math.random() * source.length)];
                }
                return ch;
            }
            return charset[Math.floor(Math.random() * charset.length)];
        }

        function frame(ts) {
            if (ts - last < opts.speed) {
                raf = requestAnimationFrame(frame);
                return;
            }
            last = ts;

            ctx.fillStyle = `rgba(0, 0, 0, ${opts.fade})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = `${opts.fontSize}px "IBM Plex Mono", monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = pickChar(i);
                const x = i * opts.fontSize;
                const y = drops[i] * opts.fontSize;
                const useAccent = Math.random() > 0.92;
                ctx.fillStyle = useAccent ? opts.accent : opts.color;
                ctx.fillText(text, x, y);
                ctx.fillStyle = opts.headColor;
                ctx.globalAlpha = 0.55;
                ctx.fillText(text, x, y - opts.fontSize);
                ctx.globalAlpha = 1;

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                    if (isPhrases) {
                        columnPhrases[i] =
                            source[Math.floor(Math.random() * source.length)];
                        phraseOffsets[i] = 0;
                    }
                }
                drops[i]++;
            }

            raf = requestAnimationFrame(frame);
        }

        resize();
        window.addEventListener("resize", resize);
        raf = requestAnimationFrame(frame);

        return {
            destroy() {
                cancelAnimationFrame(raf);
                window.removeEventListener("resize", resize);
            },
            resize
        };
    }

    function wireFullscreen(el) {
        function toggle() {
            if (!document.fullscreenElement) {
                (el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen)?.call(el);
            } else {
                (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen)?.call(document);
            }
        }
        el.addEventListener("dblclick", toggle);
        return toggle;
    }

    global.MatrixRain = { start: startMatrix, wireFullscreen };
})(window);
