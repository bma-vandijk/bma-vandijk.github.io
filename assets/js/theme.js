(function () {
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) { }
        var icon = document.querySelector('#theme-toggle .icon');
        if (icon) icon.textContent = theme === 'light' ? '☾' : '☼';
    }

    function getTheme() {
        try {
            var stored = localStorage.getItem('theme');
            if (stored) return stored;
        } catch (e) { }
        return document.documentElement.getAttribute('data-theme') || 'dark';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        // Sync initial icon
        setTheme(getTheme());
        btn.addEventListener('click', function () {
            var next = getTheme() === 'light' ? 'dark' : 'light';
            setTheme(next);
        });
    });
})();



