// Exercise #1: For Each Function

function forEach(array, operation) {
  for(let i=0;i<array.length;i++){
    newEmployeeSalaries.push(operation(array[i]));
  }
}

function operation (salaries){
  return salaries+5000 ;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,operation);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
