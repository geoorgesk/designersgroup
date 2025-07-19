window.addEventListener('load', () => {
  const designers = document.getElementById('intro-designers');
  const group = document.getElementById('intro-group');
  const intro = document.getElementById('intro');
  const main = document.getElementById('main-content');
  const hamburger = document.getElementById('hamburger-menu');

  setTimeout(() => {
    designers.classList.add('move');
    group.classList.add('move');
  }, 1000); // wait 1s before moving

  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
    hamburger.style.display = 'block'; // show hamburger
  }, 3000); // after 3s
});
