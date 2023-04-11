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
 * easterEgg.js
 */
const pepePainsButton = document.getElementsByClassName('line-button')[0];
pepePainsButton.addEventListener('click', countTowardsEasterEgg);

let counter = 0;

function countTowardsEasterEgg() {
  counter++;
  if (counter === 25) {
    executeEasterEgg();
  }
}

function executeEasterEgg() {
  pepePainsButton.classList.add('animateEasterEgg');
}

/**
 * Load chat with dynamic parent
 */
const iframeUrl = 'https://www.twitch.tv/embed/forsen/chat?parent=' + location.hostname;
document.querySelector('#chat-iframe').setAttribute('src', iframeUrl);