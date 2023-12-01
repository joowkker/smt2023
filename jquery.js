function toggleCloseButton() {
    // Enable or disable the close button based on the checkbox status
    var checkbox = document.getElementById("checkbox");
    var closeButton = document.getElementById("closeButton");
    closeButton.disabled = !checkbox.checked;
}

function closeReminder() {
    // Close the reminder when the button is clicked
    var reminder = document.getElementById("reminder");
    reminder.style.display = "none";
}