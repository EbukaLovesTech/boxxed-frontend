
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  document.querySelector('.nav-links').classList.toggle('expanded');
});