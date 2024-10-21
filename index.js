// Initially set the text content of the paragraph
document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

// Event listener for DOMContentLoaded to change the text
document.addEventListener("DOMContentLoaded", function() {
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});
