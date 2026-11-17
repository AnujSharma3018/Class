
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

        botMessage.textContent = getEyeReply(question);

        messages.scrollTop = messages.scrollHeight;

    }, 700);
}

/* EYE AI DEMO RESPONSES */
function getEyeReply(question) {

    const msg = question.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! 👋 Welcome to MediAura Eye Care. How can I help you?";
    }

    if (msg.includes("eye pain") || msg.includes("pain")) {
        return "Eye pain can have different causes. Avoid rubbing your eyes and arrange a professional eye examination. Severe pain or sudden vision changes need urgent medical attention.";
    }

    if (msg.includes("dry eye") || msg.includes("dryness")) {
        return "Dry eyes can cause irritation, burning or a gritty feeling. An eye specialist can assess the cause and recommend suitable treatment.";
    }

    if (msg.includes("cataract")) {
        return "Cataracts cause clouding of the eye's natural lens. An ophthalmologist can examine your eyes and discuss suitable treatment options.";
    }

    if (msg.includes("glaucoma")) {
        return "Glaucoma can damage the optic nerve and may cause vision loss. Regular eye examinations are important because early glaucoma often has no symptoms.";
    }

    if (msg.includes("glasses") || msg.includes("spectacles") ||
        msg.includes("vision")) {
        return "An eye examination can determine whether you need glasses or another form of vision correction.";
    }

    if (msg.includes("red eye") || msg.includes("redness")) {
        return "Red eyes can have several causes, including irritation or infection. Avoid self-medicating with eye drops and consult an eye professional.";
    }

    if (msg.includes("child") || msg.includes("baby")) {
        return "Children should have age-appropriate vision screenings. Consult an eye care professional if you notice squinting, eye misalignment or difficulty seeing.";
    }

    if (msg.includes("appointment") || msg.includes("book")) {
        return "You can request an eye care appointment using the booking form on this page.";
    }

    if (msg.includes("emergency") || msg.includes("sudden vision") ||
        msg.includes("injury")) {
        return "Sudden vision loss, serious eye injury or severe eye pain needs immediate medical attention. Please visit an emergency department or eye specialist now.";
    }

    return "Thank you for your question! 👁️ I can provide general information about eye health, glasses, dry eyes, cataracts and vision care. For diagnosis or treatment, please consult a qualified ophthalmologist.";
}

/* APPOINTMENT FORM */
const eyeForm = document.getElementById("eyeForm");

const dateField = document.getElementById("date");

dateField.min = new Date().toISOString().split("T")[0];

eyeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const date = dateField.value;

    const concern = document.getElementById("concern").value.trim();

    const message = document.getElementById("formMessage");

    if (!/^[0-9]{10}$/.test(phone)) {

        message.style.color = "red";

        message.textContent =
            "Please enter a valid 10-digit mobile number.";

        return;
    }

    if (!name || !service || !date || !concern) {

        message.style.color = "red";

        message.textContent =
            "Please complete all required fields.";

        return;
    }

    message.style.color = "#009f91";

    message.textContent =
        "Thank you " + name +
        "! Your eye care appointment request is ready. Please connect a backend to submit your booking.";

    eyeForm.reset();

    dateField.min = new Date().toISOString().split("T")[0];

});
