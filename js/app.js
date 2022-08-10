let navBarToggle = document.querySelectorAll('.nav-menu-list');
let menu = document.querySelector('.menu');
let navBarMenu = document.querySelector('.navbar-menu');

navBarToggle.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    navBarToggle.forEach(function(toggle) {
        toggle.classList.remove('active');
        }
    );
    this.classList.add('active');
  });
});

// show menu on click
menu.addEventListener('click', function() {
    navBarMenu.classList.toggle('show');
    if (navBarMenu.classList.contains('show')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
    }
    else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
    }
})

document.addEventListener('click', function(e) {
    if (!e.target.closest('.menu')) {
        navBarMenu.classList.remove('show');
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
    }
}
);