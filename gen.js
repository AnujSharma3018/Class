
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// Appointment form demo
const generalForm = document.getElementById("generalForm");

generalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const phone = document.getElementById("patientPhone").value.trim();
    const date = document.getElementById("appointmentDate").value;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!/^[0-9]{10}$/.test(phone)) {
        showFormMessage("Please enter a valid 10-digit mobile number.", true);
        return;
    }

    if (new Date(date + "T00:00:00") < today) {
        showFormMessage("Please select today or a future date.", true);
        return;
    }

    showFormMessage(
        "Thank you, " + name + "! Your demo request is ready. Please contact the clinic to confirm your appointment.",
        false
    );

    generalForm.reset();
});

function showFormMessage(message, isError) {
    const output = document.getElementById("formMessage");
    output.textContent = message;
    output.style.color = isError ? "#d93025" : "#119d86";
}

// Chatbot demo
function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function handleEnter(event) {
    if (event.key === "Enter") sendMessage();
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user-message");
    input.value = "";

    setTimeout(() => {
        addMessage(getGeneralReply(message), "bot-message");
    }, 500);
}

function addMessage(message, className) {
    const messages = document.getElementById("chatMessages");
    const bubble = document.createElement("div");

    bubble.className = className;
    bubble.textContent = message;

    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
}

function getGeneralReply(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
        return "Hello! Welcome to MediAura. How can I assist you?";
    }

    if (text.includes("fever") || text.includes("temperature")) {
        return "Fever can have many causes. Rest, drink fluids and consult a qualified doctor if it persists or worsens. Seek urgent care for serious symptoms.";
    }

    if (text.includes("diabetes") || text.includes("sugar")) {
        return "Diabetes care may include blood glucose monitoring, healthy eating and medical follow-up. Please consult your doctor for personal advice.";
    }

    if (text.includes("blood pressure") || text.includes("bp")) {
        return "Regular blood pressure monitoring is important. A healthcare professional can help interpret your readings and suggest next steps.";
    }

    if (text.includes("headache")) {
        return "Headaches can have different causes. If a headache is sudden and extremely severe, or comes with weakness, confusion or vision problems, seek emergency care.";
    }

    if (text.includes("appointment") || text.includes("doctor")) {
        return "You can use the appointment form on this page to prepare a consultation request. Please contact the clinic to confirm your booking.";
    }

    if (text.includes("cough") || text.includes("cold")) {
        return "Cough and cold can have several causes. Rest and fluids may help. Consult a doctor if symptoms worsen or breathing becomes difficult.";
    }

    if (text.includes("chest pain") || text.includes("breathing")) {
        return "Chest pain or serious breathing difficulty can be an emergency. Please seek immediate medical attention or call your local emergency number.";
    }

    return "I can share general information about fever, diabetes, blood pressure and routine checkups. For diagnosis or treatment, please consult a qualified doctor.";
}

// This is a rule-based demo assistant, not a real AI or medical diagnosis tool.
