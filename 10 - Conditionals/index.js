// let a = 20;
// let b = 10;
// let c = 1;
// if (a > b) {
//   console.log(`Yes ${a} Greater than ${b}`);
// } else if (a < b) {
//   console.log(`No ${a} Less than ${b}`);
// } else if (a == b) {
//   console.log(`${a} Equal ${b}`);
// } else {
//   console.log(`Something wrong !!`);
// }

// if(a > b) {
//     c++
// }else {
//     c--
// }
// a > b ? c++ : c--;
// console.log(c);

// console.log(day);
let a = 0;

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;

  default:
    console.log("Error");
    break;
}
