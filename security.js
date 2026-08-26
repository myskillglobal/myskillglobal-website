(() => {
    'use strict';

    // =========================
    // Disable Right Click
    // =========================
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });

    // =========================
    // Disable Copy / Cut / Drag
    // =========================
    ['copy', 'cut', 'dragstart'].forEach(eventName => {
        document.addEventListener(eventName, e => {
            e.preventDefault();
        });
    });

    // =========================
    // Disable Common Shortcuts
    // Windows: Ctrl
    // Mac: Cmd (Meta)
    // =========================
    document.addEventListener('keydown', e => {

        const cmd = e.ctrlKey || e.metaKey;
        const key = e.key.toLowerCase();

        const blocked =
            e.key === 'F12' ||
            (cmd && key === 'u') ||
            (cmd && key === 's') ||
            (cmd && key === 'c') ||
            (cmd && e.shiftKey && key === 'i') ||
            (cmd && e.shiftKey && key === 'j') ||
            (cmd && e.shiftKey && key === 'c');

        if (blocked) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // =========================
    // DevTools Detection
    // =========================
    let warningShown = false;

    setInterval(() => {

        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        if ((widthDiff > 180 || heightDiff > 180) && !warningShown) {

            warningShown = true;

            document.body.innerHTML = `
                <div style="
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    height:100vh;
                    background:#111;
                    color:white;
                    font-family:Arial,sans-serif;
                    text-align:center;
                    padding:20px;
                ">
                    <h1>⚠ Developer Tools Detected</h1>
                    <p>This content is protected.</p>
                    <p>© Surajit Roy</p>
                </div>
            `;
        }

    }, 1500);

})();