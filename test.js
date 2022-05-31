function validatePhone(num) {
  // regex pattern for phone number
  //   const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
  const requisitionPattern =
    /^\(?([A-Z]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/g;

  let result = num.match(requisitionPattern);
  if (result) {
    console.log("Requistion is valid.");
  } else {
    console.log("Requistion is invalid.");
  }
}

// take input

const number = "SR-22-05";
validatePhone(number);
