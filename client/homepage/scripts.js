<<<<<<< HEAD
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
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
=======
document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.querySelector('.progress-text');
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
>>>>>>> fe650eedf770a87eeff08a6273aaa2efe0fce1db

  progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
  progressBar.style.strokeDashoffset = `${circumference}`;

<<<<<<< HEAD
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

=======
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
>>>>>>> fe650eedf770a87eeff08a6273aaa2efe0fce1db
