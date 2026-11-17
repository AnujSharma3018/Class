
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// Appointment form demo
const childForm = document.getElementById("childForm");

childForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const parentName = document.getElementById("parentName").value.trim();
    const phone = document.getElementById("parentPhone").value.trim();
    const age = Number(document.getElementById("childAge").value);
    const date = document.getElementById("appointmentDate").value;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!/^[0-9]{10}$/.test(phone)) {
        showFormMessage("Please enter a valid 10-digit mobile number.", true);
        return;
    }

    if (!Number.isInteger(age) || age < 0 || age > 18) {
        showFormMessage("Please enter a valid age between 0 and 18 years.", true);
        return;
    }

    if (!date || new Date(date + "T00:00:00") < today) {
        showFormMessage("Please select today or a future date.", true);
        return;
    }

    showFormMessage(
        "Thank you, " + parentName + "! Your demo request is ready. Please contact the clinic to confirm.",
        false
    );

    childForm.reset();
});

function showFormMessage(message, isError) {
    const output = document.getElementById("formMessage");
    output.textContent = message;
    output.style.color = isError ? "#d93025" : "#119d86";
}

// Chatbot demo
function toggleChat() {
    const chat = document.getElementById("chatBox");

    chat.style.display =
        chat.style.display === "block" ? "none" : "block";
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user-message");
    input.value = "";

    setTimeout(() => {
        addMessage(getChildReply(message), "bot-message");
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

function getChildReply(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 Welcome to MediAura Child Care. How can I help?";
    }

    if (text.includes("fever") || text.includes("temperature")) {
        return "A child's fever needs assessment based on age and symptoms. Any fever in a baby younger than 3 months needs urgent medical assessment. Seek emergency help if the child has difficulty breathing, seizures or is difficult to wake.";
    }

    if (text.includes("vaccination") || text.includes("vaccine")) {
        return "Vaccination schedules depend on the child's age and previous doses. Please consult a pediatrician or check the official national immunization schedule.";
    }

    if (text.includes("newborn") || text.includes("baby")) {
        return "Newborns need regular feeding, warmth and medical checkups. Poor feeding, breathing difficulty, unusual sleepiness or fever needs prompt medical attention.";
    }

    if (text.includes("food") || text.includes("nutrition") || text.includes("diet")) {
        return "Children need age-appropriate balanced nutrition. Feeding advice differs for babies and older children. A pediatrician or qualified dietitian can guide you.";
    }

    if (text.includes("growth") || text.includes("height") || text.includes("weight")) {
        return "A child's growth is assessed over time using age-appropriate growth charts. Your pediatrician can review height, weight and development.";
    }

    if (text.includes("appointment") || text.includes("doctor")) {
        return "Please use the appointment form on this page to prepare a consultation request. Contact the clinic to confirm your booking.";
    }

    if (text.includes("emergency") || text.includes("breathing") || text.includes("unconscious")) {
        return "If a child has severe breathing difficulty, is unconscious, has a seizure or is difficult to wake, seek emergency medical help immediately.";
    }

    return "I can share general information about newborn care, vaccination, nutrition and child growth. For diagnosis or treatment, please consult a qualified pediatrician.";
}

// Keyword-based demo assistant, not real AI or medical diagnosis.
