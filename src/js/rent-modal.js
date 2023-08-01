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
    toggleModal();
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    isValid === true && 
    refs.modal.classList.toggle("is-hidden");  
  }
  
  function submitForm(event) {
    event.preventDefault(); 
  }

  function validateInput() {
    const inputName = document.getElementById("user-name") 
    const inputEmail = document.getElementById("user-email") 
    const inputPhone = document.getElementById("user-phone") 


    const inputNameValue = inputName.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputPhoneValue = inputPhone.value.trim()
    
    if (inputNameValue.length < minLength || inputEmailValue.length > maxLength || inputEmailValue.length < minLength || inputPhoneValue.length > maxLength || inputPhoneValue.length < minLength || inputNameValue.length > maxLength) {
      isValid = false;
    }
    else {
      console.log(inputNameValue)
      isValid = true;
    }

    if (!namePattern.test(inputNameValue)) {
      isValid = false;
      inputName.classList.add('error-border')
    }
    else {
      inputName.classList.remove('error-border')
    }

    if (!emailPattern.test(inputEmailValue)) {
      isValid = false;
      inputEmail.classList.add('error-border')
    }
     else {
      inputEmail.classList.remove('error-border')
    }

    if (!phonePattern.test(inputPhoneValue)) {
      isValid = false;
      inputPhone.classList.add('error-border')
    }

    
console.log(isValid)
}

})();
