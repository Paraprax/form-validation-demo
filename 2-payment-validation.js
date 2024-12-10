document.addEventListener("DOMContentLoaded", () => {
  const ccForm = document.getElementById("cc-form");
  const ccNumberInput = document.getElementById("cc-number");
  const ccExpirationInput = document.getElementById("expiration");
  const submit = document.getElementById("submit");

  // number validation function:
  const validateCCNumber = (number) => {
    const validLengths = [13, 16];
    const validStart = "4";
    const splitNumber = number.toString().split("");

    return (
      splitNumber.length === validLengths[0] ||
      (splitNumber.length === validLengths[1] && splitNumber[0] == validStart)
    );
  };

  // exp. date validation function:
  const validateExpirationDate = (userMonth, userYear) => {
    const thisMonth = new Date().getMonth();
    const thisYear = new Date().getFullYear();

    return thisYear <= userYear && thisMonth <= userMonth;
  };

  ccForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ccNumber = ccNumberInput.value.trim();
    const isValidNumber = validateCCNumber(ccNumber);
    const ccDate = ccExpirationInput.value.trim();
    const isValidExpDate = validateExpirationDate(ccDate);

    if (isValidNumber && isValidExpDate) {
      ccForm.submit();
      console.log("Submitted");
    } else {
      console.log("Invalid CC number:", ccNumber);
    }
  });

  // TODO: validate CCN format
  // TODO: check CVV length
  // TODO: prevent submission of invalid or incomplete payment info
  /* NOTE: Visa cards begin with a 4 && have 13 or 16 digits. 
  Mastercard cards begin w/ a 5 && have 16 digits. Amex begin with a 3, 
  followed by a 4 or a 7 and have 15 digits. Discover cards begin with a 
  6 and have 16 digits. */
});
