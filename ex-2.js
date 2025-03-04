//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
const studentPass70=(operation(array));
  if(studentPass70.length>=5){
    return "ผ่านเกณฑ์✅";
  }
  else if(studentPass70.length<5){
    return "ไม่ผ่านเกณฑ์❌" ;
  }else {
    return "มีข้อผิดพลาด";
  }
}

function operation(studentScoresArray){
 const scoreArray=[];
  for(let index of studentScoresArray){
    if (index >=70){
        scoreArray.push(index);
    } 
  }return scoreArray;
} 

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result="ห้องเรียนที่ 1 "+atLeastFive(studentScoresRoom1,operation) ;
let scoreRoom2Result="ห้องเรียนที่ 2 "+atLeastFive(studentScoresRoom2,operation) ;
let scoreRoom3Result="ห้องเรียนที่ 3 "+atLeastFive(studentScoresRoom3,operation) ;

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)