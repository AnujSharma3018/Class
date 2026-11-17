
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// Appointment form demo
const diabetesForm = document.getElementById("diabetesForm");

diabetesForm.addEventListener("submit", function(event) {
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
        "Thank you, " + name + "! Your demo request is ready. Contact the clinic to confirm your appointment.",
        false
    );

    diabetesForm.reset();
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
        addMessage(getDiabetesReply(message), "bot-message");
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

function getDiabetesReply(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! Welcome to MediAura. Ask me about diabetes care.";
    }

    if (text.includes("diabetes") || text.includes("sugar")) {
        return "Diabetes affects blood glucose regulation. Regular monitoring and professional medical care are important. A doctor can guide your individual treatment.";
    }

    if (text.includes("hba1c") || text.includes("a1c")) {
        return "HbA1c is a blood test that reflects average blood glucose over roughly the previous 2–3 months. Your doctor can explain your result.";
    }

    if (text.includes("food") || text.includes("diet")) {
        return "A balanced eating plan can help manage diabetes. Choose meals with vegetables, fibre and suitable portions. A dietitian can create a plan for your needs.";
    }

    if (text.includes("exercise") || text.includes("walk")) {
        return "Regular physical activity can support diabetes management. Choose activity suitable for your health and discuss exercise plans with your doctor.";
    }

    if (text.includes("insulin") || text.includes("medicine")) {
        return "Insulin and diabetes medicines must be used as prescribed. Never change or stop your medication without consulting your healthcare professional.";
    }

    if (text.includes("appointment") || text.includes("doctor")) {
        return "Please use the appointment form on this page to prepare a consultation request. Contact the clinic to confirm your booking.";
    }

    if (text.includes("low sugar") || text.includes("hypoglycemia")) {
        return "Low blood sugar can be serious. If someone is confused, unconscious or unable to swallow, do not give food or drink by mouth; seek emergency medical help.";
    }

    if (text.includes("emergency") || text.includes("chest pain")) {
        return "If you have severe symptoms, chest pain, difficulty breathing, fainting or confusion, seek emergency medical attention immediately.";
    }

    return "I can share general information about diabetes, HbA1c, diet, exercise and monitoring. For diagnosis or treatment, please consult a qualified doctor.";
}

// This is a keyword-based demo assistant, not a real AI or medical diagnosis tool.
