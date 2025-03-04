//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let countStudent = 0;

  for (let i = 0; i < array.length; i++)
    if (operation(array[i])) {
      countStudent++;
    }
  
    if (countStudent >= 5) {
      return "ผ่านเกณฑ์ ✅"
    } else {
      return "ไม่ผ่านเกณฑ์ ❌"
    }
}
function studentScore(score) {
  return score > 70;
}


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

console.log(atLeastFive(studentScoresRoom1, studentScore));
console.log(atLeastFive(studentScoresRoom2, studentScore));
console.log(atLeastFive(studentScoresRoom3, studentScore));
