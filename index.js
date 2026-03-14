window.onload = function () {
    var button = document.getElementById('toggle-menu');
    var menu = document.getElementById('main-menu');

    button.addEventListener('click', function (event) {
        event.preventDefault();
        menu.classList.toggle('is-open');
    });

    var links = menu.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('is-open');
        });
    });
};