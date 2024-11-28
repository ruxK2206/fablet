const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
});
