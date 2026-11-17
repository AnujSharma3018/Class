
// Heart Health Assistant

function askHeartAI() {

    let input = document.getElementById("question");

    let message = input.value.trim();

    if (message === "") return;

    addChat(message, "user");

    input.value = "";

    setTimeout(function() {

        let reply = getHeartResponse(message);

        addChat(reply, "bot");

    }, 500);
}

function addChat(message, type) {

    let chat = document.getElementById("chatArea");

    let div = document.createElement("div");

    div.className = type;

    div.textContent = message;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;
}

function getHeartResponse(message) {

    let q = message.toLowerCase();

    // Emergency warning
    if (
        q.includes("chest pain") ||
        q.includes("heart attack") ||
        q.includes("seene mein dard") ||
        q.includes("heart pain")
    ) {
        return "WARNING: Chest pain can be a sign of a heart attack. Call your local emergency service immediately. Do not wait for an AI response or drive yourself.";
    }

    if (
        q.includes("heart healthy") ||
        q.includes("healthy heart")
    ) {
        return "Heart health ke liye balanced diet, regular physical activity, good sleep aur tobacco se door rehna helpful hai. Regular medical checkups bhi karwayein.";
    }

    if (
        q.includes("blood pressure") ||
        q.includes("bp")
    ) {
        return "Blood pressure ko regularly monitor karna important hai. Agar readings abnormal hain, healthcare professional se consult karein.";
    }

    if (
        q.includes("heartbeat") ||
        q.includes("heart rate")
    ) {
        return "Heart rate activity, stress, age aur health ke according change hoti hai. Agar heartbeat ke saath chest pain, fainting ya breathing difficulty ho, emergency care lein.";
    }

    if (
        q.includes("diet") ||
        q.includes("food")
    ) {
        return "Heart-friendly diet mein fruits, vegetables, whole grains aur kam salt wale balanced foods shamil ho sakte hain.";
    }

    if (
        q.includes("exercise") ||
        q.includes("walk")
    ) {
        return "Regular physical activity heart health ke liye beneficial hai. Apni health condition ke according doctor se exercise advice lein.";
    }

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("namaste")
    ) {
        return "Namaste! Welcome to HeartCare Clinic. Aap heart health ke baare mein kya jaanna chahte hain?";
    }

    return "Main general heart health information de sakta hoon. Apna question thoda detail mein poochhein. Main diagnosis ya medicine prescribe nahi kar sakta. Personal medical advice ke liye cardiologist se consult karein.";
}

// Enter key support

document.getElementById("question")
.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        askHeartAI();
    }

});
