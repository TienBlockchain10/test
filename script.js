document.getElementById('noButton').addEventListener('click', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 25) + 'px';
    yesButton.style.padding = (parseInt(window.getComputedStyle(yesButton).padding) + 25) + 'px';
    const noButtonTexts = ["Really?", "Are you sure?", "Think again!", "But why?", "Please?"];
    const currentText = noButton.textContent;
    const currentIndex = noButtonTexts.indexOf(currentText);
    noButton.textContent = noButtonTexts[(currentIndex + 1) % noButtonTexts.length] || "No";
});

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; // Replace with the path to your new HTML file
});
