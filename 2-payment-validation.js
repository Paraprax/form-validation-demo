document.addEventListener("DOMContentLoaded", () => {
  const ccForm = document.getElementById("cc-form");
  const cardTypeInput = document.getElementsByName("card-type");
  const ccNumberInput = document.getElementById("cc-number");
  const ccExpirationInput = document.getElementById("expiration");
  const ccCVVinput = document.getElementById("cvv");

  // card type selection function:
  const getCardType = () => {
    for (i = 0; i < cardTypeInput.length; i++) {
      if (cardTypeInput[i].checked) cardType = cardTypeInput[i].value;
    }
    return cardType;
  };

  // number validation function:
  const validateCCNumber = (cardType, number) => {
    /* NOTE: Visa cards begin with a 4 && have 13 or 16 digits. Mastercard cards begin 
    w/ a 5 && have 16 digits. Amex begin with a 3 and have 15 digits. Discover cards begin 
    with a 6 and have 16 digits. */
    const validLengths = [13, 15, 16];
    const validStarts = ["3", "4", "5", "6"];
    const cardTypeOptions = ["visa", "mastercard", "amex", "discover"];
    const splitNumber = number.toString().split("");

    switch (cardType) {
      case cardTypeOptions[0]: //visa
        return (
          splitNumber.length === validLengths[0] ||
          (splitNumber.length === validLengths[2] &&
            splitNumber[0] == validStarts[1])
        );
      case cardTypeOptions[1]: //mastercard
        return (
          splitNumber.length === validLengths[1] &&
          splitNumber[0] == validStarts[2]
        );
      case cardTypeOptions[2]: //amex
        return (
          splitNumber.length === validLengths[1] &&
          splitNumber[0] == validStarts[0]
        );
      case cardTypeOptions[3]: //discover
        return (
          splitNumber.length === validLengths[2] &&
          splitNumber[0] == validStarts[3]
        );
    }
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
    const ccType = getCardType();
    // console.log(ccType);
    const ccNumber = ccNumberInput.value.trim();
    const ccDate = ccExpirationInput.value.trim();
    const ccCVV = ccCVVinput.value.trim();
    console.log(validateCCNumber(ccType, ccNumber));
    const isValidNumber = validateCCNumber(ccType, ccNumber);
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
