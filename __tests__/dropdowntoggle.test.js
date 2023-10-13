
// Import the function to be tested
const { toggleDropdown } = require('../client/dropdowntoggle');

// Create a mock DOM element for testing
document.body.innerHTML = `
<div id="dropdown" style="display: block">
  Dropdown Content
</div>
`;

// Mock the console.log function to capture logs
const originalConsoleLog = console.log;
console.log = jest.fn();

describe('toggleDropdown', () => {
  beforeEach(() => {
    // Reset the DOM element display style before each test
    document.getElementById('dropdown').style.display = 'block';
  });

  test('should toggle the display style from block to none', () => {
    toggleDropdown();
    expect(document.getElementById('dropdown').style.display).toBe('none');
  });

  test('should toggle the display style from none to block', () => {
    // Set the initial state to "none"
    document.getElementById('dropdown').style.display = 'none';

    toggleDropdown();
    expect(document.getElementById('dropdown').style.display).toBe('block');
  });

  test('should log the changes to the console', () => {
    toggleDropdown();
    expect(console.log).toHaveBeenCalledWith('Dropdown state changed to: none');
  });
});

