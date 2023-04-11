document.addEventListener('DOMContentLoaded', function () {
  /**
   * Draggable elements (like twitch chat)
   *
   * Hint: want to add another draggable?
   * Add "draggable" property and "draggable" class to an element
   */
  const draggables = document.getElementsByClassName('draggable');
  for (const node of draggables) {
    const nodeRelativeOffset = { x: 0, y: 0 };
    const nodeStartingPosition = { x: 0, y: 0 };

    // enable html5 interactivity:
    node.draggable = true;

    node.addEventListener('dragstart', (event) => {
      // disable inner elements messing with drag interaction
      for (const child of node.children) {
        child.style.pointerEvents = 'none';
      }
      // remember pointer offset for precise drag interaction
      nodeRelativeOffset.x = event.layerX;
      nodeRelativeOffset.y = event.layerY;
      // remember starting position in case user drags out of bounds
      const rect = node.getBoundingClientRect();
      nodeStartingPosition.x = rect.x;
      nodeStartingPosition.y = rect.y;
    });

    node.addEventListener('dragend', () => {
      // reenable inner elements
      for (const child of node.children) {
        child.style.pointerEvents = '';
      }
    });

    node.addEventListener('drag', (event) => {
      // detect if out of bounds
      if (!event.clientX || !event.clientY) return;
      // update position with cursor's current x/y
      node.style.top = `${event.clientY - nodeRelativeOffset.y}px`;
      node.style.left = `${event.clientX - nodeRelativeOffset.x}px`;
      // force remove interfering css properties
      node.style.right = 'unset';
      node.style.bottom = 'unset';
    });
  }
  // fix "not-allowed" cursor during interaction:
  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  /**
   * Image gallery logic:
   */
  const sliderImages = document.querySelectorAll('.hero-slider img');
  const sliderControls = document.querySelectorAll('.hero-slider-control');
  let currentSlide = 0;

  function changeSlide(newSlide) {
    sliderImages[currentSlide].classList.remove('active');
    sliderImages[newSlide].classList.add('active');
    currentSlide = newSlide;
  }

  function nextSlide() {
    let newSlide = currentSlide + 1;
    if (newSlide >= sliderImages.length) {
      newSlide = 0;
    }
    changeSlide(newSlide);
  }

  function previousSlide() {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) {
      newSlide = sliderImages.length - 1;
    }
    changeSlide(newSlide);
  }

  // Attach click events to slider controls
  sliderControls.forEach((control) => {
    control.addEventListener('click', function () {
      if (control.classList.contains('hero-slider-next')) {
        nextSlide();
      } else if (control.classList.contains('hero-slider-prev')) {
        previousSlide();
      }
    });
  });

  // Start automatic slide change
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
