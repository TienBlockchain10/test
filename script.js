document.getElementById('noButton').addEventListener('click', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 25) + 'px';
    yesButton.style.padding = (parseInt(window.getComputedStyle(yesButton).padding) + 25) + 'px';
    const noButtonTexts = ["No", "Are you sure LEXI?", "Really sure LEXII?", "Are you positive LEXI???", "Honey please", "Just think about it bebe", "If you say no, I'll be muy sad", "I'll be muy muy sad", "I'll be muy muy muy sad", "I'll be uber sad", "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "Don't be ghey woman click yes naur", "You're breaking my heart ;("];
    const currentText = noButton.textContent;
    const currentIndex = noButtonTexts.indexOf(currentText);
    noButton.textContent = noButtonTexts[(currentIndex + 1) % noButtonTexts.length] || "No";
});

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; // Replace with the path to your new HTML file
});
