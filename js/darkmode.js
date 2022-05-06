



function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementById("themer").setAttribute("data-theme", themeName)

}



function toggleTheme() {
    if (localStorage.getItem('theme') === 'luxury') {
        setTheme('light');
        scrollbar.setAttribute("data-theme", './css/scroll2.css')
    } else {
        setTheme('luxury');
        scrollbar.setAttribute("data-theme", './css/scroll.css')
    }
}



(function() {
    if (localStorage.getItem('theme') === 'luxury') {
        setTheme('luxury');
    } else {
        setTheme('light');
    }
})();
