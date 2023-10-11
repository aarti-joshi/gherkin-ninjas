document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-text');
  
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
});


// update progress
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
