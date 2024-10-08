const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.querySelector('body');

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Update button text based on theme
  if (body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});