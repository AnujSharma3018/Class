
/* MOBILE MENU */
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("show");
    });
});

/* CHATBOT */
function toggleChat() {
    document.getElementById("chatBox").classList.toggle("active");
}

function openChat() {
    document.getElementById("chatBox").classList.add("active");
    document.getElementById("userInput").focus();
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("chatMessages");

    const question = input.value.trim();

    if (!question) return;

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;

    messages.appendChild(userMessage);

    input.value = "";

    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = "Typing...";

    messages.appendChild(botMessage);

    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {

        botMessage.textContent = getDentalReply(question);

        messages.scrollTop = messages.scrollHeight;

    }, 700);
}

/* DENTAL AI DEMO RESPONSES */
function getDentalReply(question) {

    const msg = question.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! 👋 Welcome to MediAura Dental Care. How can I help you?";
    }

    if (msg.includes("tooth pain") || msg.includes("toothache") ||
        msg.includes("teeth pain")) {
        return "Tooth pain can have different causes, including cavities or infection. Please arrange a dental examination. If you have facial swelling, fever or difficulty swallowing, seek urgent medical care.";
    }

    if (msg.includes("cleaning")) {
        return "Professional dental cleaning helps remove plaque and tartar. A dentist can recommend how often you need it.";
    }

    if (msg.includes("whitening")) {
        return "Teeth whitening is a dental cosmetic procedure. Consult a dentist first to check whether it is suitable for your teeth and gums.";
    }

    if (msg.includes("braces")) {
        return "Braces help correct teeth alignment. An orthodontist can assess your teeth and explain treatment options.";
    }

    if (msg.includes("root canal")) {
        return "Root canal treatment may be recommended for an infected or damaged tooth. A dentist needs to examine the tooth before recommending treatment.";
    }

    if (msg.includes("implant")) {
        return "Dental implants are one option for replacing missing teeth. Suitability depends on your oral health and bone condition.";
    }

    if (msg.includes("gum") || msg.includes("bleeding")) {
        return "Bleeding gums can indicate gum inflammation or other dental problems. Please arrange a dental check-up.";
    }

    if (msg.includes("appointment") || msg.includes("book")) {
        return "You can request a dental appointment using the booking form on this page.";
    }

    if (msg.includes("doctor") || msg.includes("dentist")) {
        return "Please contact MediAura to confirm the availability and qualifications of a dental professional.";
    }

    if (msg.includes("emergency") || msg.includes("swelling")) {
        return "Severe dental swelling, fever, or difficulty swallowing or breathing needs urgent professional assessment. For breathing or swallowing difficulty, seek emergency care immediately.";
    }

    return "Thank you for your question! 🦷 I can provide general information about dental hygiene, braces, cleaning, whitening and dental treatments. For diagnosis and treatment, please consult a qualified dentist.";
}

/* APPOINTMENT FORM */
const dentalForm = document.getElementById("dentalForm");
const dateField = document.getElementById("date");

dateField.min = new Date().toISOString().split("T")[0];

dentalForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = dateField.value;
    const concern = document.getElementById("concern").value.trim();

    const message = document.getElementById("formMessage");

    if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid 10-digit mobile number.";
        return;
    }

    if (!name || !service || !date || !concern) {
        message.style.color = "red";
        message.textContent = "Please complete all fields.";
        return;
    }

    message.style.color = "#009f91";

    message.textContent =
        "Thank you " + name +
        "! Your dental appointment request is ready. Please connect a backend to submit your booking.";

    dentalForm.reset();

    dateField.min = new Date().toISOString().split("T")[0];
});
