let isValid = false;
const minLength = 2;
const maxLength = 30;
const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
    submitForm(event);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    if (isValid) {
      refs.modal.classList.toggle("is-hidden");
      if (!refs.modal.classList.contains("is-hidden")) {
        playSoundIfFieldsFilled();
      }
    }
  }

  function submitForm(event) {
    event.preventDefault();
    if (isValid) {
      // Your submission logic here (you can make an API call or any other actions needed)
      // ...

      // Play melody after submission
      playMelody();

      // Clear form inputs after successful submission
      clearFormInputs();

      // Show the modal or do any other actions you want after successful submission
      toggleModal();
    }
  }

  function clearFormInputs() {
    const form = document.getElementById("rent-yacht-form");
    form.reset();
  }

  function validateInput() {
    const inputName = document.getElementById("user-name");
    const inputEmail = document.getElementById("user-email");
    const inputPhone = document.getElementById("user-phone");

    const inputNameValue = inputName.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const inputPhoneValue = inputPhone.value.trim();

    if (
      inputNameValue.length < minLength ||
      inputEmailValue.length > maxLength ||
      inputEmailValue.length < minLength ||
      inputPhoneValue.length > maxLength ||
      inputPhoneValue.length < minLength ||
      inputNameValue.length > maxLength
    ) {
      isValid = false;
    } else {
      isValid = true;
    }

    if (!namePattern.test(inputNameValue)) {
      isValid = false;
      inputName.classList.add('error-border');
    } else {
      inputName.classList.remove('error-border');
    }

    if (!emailPattern.test(inputEmailValue)) {
      isValid = false;
      inputEmail.classList.add('error-border');
    } else {
      inputEmail.classList.remove('error-border');
    }

    if (!phonePattern.test(inputPhoneValue)) {
      isValid = false;
      inputPhone.classList.add('error-border');
    } else {
      inputPhone.classList.remove('error-border');
    }
  }

  function playMelody() {
    // Replace this with your sound-playing logic for the melody
    // For simplicity, we'll assume an HTML5 audio element with ID "clickSound"
    const clickSound = document.getElementById("clickSound");
    clickSound.currentTime = 0;
    clickSound.play();
  }

  function playSoundIfFieldsFilled() {
    const inputName = document.getElementById("user-name");
    const inputEmail = document.getElementById("user-email");
    const inputPhone = document.getElementById("user-phone");

    const inputNameValue = inputName.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const inputPhoneValue = inputPhone.value.trim();
  }
})();