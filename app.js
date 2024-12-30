// import data from "./data.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const object = JSON.parse(data);

//   // Select all the category sections
//   const categorySections = document.querySelectorAll(".responsive");

//   // Iterate through the category sections and match them with data
//   categorySections.forEach((div, index) => {
//     const { timeframes } = object[index]; // Access the corresponding object in the data
//     const category = "daily"; // Choose the timeframe (daily, weekly, monthly)

//     // Create elements for current and previous time
//     const timeFrames1 = document.createElement("h2");
//     const timeFrames2 = document.createElement("p");

//     // Set the innerHTML with current and previous values
//     timeFrames1.innerHTML = ` ${timeframes[category].current}hrs`;
//     timeFrames2.innerHTML = `Yesterday - ${timeframes[category].previous}hrs`;

//     // Append the elements to the div
//     div.appendChild(timeFrames1);
//     div.appendChild(timeFrames2);
//   });
// });

import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const object = JSON.parse(data);

  // Select all the category sections
  const categorySections = document.querySelectorAll(".responsive");

  // Select all the <p> elements for timeframe selection
  const timeframeSelectors = document.querySelectorAll(".text p");

  // Function to update the categories based on the selected timeframe
  function updateTimeframe(category) {
    
    // Clear all category sections before updating
    categorySections.forEach((div) => (div.innerHTML = ""));

    // Iterate through the category sections and match them with data
    categorySections.forEach((div, index) => {
      const {timeframes} = object[index]; // Access the corresponding object in the data

      // // Check if the timeframe exists
      // if (!timeframes[category]) {
      //   console.error(`Timeframe "${category}" is not found in the data for "${title}".`);
      //   return;
      // }

      // Create elements for current and previous time
      const timeFrames1 = document.createElement("h2");
      const timeFrames2 = document.createElement("p");

      // Set the innerHTML with current time
      timeFrames1.innerHTML = ` ${timeframes[category].current}hrs`;

      // Dynamically adjust the previous timeframe text based on the selected category
      let previousText;
      if (category === "daily") {
        previousText = `Yesterday - ${timeframes[category].previous}hrs`;
      }
      else if (category === "weekly") {
        previousText = `Last Week - ${timeframes[category].previous}hrs`;
      } 
      else if (category === "monthly") {
        previousText = `Last Month - ${timeframes[category].previous}hrs`;
      } 
      // else {
      //   previousText = `Previous: ${timeframes[category].previous}hrs`;
      // }

      timeFrames2.innerHTML = previousText;

      // Append the elements to the div
      div.appendChild(timeFrames1);
      div.appendChild(timeFrames2);
    });
  }

  // Add event listener to each timeframe selector
  timeframeSelectors.forEach((selector) => {
    selector.addEventListener("click", () => {
      const category = selector.innerText.toLowerCase(); // Get the timeframe using innerText
      // console.log("Selected timeframe:", category); // Log for debugging
      updateTimeframe(category);
    });
  });

  // Set "Daily" as the default timeframe on page load
  const defaultSelector = document.querySelector('p');
  if (defaultSelector) {
    defaultSelector.classList.add("active"); // Optionally highlight the selected timeframe
    updateTimeframe("daily"); // Update the content for the "Daily" timeframe
  }
});

