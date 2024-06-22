var btn = document.getElementById("btn")

function update() {
    btn = window.alert("Thanks for submitting")
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const feedbackTextarea = document.getElementById('feedback');
    const status = document.getElementById('status');
    let recognition;

    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support the Web Speech API.');
    } else {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            status.textContent = 'Recording...';
            startButton.disabled = true;
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            feedbackTextarea.value = transcript;
            status.textContent = 'Recording stopped.';
            startButton.disabled = false;
        };

        recognition.onerror = (event) => {
            status.textContent = 'Error occurred in recognition: ' + event.error;
            startButton.disabled = false;
        };

        recognition.onend = () => {
            status.textContent = 'Recording stopped.';
            startButton.disabled = false;
        };

        startButton.addEventListener('click', () => {
            recognition.start();
        });
    }

    // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Feedback submitted: ' + feedbackTextarea.value);
        feedbackTextarea.value = '';
    });
});
