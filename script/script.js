const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');

toggleButton.addEventListener('click', function() {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
