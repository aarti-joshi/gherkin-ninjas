// Test for the calendar feature
const { fillCalendar } = require('./scripts');

describe('fillCalendar', () => {
  let calendar;

  beforeAll(() => {
    // Create a div element with the 'calendar' id
    calendar = document.createElement('div');
    calendar.id = 'calendar';
    document.body.appendChild(calendar);
  });

  beforeEach(() => {
    // Reset the 'calendar' element before each test
    calendar.innerHTML = '';
  });

  it('should populate the calendar grid correctly', () => {
    // Set the current month and year to a known value
    const originalMonth = 9; // September
    const originalYear = 2023;
    const originalDate = new Date(originalYear, originalMonth, 1);

    // Call the function with the known month and year
    fillCalendar(originalDate);

    // Check if the calendar grid contains the expected number of days (based on the test data)
    const dayBoxes = calendar.querySelectorAll('.day-box');
    expect(dayBoxes).toHaveLength(30); // September 2023 has 30 days

    // You can add more specific assertions based on your test data and expected results
    // For example, check if the event days are correctly highlighted or if the non-event days are not highlighted.

    // Also, you can simulate user interactions and test event handling, but it might require additional setup.
  });
});
