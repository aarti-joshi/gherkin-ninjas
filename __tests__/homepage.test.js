// Test file for homepage:
const { updateProgress } = require('../client/homepage/scripts');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('updateProgress', () => {
  let document;
  let progressBar;
  let progressText;

  beforeAll(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    document = dom.window.document;

    // Create and append necessary elements
    progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    progressText = document.createElement('div');
    progressText.className = 'progress-text';
    document.body.appendChild(progressText);
  });

  it('should update progress bar and text correctly', () => {
    // Call the function
    updateProgress(30, 100);

    // Assert the results
    expect(progressBar.style.strokeDashoffset).toBe('70'); // Adjust this value based on your calculation
    expect(progressText.textContent).toBe('30 / 100');
  });
});

