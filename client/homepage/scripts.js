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
function updateProgress(points, nextGoal) {
  // Calculate progress as a percentage
  const progress = points / nextGoal;

  // Update stroke-dashoffset based on progress
  const offset = circumference - (progress * circumference);
  progressBar.style.strokeDashoffset = offset;

  // Update text
  progressText.textContent = `${points} / ${nextGoal}`;
}

// Test the function
updateProgress(30, 100);
