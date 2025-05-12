# GitHub Contribution Display

A JavaScript tool for creating customizable pixel displays on the GitHub contribution graph. The script turns GitHub's contribution activity board into a controllable LED-like display that can scroll text messages.

## Project Development History

### Initial Concept
The project began by analyzing a screenshot of GitHub's contribution grid to understand its structure. GitHub's grid displays contribution activity levels with colored squares, effectively creating a 7×52 grid of cells that can be manipulated.

### Font Design
A custom 5×7 pixel font was created for all alphanumeric characters and basic punctuation. Each character is defined as a binary pattern (1 = pixel on, 0 = pixel off).

#### Sample Character:
```
'A': [
  '01110', // ░███░
  '10001', // █░░░█
  '10001', // █░░░█
  '11111', // █████
  '10001', // █░░░█
  '10001', // █░░░█
  '10001'  // █░░░█
]
```

### Core Implementation
1. Created a virtual canvas to map text onto the grid
2. Implemented DOM manipulation to change GitHub cell colors
3. Developed scrolling mechanism for continuous text display

### Enhancements
1. Added lowercase character support
2. Implemented continuous looping with configurable gap spacing
3. Created collapsible UI panel for controlling the display settings
4. Added customization options for text content, speed, and animation loops

## Usage
```javascript
// Copy the entire content of index.js and paste it into the browser console
// while viewing any GitHub profile's contributions page
```

### Controls
- **Text to Display**: Change the scrolling message
- **Speed (ms)**: Adjust the scrolling speed (lower = faster)
- **Loop Text**: Toggle continuous scrolling
- **Start/Stop Animation**: Control the animation
- **Apply Settings**: Update with new configuration

## DOM Manipulation
The script targets GitHub's contribution cells using CSS selectors:
```javascript
document.querySelector(`#contribution-day-component-${y}-${x}`)
```

Each cell's appearance is modified by changing its `data-level` attribute:
```javascript
cell.setAttribute('data-level', virtualCanvas[y][x] ? LEVEL_MAX : LEVEL_OFF);
```

## Technical Notes
- Standard GitHub contribution graph dimensions: 7×52 cells
- Contribution intensity levels range from 0-4
- The collapsible UI can be hidden after configuration

## Future Enhancements
- Additional special characters and symbols
- Support for custom patterns and animations
- Variable font sizes and styles