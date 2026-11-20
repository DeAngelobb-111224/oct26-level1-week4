const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;
console.log(activityName);
// Prediction - Initial seats left: 7
console.log("Before:", seatsLeft);
registered = registered + 2;
seatsLeft = capacity - registered;
// Prediction - Updated registration count: 11
console.log("Registered:", registered);
// Prediction - Correct final seats left: 5 (originally printed 7 because subtraction only ran once on line 4)
console.log("After:", seatsLeft);

