// Toggle Button

const menuBtn = document.querySelector('#menuBtn');
const navBar = document.querySelector('#navBar');

menuBtn.addEventListener('click', () => {
  if (navBar.style.display === 'none' || navBar.style.display === '') {
    navBar.style.display = 'block';
  } else {
    navBar.style.display = 'none';
  }
});
