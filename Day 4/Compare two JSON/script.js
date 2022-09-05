var obj1={name: "Person 1", age:5};
var obj2={age:5, name:"Person 1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
 var obj5={name: "Person 3", age:18};
 var obj6={name: "Person 2", age:18};
console.log(JSON.stringify(obj5)===JSON.stringify(obj6))
//true
var obj3={name: "Person 1", age:5};
 var obj4={name: "Person 1", age:5};
console.log(JSON.stringify(obj3)===JSON.stringify(obj4))
var obj7={name: "Person 2", age:18};
var obj8={name: "Person 2", age:18};
console.log(JSON.stringify(obj7)===JSON.stringify(obj8))