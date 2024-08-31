document.addEventListener('DOMContentLoaded', function() {
    function toggleMenu() {
      const burger = document.querySelector('.evacuator__burger');
      const nav = document.querySelector('.evacuator__nav');
  
      burger.addEventListener('click', () => {
        burger.classList.toggle('evacuator__burger_active');
        nav.classList.toggle('evacuator__nav_show');
  
      });
    }
  
    toggleMenu();
  });
  