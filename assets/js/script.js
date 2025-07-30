
    // Function to update the date and time
    function showUpdatedDateTime() {
        const now = new Date(); // Get current date and time

        // Format the date and time
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDateTime = now.toLocaleDateString('en-US', options);

        // Insert into the placeholder
        document.getElementById('dateTime').textContent = formattedDateTime;
    }

    // Call the function to display the updated time
    showUpdatedDateTime();

    // Optional: Auto-update the time every second
setInterval(showUpdatedDateTime, 1000);
    

 function showAlert() {
   alert("Sent message successfully!");
}
 
 function giveAlert() {
   alert("Sent message successfully!");
 }



//  live chat
function toggleChat() {
                const chatContainer = document.getElementById("chatContainer");
                chatContainer.style.display = chatContainer.style.display === "flex" ? "none" : "flex";
            }

            function sendMessage() {
                const inputField = document.getElementById("messageInput");
                const message = inputField.value.trim();
                if (message === "") return;

                // Display user message
                displayMessage(message, "user-message");

                // Simulate bot response
                setTimeout(() => {
                    displayMessage("Hello! How can I help?", "bot-message");
                }, 1000);

                inputField.value = "";
            }

            function displayMessage(message, className) {
                const chatBox = document.getElementById("chatBox");
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("chat-message", className);
                messageDiv.innerText = message;
                chatBox.appendChild(messageDiv);

                // Auto-scroll to the latest message
                chatBox.scrollTop = chatBox.scrollHeight;
            }

