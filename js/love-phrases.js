/**
 * Milujem ťa — colors = jemné farby podľa vlajky (pre gradient na canvas).
 * Extra varianty (európske + slovanské) stále znamenajú „milujem ťa“.
 */
window.LOVE_PHRASES = [
    /* —— Slovanské + SK varianty —— */
    { text: "Milujem ťa", lang: "sk", colors: ["#0b4ea2", "#ee1c25", "#ffffff"] },
    { text: "Ľúbim ťa", lang: "sk", colors: ["#0b4ea2", "#ffffff", "#ee1c25"] },
    { text: "Lubim ta", lang: "sk", colors: ["#ee1c25", "#ffffff", "#0b4ea2"] },
    { text: "Ja ťa milujem", lang: "sk", colors: ["#ee1c25", "#0b4ea2"] },
    { text: "Milujem ťa celým srdcom", lang: "sk", colors: ["#0b4ea2", "#ee1c25"] },

    { text: "Miluji tě", lang: "cs", colors: ["#d7141a", "#11457e", "#ffffff"] },
    { text: "Já tě miluju", lang: "cs", colors: ["#11457e", "#d7141a"] },
    { text: "Miluju tě", lang: "cs", colors: ["#d7141a", "#ffffff", "#11457e"] },

    { text: "Kocham cię", lang: "pl", colors: ["#dc143c", "#ffffff"] },
    { text: "Ja cię kocham", lang: "pl", colors: ["#ffffff", "#dc143c"] },
    { text: "Kocham cię bardzo", lang: "pl", colors: ["#dc143c", "#f5f5f5"] },

    { text: "Volim te", lang: "hr", colors: ["#ff0000", "#ffffff", "#171796"] },
    { text: "Ja te volim", lang: "hr", colors: ["#171796", "#ff0000"] },
    { text: "Volim te od srca", lang: "hr", colors: ["#ff0000", "#171796", "#ffffff"] },

    { text: "Ljubim te", lang: "sl", colors: ["#ffffff", "#0000ff", "#ff0000"] },
    { text: "Jaz te ljubim", lang: "sl", colors: ["#0000ff", "#ff0000"] },

    { text: "Volim te", lang: "sr", colors: ["#c6363c", "#0c4076", "#ffffff"] },
    { text: "Ja te volim", lang: "sr", colors: ["#0c4076", "#c6363c"] },
    { text: "Волим те", lang: "sr", colors: ["#c6363c", "#ffffff", "#0c4076"] },

    { text: "Сакам те", lang: "mk", colors: ["#d20000", "#ffe600"] },
    { text: "Јас те сакам", lang: "mk", colors: ["#ffe600", "#d20000"] },

    { text: "Волим те", lang: "bs", colors: ["#002395", "#ffffff", "#ffc200"] },
    { text: "Ja te volim", lang: "bs", colors: ["#ffc200", "#002395"] },

    { text: "Обичам те", lang: "bg", colors: ["#ffffff", "#00966e", "#d62612"] },
    { text: "Аз те обичам", lang: "bg", colors: ["#00966e", "#d62612"] },

    { text: "Я тебя люблю", lang: "ru", colors: ["#ffffff", "#0039a6", "#d52b1e"] },
    { text: "Люблю тебя", lang: "ru", colors: ["#0039a6", "#d52b1e"] },
    { text: "Я люблю тебя", lang: "ru", colors: ["#d52b1e", "#ffffff", "#0039a6"] },

    { text: "Я тебе кохаю", lang: "uk", colors: ["#0057b7", "#ffd700"] },
    { text: "Кохаю тебе", lang: "uk", colors: ["#ffd700", "#0057b7"] },
    { text: "Люблю тебе", lang: "uk", colors: ["#0057b7", "#ffd700", "#0057b7"] },

    { text: "Я цябе кахаю", lang: "be", colors: ["#c8312a", "#ffffff", "#007c30"] },
    { text: "Кахаю цябе", lang: "be", colors: ["#007c30", "#c8312a"] },

    /* —— Európa — varianty —— */
    { text: "I love you", lang: "en", colors: ["#c8102e", "#012169", "#ffffff"] },
    { text: "I love thee", lang: "en", colors: ["#012169", "#c8102e"] },
    { text: "Love you", lang: "en", colors: ["#ffffff", "#c8102e", "#012169"] },

    { text: "Je t'aime", lang: "fr", colors: ["#002395", "#ffffff", "#ed2939"] },
    { text: "Je vous aime", lang: "fr", colors: ["#ed2939", "#002395"] },
    { text: "Je t'aime fort", lang: "fr", colors: ["#002395", "#ed2939"] },

    { text: "Ich liebe dich", lang: "de", colors: ["#000000", "#dd0000", "#ffce00"] },
    { text: "Ich hab dich lieb", lang: "de", colors: ["#dd0000", "#ffce00"] },
    { text: "Ich liebe Dich", lang: "de", colors: ["#ffce00", "#000000", "#dd0000"] },

    { text: "Ti amo", lang: "it", colors: ["#009246", "#ffffff", "#ce2b37"] },
    { text: "Io ti amo", lang: "it", colors: ["#ce2b37", "#009246"] },
    { text: "Ti voglio bene", lang: "it", colors: ["#009246", "#ce2b37", "#ffffff"] },

    { text: "Te quiero", lang: "es", colors: ["#aa151b", "#f1bf00"] },
    { text: "Te amo", lang: "es", colors: ["#f1bf00", "#aa151b"] },
    { text: "Te quiero mucho", lang: "es", colors: ["#aa151b", "#f1bf00", "#aa151b"] },

    { text: "Eu te amo", lang: "pt", colors: ["#006600", "#ff0000", "#ffff00"] },
    { text: "Eu amo-te", lang: "pt", colors: ["#ff0000", "#006600"] },
    { text: "Amo-te", lang: "pt", colors: ["#006600", "#ffff00", "#ff0000"] },

    { text: "Ik hou van je", lang: "nl", colors: ["#ae1c28", "#ffffff", "#21468b"] },
    { text: "Ik hou van jou", lang: "nl", colors: ["#21468b", "#ae1c28"] },
    { text: "Ik zie je graag", lang: "nl", colors: ["#ae1c28", "#21468b", "#ffffff"] },

    { text: "Jag älskar dig", lang: "sv", colors: ["#006aa7", "#fecc00"] },
    { text: "Jag älskar dig så mycket", lang: "sv", colors: ["#fecc00", "#006aa7"] },

    { text: "Jeg elsker dig", lang: "da", colors: ["#c8102e", "#ffffff"] },
    { text: "Jeg elsker dig højt", lang: "da", colors: ["#ffffff", "#c8102e"] },

    { text: "Jeg elsker deg", lang: "no", colors: ["#ba0c2f", "#00205b", "#ffffff"] },
    { text: "Jeg er glad i deg", lang: "no", colors: ["#00205b", "#ba0c2f"] },

    { text: "Minä rakastan sinua", lang: "fi", colors: ["#002f6c", "#ffffff"] },
    { text: "Rakastan sinua", lang: "fi", colors: ["#ffffff", "#002f6c"] },

    { text: "Ég elska þig", lang: "is", colors: ["#02529c", "#dc1e35", "#ffffff"] },
    { text: "Ég elska þig svo mikið", lang: "is", colors: ["#dc1e35", "#02529c"] },

    { text: "Szeretlek", lang: "hu", colors: ["#ce2939", "#ffffff", "#477050"] },
    { text: "Én szeretlek téged", lang: "hu", colors: ["#477050", "#ce2939"] },
    { text: "Nagyon szeretlek", lang: "hu", colors: ["#ce2939", "#477050", "#ffffff"] },

    { text: "Te iubesc", lang: "ro", colors: ["#002b7f", "#fcd116", "#ce1126"] },
    { text: "Te iubesc mult", lang: "ro", colors: ["#ce1126", "#002b7f"] },

    { text: "Σ' αγαπώ", lang: "el", colors: ["#0d5eaf", "#ffffff"] },
    { text: "Σε αγαπώ", lang: "el", colors: ["#ffffff", "#0d5eaf"] },
    { text: "Αγαπώ σε", lang: "el", colors: ["#0d5eaf", "#ffffff", "#0d5eaf"] },

    { text: "Seni seviyorum", lang: "tr", colors: ["#e30a17", "#ffffff"] },
    { text: "Seni çok seviyorum", lang: "tr", colors: ["#ffffff", "#e30a17"] },

    { text: "Aš tave myliu", lang: "lt", colors: ["#fdb913", "#006a44", "#c1272d"] },
    { text: "Aš tave myliu labai", lang: "lt", colors: ["#006a44", "#c1272d"] },

    { text: "Es tevi mīlu", lang: "lv", colors: ["#9e3039", "#ffffff"] },
    { text: "Es tevi ļoti mīlu", lang: "lv", colors: ["#ffffff", "#9e3039"] },

    { text: "Ma armastan sind", lang: "et", colors: ["#0072ce", "#000000", "#ffffff"] },
    { text: "Ma armastan sind väga", lang: "et", colors: ["#0072ce", "#ffffff"] },

    { text: "Të dua", lang: "sq", colors: ["#e41e20", "#000000"] },
    { text: "Unë të dua", lang: "sq", colors: ["#000000", "#e41e20"] },

    { text: "T'estimo", lang: "ca", colors: ["#ed2939", "#fcd116"] },
    { text: "T'estimo molt", lang: "ca", colors: ["#fcd116", "#ed2939"] },

    { text: "Rwy'n dy garu di", lang: "cy", colors: ["#00b140", "#ffffff", "#d21034"] },
    { text: "Tá grá agam duit", lang: "ga", colors: ["#169b62", "#ffffff", "#ff883e"] },
    { text: "Tha gaol agam ort", lang: "gd", colors: ["#005eb8", "#ffffff"] },
    { text: "Ek het jou lief", lang: "af", colors: ["#007a4d", "#ffb612", "#de3831"] },

    { text: "Mi amas vin", lang: "eo", colors: ["#009900", "#ffffff"] },

    /* —— Ďalšie jazyky sveta (vlajkové farby) —— */
    { text: "أحبك", lang: "ar", colors: ["#006c35", "#ffffff"] },
    { text: "دوست دارم", lang: "fa", colors: ["#da0000", "#ffffff", "#239f40"] },
    { text: "אני אוהב אותך", lang: "he", colors: ["#0038b8", "#ffffff"] },
    { text: "मैं तुमसे प्यार करता हूँ", lang: "hi", colors: ["#ff9933", "#ffffff", "#138808"] },
    { text: "আমি তোমাকে ভালোবাসি", lang: "bn", colors: ["#006a4e", "#f42a41"] },
    { text: "ฉันรักเธอ", lang: "th", colors: ["#a51931", "#f4f5f8", "#2d2a4a"] },
    { text: "Anh yêu em", lang: "vi", colors: ["#da251d", "#ffff00"] },
    { text: "Saya cinta padamu", lang: "id", colors: ["#ff0000", "#ffffff"] },
    { text: "Mahal kita", lang: "tl", colors: ["#0038a8", "#ce1126", "#fcd116"] },
    { text: "我爱你", lang: "zh", colors: ["#de2910", "#ffde00"] },
    { text: "我愛你", lang: "zh-tw", colors: ["#fe0000", "#000095", "#ffffff"] },
    { text: "愛してる", lang: "ja", colors: ["#ffffff", "#bc002d"] },
    { text: "大好きだよ", lang: "ja", colors: ["#bc002d", "#ffffff"] },
    { text: "사랑해", lang: "ko", colors: ["#cd2e3a", "#ffffff", "#0047a0"] },
    { text: "당신을 사랑해요", lang: "ko", colors: ["#0047a0", "#cd2e3a"] },
    { text: "Nakupenda", lang: "sw", colors: ["#000000", "#ffffff", "#17b31b", "#e20000"] },
    { text: "Aloha au iā ʻoe", lang: "haw", colors: ["#00247d", "#ffffff", "#c8102e"] },

    { text: "♥", lang: "sym", colors: ["#e891a8", "#c76b8f", "#f2c9d8"] }
];
