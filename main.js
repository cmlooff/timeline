const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.Bottom <=
    (window.innerHeight ||
      document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth ||
      document.documentElement.clientWidth)
  );
};

// 'run' Loops through 'items' and checking if it's in the viewport
const run = () =>
  items.forEach(item => {
    // If it is in the viewport -> add a class of 'show'
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });


//* Events
// These events run when the page loads, resizes, or scrolls
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// This script is just adding the class of 'show'