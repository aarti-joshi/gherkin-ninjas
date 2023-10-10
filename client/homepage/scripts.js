// Select the necessary elements
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

// Calculate the circumference
const radius = 40;
const circumference = 2 * Math.PI * radius;

// Initialize progress circle
progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
progressBar.style.strokeDashoffset = `${circumference}`;

// Function to update progress
// function updateProgress(points, nextGoal) {
//   // Calculate progress as a percentage
//   const progress = points / nextGoal;

//   // Update stroke-dashoffset based on progress
//   const offset = circumference - (progress * circumference);
//   progressBar.style.strokeDashoffset = offset;

//   // Update text
//   progressText.textContent = `${points} / ${nextGoal}`;
// }
// Function to update progress with animation
function updateProgress(points, nextGoal) {
    // Calculate progress as a percentage
    const progress = points / nextGoal;
  
    // Calculate the final stroke-dashoffset based on progress
    const finalOffset = circumference - (progress * circumference);
  
    let currentOffset = circumference;
    const step = (circumference - finalOffset) / 100;
    const intervalTime = 10; // Time in milliseconds for each step
    
    const interval = setInterval(() => {
      if (currentOffset <= finalOffset) {
        clearInterval(interval);
      } else {
        currentOffset -= step;
        progressBar.style.strokeDashoffset = currentOffset;
      }
    }, intervalTime);
  
    // Update text
    progressText.textContent = `${points} / ${nextGoal}`;
  }
  

// Test the function
updateProgress(30, 100);
