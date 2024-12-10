document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  const ccNumberForm = document.getElementById("ccNumber");

  const validateCCNumber = (number) => {
    const validLengths = [13, 16];
    const validStart = "4";
    const splitNumber = number.toString().split("");

    return (
      splitNumber.length === validLengths[0] ||
      (splitNumber.length === validLengths[1] && splitNumber[0] == validStart)
    );
  };

  ccNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ccNumber = ccNumberForm.value.trim();
    const isValid = validateCCNumber(ccNumber);

    if (isValid) {
      ccNumberForm.submit();
    } else {
      console.log("Invalid CC number:", ccNumber);
    }
  });

  submit.addEventListener("click", (event) => {
    event.preventDefault();
  });

  // TODO: validate CCN format
  // TODO: check CVV length
  // TODO: prevent submission of invalid or incomplete payment info
  /* NOTE: Visa cards begin with a 4 && have 13 or 16 digits. 
  Mastercard cards begin w/ a 5 && have 16 digits. Amex begin with a 3, 
  followed by a 4 or a 7 and have 15 digits. Discover cards begin with a 
  6 and have 16 digits. */
});
