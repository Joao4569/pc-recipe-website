window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const spinner = document.getElementById("spinner");
      const submitText = document.getElementById("submit-text");

      // Show the spinner and clear submit text
      spinner.style.display = "inline-block";
      submitText.style.display = "none";

      // these IDs from the previous steps
      emailjs.sendForm("service_kgu9vdg", "template_zp3jexa", this).then(
        () => {
          console.log("SUCCESS!");
          showModal("Your message has been sent successfully!", "Success!");

          // Hide the spinner
          spinner.style.display = "none";
          submitText.style.display = "inline";
        },
        (error) => {
          console.log("FAILED...", error);
          showModal(
            "An error occurred while sending your message. " +
              "Please try sending your message directly to myemail@service.it",
            "Ooops something went wrong..."
          );

          // Hide the spinner
          spinner.style.display = "none";
          submitText.style.display = "inline";
        }
      );
    });

  function showModal(message, title) {
    const modalTitle = document.getElementById("modal-title");
    const responseMessage = document.getElementById("responseMessage");

    modalTitle.textContent = title;
    responseMessage.textContent = message;

    const responseModal = new bootstrap.Modal(
      document.getElementById("contact-modal")
    );
    responseModal.show();
  }
};
