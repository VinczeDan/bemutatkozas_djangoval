// static/js/contact.js
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // Előzetes validáció
      const nameInput = this.querySelector('input[name="name"]');
      const emailInput = this.querySelector('input[name="email"]');
      const messageInput = this.querySelector('textarea[name="message"]');

      if (!nameInput.value.trim()) {
        alert("Kérjük, adja meg a nevét!");
        nameInput.focus();
        e.preventDefault();
        return;
      }

      if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
        alert("Kérjük, adjon meg egy érvényes email címet!");
        emailInput.focus();
        e.preventDefault();
        return;
      }

      if (!messageInput.value.trim()) {
        alert("Kérjük, írjon üzenetet!");
        messageInput.focus();
        e.preventDefault();
        return;
      }
    });
  }
});
