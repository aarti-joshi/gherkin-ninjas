// Initialize current month and year
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Run when the window loads
window.onload = function () {
    displayMonth();
    fillCalendar();
};

// Display the current month and year
function displayMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("month").innerHTML = months[currentMonth] + " " + currentYear;
}

// Navigate to the previous month
function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayMonth();
    clearCalendar();
    fillCalendar();
}

// Navigate to the next month
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayMonth();
    clearCalendar();
    fillCalendar();
}

// Clear the existing calendar grid
function clearCalendar() {
    const calendar = document.getElementById('calendar');
    while (calendar.firstChild) {
        calendar.removeChild(calendar.firstChild);
    }
}

// Fill the calendar grid based on the selected month
function fillCalendar() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayBox = document.createElement('div');
        dayBox.className = 'day-box';
        dayBox.innerHTML = i;
        calendar.appendChild(dayBox);
    }
}
