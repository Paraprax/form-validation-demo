document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", (event) => {
    event.preventDefault();
  });

  // TODO: validate CCN format
  // TODO: check CVV length
  // TODO: prevent submission of invalid or incomplete payment info
});
