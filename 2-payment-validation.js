document.addEventListener("DOMContentLoaded", () => {
  const ccForm = document.getElementById("cc-form");
  const ccNumberInput = document.getElementById("cc-number");
  const ccExpirationInput = document.getElementById("expiration");
  const ccCVVinput = document.getElementById("cvv");

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
  const validateExpirationDate = (userDate) => {
    const thisMonth = new Date().getMonth();
    const thisYear = parseInt(new Date().getYear().toString().substr(-2));
    const userMonthAndYear = userDate.split("/");
    const userMonth = parseInt(userMonthAndYear[0]);
    const userYear = parseInt(userMonthAndYear[1]);

    return (
      (userYear <= 99 && userYear > thisYear && userMonth <= 12) ||
      (userYear === thisYear && userMonth <= 12 && userMonth >= thisMonth)
    );
  };

  //cvv validation function:
  const validateCVVNumber = (cvv) => {
    return cvv.length === 3;
  };

  ccForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ccNumber = ccNumberInput.value.trim();
    const ccDate = ccExpirationInput.value.trim();
    const ccCVV = ccCVVinput.value.trim();
    const isValidNumber = validateCCNumber(ccNumber);
    const isValidExpDate = validateExpirationDate(ccDate);
    const isValidCVV = validateCVVNumber(ccCVV);

    if (isValidNumber && isValidExpDate && isValidCVV) {
      ccForm.submit();
      alert("Card successfully added!");
    } else if (!isValidNumber) {
      alert("Number must be 13 or 16 digits long and begin with a 4");
    } else if (!isValidExpDate) {
      alert("Invalid expiration date entered");
    } else if (!isValidCVV) {
      alert("CVV must be 3 digits long");
    }
  });
});
