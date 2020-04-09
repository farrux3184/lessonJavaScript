'use strict';

let car = {
  model: {},
  year: 2006,
  turbocharning: true,
  specification: [],
  style:{
    color: 'blue'
  }
};
for (let key in car){
  console.log('' + key + '' + car[key]);
  // console.log(' 1: ' + key + ' 2: ' + car[key]);
  // console.log(' 1: ' + key + ' 2: ' + car[key]);
}
// console.log(object.key(car).length);

// car.specification = prompt('привет', '1');
// car.year = prompt('привет', '2');
car.model = prompt('привет', 'mazda');

console.log(car.model);
// console.log(car);

getExpensesMonth: function(){
  for (let key in appData.expenses){
    for(let i = 0; i < 2; i ++){
      appData.expensesMonth += +appData.expenses[key];
    }
  }
  return appData.expenses.Month;
},

budgetMonth = accumulatedMonth()
Такая функция запускается во время 
создания да
undefined будет если функция 
ничего не возвращает

хоспода, как организовать валидацию на пустую строку ? value.trim() === ""
не предлагать: smile:
  Степан КолчинВчера, в 0: 10
if (value.trim()) {}
@Vasiliy Emelin
попробуй так!или так(!value...
    @Vasiliy Emelin только трим вынеси из
    if

    на число OR на пустую строку(без трима) OR на ноль