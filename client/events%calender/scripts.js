// Dummy events for October
const events = [
    { day: 5, month: 9, year: 2023, description: 'Event 1' },
    { day: 15, month: 9, year: 2023, description: 'Event 2' },
    { day: 25, month: 9, year: 2023, description: 'Event 3' },
  ];
  
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  
  // Populate calendar and sidebar on page load
  window.onload = function () {
      displayMonth();
      fillCalendar();
  };
  
  // Display current month and year
  function displayMonth() {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      document.getElementById("month").innerHTML = months[currentMonth] + " " + currentYear;
  }
  
  // Navigate to previous month
  function prevMonth() {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      displayMonth();
      fillCalendar();
  }
  
  // Navigate to next month
  function nextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      displayMonth();
      fillCalendar();
  }
  
  // Populate calendar grid
  function fillCalendar() {
      const calendar = document.getElementById('calendar');
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      
      // Clear existing day boxes
      while (calendar.firstChild) {
          calendar.removeChild(calendar.firstChild);
      }
  
      for (let i = 1; i <= daysInMonth; i++) {
          const dayBox = document.createElement('div');
          dayBox.className = 'day-box';
  
          // Check if there is an event on this day
          const eventOnThisDay = events.find(event => event.day === i && event.month === currentMonth && event.year === currentYear);
          if (eventOnThisDay) {
              dayBox.classList.add('event'); // Highlight day with event
              dayBox.addEventListener('click', () => showEventDetails(eventOnThisDay)); // Make it clickable
          }
          
          dayBox.innerHTML = i;
          calendar.appendChild(dayBox);
      }
  }
  
  // Show event details at the bottom
  function showEventDetails(event) {
      const eventDetails = document.getElementById('eventInfo');
      eventDetails.innerHTML = `Day ${event.day}: ${event.description}`;
  }
  
  