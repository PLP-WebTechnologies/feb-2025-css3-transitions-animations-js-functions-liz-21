const btn = document.getElementById('animateBtn');

// Load saved state
if (localStorage.getItem('btnClicked') === 'true') {
  btn.classList.add('clicked');
}

btn.addEventListener('click', () => {
  // Toggle animation class
  btn.classList.toggle('clicked');

  // Save preference
  const isClicked = btn.classList.contains('clicked');
  localStorage.setItem('btnClicked', isClicked);
});
