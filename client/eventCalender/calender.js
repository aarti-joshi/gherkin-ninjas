// intialise the array as empty as it will be popularted with server data
let events = [];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// function to load from server
async function loadEventsFromServer() {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        
        if (!token) {
            showMessage("Authentication token missing. Please login.", true);
            return;
        }

        const response = await fetch('https://community-async.onrender.com/CommunityAsync', {
            headers: {
                'Authorization': `Bearer ${token}`  // Use the token for authentication
            }
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // Map the data to  events format
        events = data.map(event => ({
            day: new Date(event.event_date).getDate(),
            month: new Date(event.event_date).getMonth(),
            year: new Date(event.event_date).getFullYear(),
            description: event.event_name,
            fullDescription: event.description,
            category: event.category,
            point: event.point
        }));
        
        //load event then populate calender
        fillCalendar();

    } catch (error) {
        console.error("Error loading events:", error);
        showMessage("Error loading events. Please try again later.", true);
    }
}

function displayMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("month").innerHTML = months[currentMonth] + " " + currentYear;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayMonth();
    fillCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayMonth();
    fillCalendar();
}

function fillCalendar() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    while (calendar.firstChild) {
        calendar.removeChild(calendar.firstChild);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayBox = document.createElement('div');
        dayBox.className = 'day-box';

        const eventOnThisDay = events.find(event => event.day === i && event.month === currentMonth && event.year === currentYear);
        if (eventOnThisDay) {
            dayBox.classList.add('event');
            dayBox.addEventListener('click', () => showEventDetails(eventOnThisDay));
        }
        
        dayBox.innerHTML = i;
        calendar.appendChild(dayBox);
    }
}

function showEventDetails(event) {
    const eventDetails = document.getElementById('eventInfo');
    eventDetails.innerHTML = `
        <strong>${event.description}</strong><br>
        Description: ${event.fullDescription}<br>
        Category: ${event.category}<br>
        Points: ${event.point}
    `;
}


function showMessage(message, isError = false) {
    const eventDetails = document.getElementById('eventInfo');
    eventDetails.innerHTML = `<span style="color: ${isError ? 'red' : 'green'}">${message}</span>`;
}

// window loads display the month and fetch events
window.onload = function () {
    displayMonth();
    loadEventsFromServer();
};
