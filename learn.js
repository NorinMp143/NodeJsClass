// Array
var arr = [];
// array is object

const p = (...e) => console.log(...e);

// p(arr.length);  //0

// add property to array or object
arr.name = 'madan';
arr['class'] = 'nodejs';

// arr = {
//   name: 'madan',
//   class: 'nodejs',
//   []: [0=>'madan']
// }

// p(arr.length); //0
// length -> array -> numeric value not string literal

// p(arr.name.length);//5
// p(arr.class.length);//6

arr['0'] = 'madan';
// p(arr.length); //1

arr[10] = 'rishu';
// arr = {
//   name: 'madan',
//   class: 'nodejs',
//   []: [0=>'madan',1=>undefined...9=>undefined,10=>'rishu']
// }

// p(arr.length); //11
// p(arr[9]); //undefined

// arr.push('ram');
// p(arr)
// arr = [
//   name: 'madan',
//   class: 'nodejs',
//   0=>'madan',
//   1=>undefined...9=>undefined,
//   10=>'rishu',
//   11=>'ram'
// ]

// arr.pop();
// p(arr)

// trim the string
// const str = 'rishubh';
// // nickname: rishu
// // fullname: rishubh

// // const user = {
// //   nickname : str.substring(0,5),
// //   fullname : str 
// // }
// // p(user);
// const user = {
//   nickname : str.substr(0,5),
//   fullname : str 
// }
// p(user);

// convert into string

// 1
// p(typeof(12345));//number
// str = (12345).toString() //12345
// p(typeof(str));//string

// 2
// str = 12 + '';
// p(str);//12
// p(typeof(str));//string

// convert into number
// p(typeof(parseInt(str)));

// const _array = [];
// // for loop
// for(let i=0; i < 5; i++){
//   _array[i]=i
// }
// p(_array)

// // for each loop
// _array.forEach((element)=>{
//   p(element);
// })

// // for in loop
// for(let variable in _array){
//   p(_array[variable]);
// }

// return key and value of object
var obj = {
  name: "'rishu'",
  class: 'nodejs',
  func : function(){
    return `name => ${this.name} , class => ${this.class}`
  }
}

// for(key in obj){
//   p(key,' => ',obj[key]);
// }

// p(obj["()"]());
// p(obj.func())

var classes = [
  { name: 'class1', selected: false },
  { name: 'class2', selected: false },
  { name: 'class3', selected: true },
  { name: 'class4', selected: true },
  { name: 'class5', selected: false },
];

// filter
//1Q return array in which selected is true
// var res  = classes.filter((obj)=>{
//   return obj.selected == true
// })
// or
// var res  = classes.filter(obj=>obj.selected==true)
// p(res);
// [{ name: 'class3', selected: true }]

// 2Q return index of array in which selected is true
// var res  = classes.findIndex(obj=>obj.selected==true)
// p(res);//2

// var res  = classes.map((obj,index)=>{
//   if(obj.selected==true){
//     return index;
//   }
// });// return array [2]
// var filterRes = res.filter((element)=>element!=undefined)
// p(filterRes);

// return only names of class
// var res = classes.filter((obj)=>obj.selected==true).map((obj)=>obj.name);
// p(res);

// var data = classes.map((obj)=>{obj.attend=false;return obj});
// p(data);