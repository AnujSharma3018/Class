
const chatBox = document.getElementById("chatBox");
const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

document.getElementById("chatToggle").onclick = function() {
    chatBox.style.display = "block";
};

document.getElementById("closeChat").onclick = function() {
    chatBox.style.display = "none";
};

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = text;

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;

    return div;
}

async function sendMessage() {

    const question = userInput.value.trim();

    if (!question) return;

    addMessage(question, "user");

    userInput.value = "";

    const loading = addMessage("Thinking...", "bot");

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: question
            })
        });

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        loading.textContent = data.reply ||
            "Please contact a neurologist for medical guidance.";

    } catch (error) {

        loading.textContent =
            "AI service is not connected. Please contact our healthcare team.";

    }
}

document.getElementById("sendBtn").onclick = sendMessage;

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Appointment form

document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Appointment request received! Backend connection is required for confirmation.");

    this.reset();

});
