/**
 * GitHub Contribution Graph Text Scroller
 * Paste this into your browser console on GitHub profile contributions page
 */
(function() {
  // Configuration
  const config = {
    speed: 100, // ms per frame
    text: "Making dreams come true since 1998!", // Text to scroll (space at end for readability)
    loopText: true // Whether to loop the text continuously
  };

  // Color levels for cells: 0 (off) to 4 (brightest)
  const LEVEL_OFF = "0";
  const LEVEL_MAX = "4";
  
  // Grid dimensions - standard GitHub contribution graph is 7×52
  const GRID_HEIGHT = 7;
  const GRID_WIDTH = 52;

  // Font definition - 5×7 pixel font for characters (common LCD/LED size)
  // 1 = pixel on, 0 = pixel off
  const font = {
    'A': [
      '01110',
      '10001',
      '10001',
      '11111',
      '10001',
      '10001',
      '10001'
    ],
    'a': [
      '00000',
      '00000',
      '01110',
      '00001',
      '01111',
      '10001',
      '01111'
    ],
    'B': [
      '11110',
      '10001',
      '10001',
      '11110',
      '10001',
      '10001',
      '11110'
    ],
    'b': [
      '10000',
      '10000',
      '10110',
      '11001',
      '10001',
      '10001',
      '11110'
    ],
    'C': [
      '01110',
      '10001',
      '10000',
      '10000',
      '10000',
      '10001',
      '01110'
    ],
    'c': [
      '00000',
      '00000',
      '01110',
      '10000',
      '10000',
      '10001',
      '01110'
    ],
    'D': [
      '11110',
      '10001',
      '10001',
      '10001',
      '10001',
      '10001',
      '11110'
    ],
    'd': [
      '00001',
      '00001',
      '01101',
      '10011',
      '10001',
      '10001',
      '01111'
    ],
    'E': [
      '11111',
      '10000',
      '10000',
      '11110',
      '10000',
      '10000',
      '11111'
    ],
    'e': [
      '00000',
      '00000',
      '01110',
      '10001',
      '11111',
      '10000',
      '01110'
    ],
    'F': [
      '11111',
      '10000',
      '10000',
      '11110',
      '10000',
      '10000',
      '10000'
    ],
    'f': [
      '00110',
      '01001',
      '01000',
      '11100',
      '01000',
      '01000',
      '01000'
    ],
    'G': [
      '01110',
      '10001',
      '10000',
      '10111',
      '10001',
      '10001',
      '01110'
    ],
    'g': [
      '00000',
      '00000',
      '01111',
      '10001',
      '10001',
      '01111',
      '00001',
      '01110'
    ],
    'H': [
      '10001',
      '10001',
      '10001',
      '11111',
      '10001',
      '10001',
      '10001'
    ],
    'h': [
      '10000',
      '10000',
      '10110',
      '11001',
      '10001',
      '10001',
      '10001'
    ],
    'I': [
      '11111',
      '00100',
      '00100',
      '00100',
      '00100',
      '00100',
      '11111'
    ],
    'i': [
      '00100',
      '00000',
      '01100',
      '00100',
      '00100',
      '00100',
      '01110'
    ],
    'J': [
      '00010',
      '00010',
      '00010',
      '00010',
      '10010',
      '10010',
      '01100'
    ],
    'j': [
      '00010',
      '00000',
      '00110',
      '00010',
      '00010',
      '10010',
      '01100'
    ],
    'K': [
      '10001',
      '10010',
      '10100',
      '11000',
      '10100',
      '10010',
      '10001'
    ],
    'k': [
      '10000',
      '10000',
      '10010',
      '10100',
      '11000',
      '10100',
      '10010'
    ],
    'L': [
      '10000',
      '10000',
      '10000',
      '10000',
      '10000',
      '10000',
      '11111'
    ],
    'l': [
      '01100',
      '00100',
      '00100',
      '00100',
      '00100',
      '00100',
      '01110'
    ],
    'M': [
      '10001',
      '11011',
      '10101',
      '10001',
      '10001',
      '10001',
      '10001'
    ],
    'm': [
      '00000',
      '00000',
      '11010',
      '10101',
      '10101',
      '10001',
      '10001'
    ],
    'N': [
      '10001',
      '11001',
      '10101',
      '10011',
      '10001',
      '10001',
      '10001'
    ],
    'n': [
      '00000',
      '00000',
      '10110',
      '11001',
      '10001',
      '10001',
      '10001'
    ],
    'O': [
      '01110',
      '10001',
      '10001',
      '10001',
      '10001',
      '10001',
      '01110'
    ],
    'o': [
      '00000',
      '00000',
      '01110',
      '10001',
      '10001',
      '10001',
      '01110'
    ],
    'P': [
      '11110',
      '10001',
      '10001',
      '11110',
      '10000',
      '10000',
      '10000'
    ],
    'p': [
      '00000',
      '00000',
      '11110',
      '10001',
      '10001',
      '11110',
      '10000',
      '10000'
    ],
    'Q': [
      '01110',
      '10001',
      '10001',
      '10001',
      '10101',
      '10010',
      '01101'
    ],
    'q': [
      '00000',
      '00000',
      '01111',
      '10001',
      '10001',
      '01111',
      '00001',
      '00001'
    ],
    'R': [
      '11110',
      '10001',
      '10001',
      '11110',
      '10100',
      '10010',
      '10001'
    ],
    'r': [
      '00000',
      '00000',
      '10110',
      '11001',
      '10000',
      '10000',
      '10000'
    ],
    'S': [
      '01110',
      '10001',
      '10000',
      '01110',
      '00001',
      '10001',
      '01110'
    ],
    's': [
      '00000',
      '00000',
      '01111',
      '10000',
      '01110',
      '00001',
      '11110'
    ],
    'T': [
      '11111',
      '00100',
      '00100',
      '00100',
      '00100',
      '00100',
      '00100'
    ],
    't': [
      '00100',
      '00100',
      '01110',
      '00100',
      '00100',
      '00101',
      '00010'
    ],
    'U': [
      '10001',
      '10001',
      '10001',
      '10001',
      '10001',
      '10001',
      '01110'
    ],
    'u': [
      '00000',
      '00000',
      '10001',
      '10001',
      '10001',
      '10011',
      '01101'
    ],
    'V': [
      '10001',
      '10001',
      '10001',
      '10001',
      '10001',
      '01010',
      '00100'
    ],
    'v': [
      '00000',
      '00000',
      '10001',
      '10001',
      '10001',
      '01010',
      '00100'
    ],
    'W': [
      '10001',
      '10001',
      '10001',
      '10001',
      '10101',
      '11011',
      '10001'
    ],
    'w': [
      '00000',
      '00000',
      '10001',
      '10001',
      '10101',
      '11011',
      '10001'
    ],
    'X': [
      '10001',
      '01010',
      '00100',
      '00100',
      '00100',
      '01010',
      '10001'
    ],
    'x': [
      '00000',
      '00000',
      '10001',
      '01010',
      '00100',
      '01010',
      '10001'
    ],
    'Y': [
      '10001',
      '10001',
      '01010',
      '00100',
      '00100',
      '00100',
      '00100'
    ],
    'y': [
      '00000',
      '00000',
      '10001',
      '10001',
      '10001',
      '01111',
      '00001',
      '01110'
    ],
    'Z': [
      '11111',
      '00001',
      '00010',
      '00100',
      '01000',
      '10000',
      '11111'
    ],
    'z': [
      '00000',
      '00000',
      '11111',
      '00010',
      '00100',
      '01000',
      '11111'
    ],
    '0': [
      '01110',
      '10001',
      '10011',
      '10101',
      '11001',
      '10001',
      '01110'
    ],
    '1': [
      '00100',
      '01100',
      '00100',
      '00100',
      '00100',
      '00100',
      '01110'
    ],
    '2': [
      '01110',
      '10001',
      '00001',
      '00010',
      '00100',
      '01000',
      '11111'
    ],
    '3': [
      '01110',
      '10001',
      '00001',
      '00110',
      '00001',
      '10001',
      '01110'
    ],
    '4': [
      '00010',
      '00110',
      '01010',
      '10010',
      '11111',
      '00010',
      '00010'
    ],
    '5': [
      '11111',
      '10000',
      '10000',
      '11110',
      '00001',
      '10001',
      '01110'
    ],
    '6': [
      '01110',
      '10000',
      '10000',
      '11110',
      '10001',
      '10001',
      '01110'
    ],
    '7': [
      '11111',
      '00001',
      '00010',
      '00100',
      '01000',
      '01000',
      '01000'
    ],
    '8': [
      '01110',
      '10001',
      '10001',
      '01110',
      '10001',
      '10001',
      '01110'
    ],
    '9': [
      '01110',
      '10001',
      '10001',
      '01111',
      '00001',
      '00001',
      '01110'
    ],
    '!': [
      '00100',
      '00100',
      '00100',
      '00100',
      '00100',
      '00000',
      '00100'
    ],
    '.': [
      '00000',
      '00000',
      '00000',
      '00000',
      '00000',
      '00000',
      '00100'
    ],
    ' ': [
      '00000',
      '00000',
      '00000',
      '00000',
      '00000',
      '00000',
      '00000'
    ],
    // Add more characters as needed
  };

  // Character width (all characters are the same width in this font)
  const CHAR_WIDTH = 5;
  const CHAR_SPACING = 1; // Space between characters
  
  // Variables for the animation
  let offsetX = 0;
  let animationInterval = null;
  let virtualCanvas = [];
  
  // Control panel elements
  let controlPanel = null;

  // Initialize the virtual canvas
  function initVirtualCanvas() {
    virtualCanvas = [];
    
    // Create empty canvas
    for (let y = 0; y < GRID_HEIGHT; y++) {
      virtualCanvas[y] = [];
      for (let x = 0; x < GRID_WIDTH; x++) {
        virtualCanvas[y][x] = false;
      }
    }

    // Render text onto the virtual canvas
    renderText();
  }
  
  // Get character bitmap - returns false if character not in font
  function getCharacterBitmap(char) {
    return font[char] || font[' ']; // Default to space if character not found
  }
  
  // Render text onto the virtual canvas
  function renderText() {
    // Clear the virtual canvas
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        virtualCanvas[y][x] = false;
      }
    }

    // Calculate total width of the text with spacing
    const textWidth = (config.text.length * (CHAR_WIDTH + CHAR_SPACING)) - CHAR_SPACING;
    // Add a gap between the end and start of text for continuous scrolling
    const gapWidth = GRID_WIDTH / 2; // Adjustable gap width
    const totalWidth = textWidth + gapWidth;

    if (config.loopText && offsetX > totalWidth) {
      offsetX = 0; // Reset to beginning when we've scrolled past text + gap
    }

    // For continuous loop, render text both at current position and wrapped around
    for (let repeat = 0; repeat < (config.loopText ? 2 : 1); repeat++) {
      const repeatOffset = repeat * totalWidth;

      // For each character in the text
      for (let charIndex = 0; charIndex < config.text.length; charIndex++) {
        const char = config.text[charIndex];
        const bitmap = getCharacterBitmap(char);

        // Position of this character (accounting for scrolling and repeat)
        const charStartX = (charIndex * (CHAR_WIDTH + CHAR_SPACING)) - offsetX + repeatOffset;

        // If character is completely off-screen, skip it
        if (charStartX + CHAR_WIDTH < 0 || charStartX >= GRID_WIDTH) {
          continue;
        }

        // For each pixel in the character
        for (let y = 0; y < bitmap.length; y++) {
          const row = bitmap[y];
          for (let x = 0; x < CHAR_WIDTH; x++) {
            // Check if this pixel is on
            const isOn = row[x] === '1';

            // Calculate position on virtual canvas
            const canvasX = charStartX + x;
            const canvasY = y;

            // If pixel is within bounds of virtual canvas
            if (canvasX >= 0 && canvasX < GRID_WIDTH && canvasY >= 0 && canvasY < GRID_HEIGHT) {
              virtualCanvas[canvasY][canvasX] = isOn;
            }
          }
        }
      }
    }
  }
  
  // Update the GitHub contribution graph
  function updateContributionGraph() {
    // For each cell in the contribution grid
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        // Find the corresponding cell using the selector
        const cell = document.querySelector(`#contribution-day-component-${y}-${x}`);
        
        if (cell) {
          // Set the data-level attribute based on the virtual canvas
          cell.setAttribute('data-level', virtualCanvas[y][x] ? LEVEL_MAX : LEVEL_OFF);
        }
      }
    }
  }
  
  // Main animation loop
  function animate() {
    offsetX++;
    renderText();
    updateContributionGraph();
  }
  
  // Start the animation
  function startAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
    }
    
    initVirtualCanvas();
    animationInterval = setInterval(animate, config.speed);
  }
  
  // Stop the animation
  function stopAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
  }
  
  // Create the control panel
  function createControlPanel() {
    if (controlPanel) {
      document.body.removeChild(controlPanel);
    }

    // Main control panel container
    controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
      position: fixed;
      bottom: -20px;
      left: 0px;
      z-index: 9999;
      background: #000;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      transition: all 0.3s ease;
    `;

    // Header section with title and collapse button
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
    `;

    const title = document.createElement('h3');
    title.textContent = ':)';
    title.style.margin = '0';

    const collapseButton = document.createElement('span');
    collapseButton.innerHTML = '&#9660;'; // Down arrow
    collapseButton.style.cssText = `
      font-size: 12px;
      transition: transform 0.3s ease;
    `;

    header.appendChild(title);
    header.appendChild(collapseButton);

    // Content section (collapsible)
    const content = document.createElement('div');
    content.style.cssText = `
      padding: 15px;
      overflow: hidden;
      transition: max-height 0.3s ease;
    `;

    // Settings content
    const textLabel = document.createElement('label');
    textLabel.textContent = 'Text to Display:';
    textLabel.style.display = 'block';
    textLabel.style.marginBottom = '5px';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = config.text;
    textInput.style.cssText = `
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    `;

    const speedLabel = document.createElement('label');
    speedLabel.textContent = 'Speed (ms):';
    speedLabel.style.display = 'block';
    speedLabel.style.marginBottom = '5px';

    const speedInput = document.createElement('input');
    speedInput.type = 'number';
    speedInput.value = config.speed;
    speedInput.min = '50';
    speedInput.max = '500';
    speedInput.step = '10';
    speedInput.style.cssText = `
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    `;

    const loopLabel = document.createElement('label');
    loopLabel.style.display = 'block';
    loopLabel.style.marginBottom = '15px';

    const loopInput = document.createElement('input');
    loopInput.type = 'checkbox';
    loopInput.checked = config.loopText;
    loopInput.style.marginRight = '8px';

    loopLabel.appendChild(loopInput);
    loopLabel.appendChild(document.createTextNode('Loop Text'));

    const startButton = document.createElement('button');
    startButton.textContent = 'Start Animation';
    startButton.style.cssText = `
      background: #2ea44f;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      margin-right: 8px;
      cursor: pointer;
    `;

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Animation';
    stopButton.style.cssText = `
      background: #d73a49;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
    `;

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Settings';
    applyButton.style.cssText = `
      background: #0366d6;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      margin-top: 10px;
      cursor: pointer;
      width: 100%;
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(stopButton);

    // Add elements to content panel
    content.appendChild(textLabel);
    content.appendChild(textInput);
    content.appendChild(speedLabel);
    content.appendChild(speedInput);
    content.appendChild(loopLabel);
    content.appendChild(buttonContainer);
    content.appendChild(applyButton);

    // Add header and content to main panel
    controlPanel.appendChild(header);
    controlPanel.appendChild(content);

    // Collapse functionality
    let isCollapsed = false;

    function toggleCollapse() {
      isCollapsed = !isCollapsed;

      if (isCollapsed) {
        content.style.display = 'none';
        collapseButton.innerHTML = '&#9654;'; // Right arrow
        controlPanel.style.width = 'auto';
      } else {
        content.style.display = 'block';
        collapseButton.innerHTML = '&#9660;'; // Down arrow
        controlPanel.style.width = '';
      }
    }

    header.addEventListener('click', toggleCollapse);

    // Event handlers for buttons
    startButton.addEventListener('click', startAnimation);
    stopButton.addEventListener('click', stopAnimation);
    applyButton.addEventListener('click', function() {
      config.text = textInput.value;
      config.speed = parseInt(speedInput.value, 10);
      config.loopText = loopInput.checked;

      // Restart animation if running
      if (animationInterval) {
        stopAnimation();
        startAnimation();
      } else {
        // Just update the virtual canvas
        initVirtualCanvas();
        updateContributionGraph();
      }

      // Auto-collapse after applying settings
      if (!isCollapsed) {
        toggleCollapse();
      }
    });

    document.body.appendChild(controlPanel);
  }
  
  // Initialize the application
  function init() {
    // Create control panel
    createControlPanel();
    
    // Initialize virtual canvas
    initVirtualCanvas();
    
    // Update contribution graph
    updateContributionGraph();
    
    console.log('GitHub Contribution Graph Text Scroller initialized!');
    console.log('Use the control panel in the top-right to customize the display.');
  }
  
  // Start the application
  init();
})();
