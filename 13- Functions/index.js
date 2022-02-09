function sumMethod(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Enter a number";
  } else {
    return num1 + num2;
  }
}

function multplyMethod(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Enter a number";
  } else {
    return num1 * num2;
  }
}

// function draw(rows) {
//   let output = "";
//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) {
//       output += j + "  ";
//     }
//     // return output;
//     console.log(output);
//     output = "";
//   }
// }
// draw(6);

const draw = (rows) => {
  let output = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + "  ";
    }
    // return output;
    console.log(output);
    output = "";
  }
};

draw(5);
// let a = sumMethod(1, 9);
// let a = multplyMethod(2, 10);
// console.log(a);
