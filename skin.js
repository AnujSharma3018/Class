
// Mobile navigation
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// Set minimum appointment date to today
const dateInput = document.getElementById("appointmentDate");
const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

// Appointment form
document.getElementById("skinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("patientName").value.trim();
  const phone = document.getElementById("patientPhone").value.trim();
  const concern = document.getElementById("skinConcern").value;
  const date = dateInput.value;
  const message = document.getElementById("formMessage");

  if (!/^[0-9]{10}$/.test(phone)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid 10-digit phone number.";
    return;
  }

  if (!name || !concern || !date || date < localToday) {
    message.style.color = "red";
    message.textContent = "Please check all required details and select a valid date.";
    return;
  }

  message.style.color = "#0e8d73";
  message.textContent =
    "Your demo request has been validated. Please contact the clinic to confirm your appointment.";

  this.reset();
  dateInput.min = localToday;
});

// Chatbot
function toggleChat() {
  const chatBox = document.getElementById("chatBox");

  chatBox.style.display =
    chatBox.style.display === "block" ? "none" : "block";
}

document.getElementById("chatForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");
  const question = input.value.trim().toLowerCase();

  if (!question) return;

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = input.value;
  chatBody.appendChild(userMessage);

  let reply = "";

  if (question.includes("acne") || question.includes("pimple")) {
    reply = "Acne can have different causes. A dermatologist can assess your skin and suggest suitable care.";
  } 
  else if (question.includes("hair") || question.includes("hairfall")) {
    reply = "Hair fall can have several causes. Consider booking a consultation with a qualified dermatologist.";
  } 
  else if (question.includes("allergy") || question.includes("itch")) {
    reply = "Skin itching or allergy needs proper assessment. Please consult a healthcare professional.";
  } 
  else if (question.includes("appointment") || question.includes("book")) {
    reply = "Please visit the appointment section on this page and submit your consultation request.";
  } 
  else if (question.includes("pigmentation") || question.includes("dark spot")) {
    reply = "Pigmentation has different possible causes. A dermatologist can assess your skin and discuss suitable options.";
  } 
  else if (question.includes("doctor")) {
    reply = "Please visit our Our Doctors section to view the sample specialist profiles.";
  } 
  else {
    reply = "I can help with general skin care information. For diagnosis or treatment, please consult a qualified dermatologist.";
  }

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";
  botMessage.textContent = reply;

  setTimeout(() => {
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 300);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
});
