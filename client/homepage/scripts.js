// // Select the necessary elements
// const progressBar = document.querySelector('.progress-bar');
// const progressText = document.querySelector('.progress-text');

// // Calculate the circumference
// const radius = 40;
// const circumference = 2 * Math.PI * radius;

// // Initialize progress circle
// progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
// progressBar.style.strokeDashoffset = `${circumference}`;

// // Function to update progress
// // function updateProgress(points, nextGoal) {
// //   // Calculate progress as a percentage
// //   const progress = points / nextGoal;

// //   // Update stroke-dashoffset based on progress
// //   const offset = circumference - (progress * circumference);
// //   progressBar.style.strokeDashoffset = offset;

// //   // Update text
// //   progressText.textContent = `${points} / ${nextGoal}`;
// // }
// // Function to update progress with animation
// function updateProgress(points, nextGoal) {
//     // Calculate progress as a percentage
//     const progress = points / nextGoal;
  
//     // Calculate the final stroke-dashoffset based on progress
//     const finalOffset = circumference - (progress * circumference);
  
//     let currentOffset = circumference;
//     const step = (circumference - finalOffset) / 100;
//     const intervalTime = 10; // Time in milliseconds for each step
    
//     const interval = setInterval(() => {
//       if (currentOffset <= finalOffset) {
//         clearInterval(interval);
//       } else {
//         currentOffset -= step;
//         progressBar.style.strokeDashoffset = currentOffset;
//       }
//     }, intervalTime);
  
//     // Update text
//     progressText.textContent = `${points} / ${nextGoal}`;
//   }
  

// // Test the function
// //updateProgress(30, 100);


// Select the necessary elements
// const progressBar = document.querySelector('.progress-bar');
// const progressText = document.querySelector('.progress-text');

//   progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
//   progressBar.style.strokeDashoffset = `${circumference}`;

// // Function to update progress with animation
// function updateProgress(points, nextGoal) {
//     // Calculate progress as a percentage
//     const progress = points / nextGoal;
  
//     // Calculate the final stroke-dashoffset based on progress
//     const finalOffset = circumference - (progress * circumference);
  
//     let currentOffset = circumference;
//     const step = (circumference - finalOffset) / 100;
//     const intervalTime = 10; // Time in milliseconds for each step
    
//     const interval = setInterval(() => {
//       if (currentOffset <= finalOffset) {
//         clearInterval(interval);
//       } else {
//         currentOffset -= step;
//         progressBar.style.strokeDashoffset = currentOffset;
//       }
//     }, intervalTime);
  
//     // Update text
//     progressText.textContent = `${points} / ${nextGoal}`;
//   }

const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

// Adjusted for the new circle size
const radius = 80;
const circumference = 2 * Math.PI * radius;

progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
progressBar.style.strokeDashoffset = `${circumference}`;

function updateProgress(points, nextGoal) {
  const progress = points / nextGoal;
  const finalOffset = circumference - (progress * circumference);

  let currentOffset = circumference;
  const step = (circumference - finalOffset) / 100;
  const intervalTime = 10;
  
  const interval = setInterval(() => {
    if (currentOffset <= finalOffset) {
      clearInterval(interval);
    } else {
      currentOffset -= step;
      progressBar.style.strokeDashoffset = currentOffset;
    }
  }, intervalTime);

  progressText.textContent = `${points} / ${nextGoal}`;
}

updateProgress(30, 100);

document.addEventListener("DOMContentLoaded", async function() {
  try {
      // Async function to fetch events from the API
      const response = await fetch('https://community-async.onrender.com/CommunityAsync', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      });
      
      // Convert the fetched response to JSON
      const data = await response.json();
      
      // Extract only the first 3 events
      const upcomingEvents = data.slice(0, 3);
      
      // Get the container where we'll append our events
      const eventsContainer = document.getElementById('events-list');
      
      upcomingEvents.forEach(event => {
          // Create an individual event card div
          const eventCard = document.createElement('div');
          eventCard.classList.add('event-card');
          
          // Format the event's date
          const eventDate = new Date(event.event_date);
          const formattedDate = `${eventDate.getDate()}-${eventDate.getMonth() + 1}-${eventDate.getFullYear()}`;
          
          // Populate the event card with details about the event
          eventCard.innerHTML = `
              <h3>${event.event_name}</h3>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Category:</strong> ${event.category}</p>
              <p>${event.description}</p>
              <p><strong>Points:</strong> ${event.point}</p>
          `;
          
          // Create a "Register" button for the event card
          const registerBtn = document.createElement('button');
          registerBtn.textContent = "Register";
          registerBtn.classList.add('register-btn');
          
          // Attach an event listener to the register button
          // This will show an alert when the user clicks to register for an event
          // and then disable the button
          registerBtn.addEventListener('click', function() {
              alert("You've registered for this event!");
              registerBtn.disabled = true;
          });
          
          // Attach the register button to the event card
          eventCard.appendChild(registerBtn);
          
          // Attach the event card to our main events container
          eventsContainer.appendChild(eventCard);
      });
  } catch (error) {
      // Log any errors to the console
      console.error("Error fetching events:", error);
  }
});


