"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// type annotation
let a = "string";
let b = 23;
let bool = false;
let obj = {
    name: "hehe",
    age: 23
};
let no = null;
// type inference
let str = "string";
// error cause implicit type internce
// str= 23
// implicit any type
let level;
const fun = (x) => x;
// functions
let fun1 = (x = "default") => x;
let fun2 = (x) => console.log("hehev " + x);
let fun3 = (name) => ({ name, age: 23 });
// arrays
const arr = ["strig"];
const arr1 = [12, 2, 3];
const arr2 = [["str"]];
// tuples fixed length of values
const tup = ["str", 12];
// enums default values will be 0,1,2
// constants
var Person;
(function (Person) {
    Person[Person["male"] = 0] = "male";
    Person[Person["female"] = 1] = "female";
    Person[Person["none"] = 2] = "none";
    // once we have explicit values we cant have var without a value
    Person["other"] = "hehe";
    //error
    // >  name,
})(Person || (Person = {}));
// unknown type
// we dont know if the obj have specific methods or props
// so we use the unknown for forcing type narrowing or type guard
const fun4 = (obj) => {
    // forces us to check the type
    // obj.same()  //error
    // > type narrowing
    if (typeof obj === "string") {
        console.log(obj.toString);
    }
};
// never type
const fun5 = () => {
    // never type should have unreachable code
    // throw new Error("hehe")
    while (true) {
        // do nothing
    }
    // errors
    // console.log("hehe");
    //  return "something"
};
const person = {
    name: "John",
    age: 23,
    place: "New York",
    address: "123 street"
};
//  person.name = "hehe" // error prop is read only
// union type
let num;
num = "hehe";
// num = undefined  // error
let arr3 = ["hehe", 23];
const fun6 = (x) => {
    // type narrowing
    if (typeof x === "number") {
        return x * 2;
    }
    else {
        return parseInt(x) * 2;
    }
};
const obj4 = {
    name: "hehe", age: 23, place: "founf", birth: true, action: () => console.log("seothing")
};
let kgs = 50;
kgs = 50;
kgs = 60;
// kgs = 32 // not valid
// nullable types
// null, undefined , .? (optional chaining) ,  ?? (nullish collisang)
// classes
// static, private & protected props and methods
class Parent {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        // public //  lastName:string
        // can be access by class itself and sub classes where private only can be accessed by class itself
        this.age = 11;
        Parent._firstName = firstName;
        this.lastName = lastName;
        // this.age = age
    }
    get fullName() {
        return Parent._firstName + " " + this.lastName;
    }
}
// props are public by default
Parent._firstName = "First Name";
const person1 = new Parent("someone", "hehe");
// method over riding , inheritance
class Child extends Parent {
    // constructor(firstName:string, lastName:string) {
    //   super(firstName, lastName)
    // }
    get fullName() {
        return super.fullName;
    }
    testMethod() {
        return this.age;
    }
}
const person2 = new Child("from", " child");
// we can declare  interface with same name and it will get merged but it is not possible with the type alias
const children = {
    name: "hehe", age: 23, place: "New York"
};
// we can  inherit props and methods from interface to class  using "implements"
class Parent2 {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
    get personPlace() {
        return this.getPlace();
    }
    getPlace() {
        return this.place;
    }
}
// index signature properties
class Assignment {
}
let student = new Assignment();
student.people1 = "someone";
student.people2 = "other";
// console.log(student.people1)
// generics
// generic class
class Generic {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static meth(x) {
        return x;
    }
}
const gen = new Generic("Generic", 12);
//  type infernce implicit inference
const gen1 = new Generic("Generic", 12);
// console.log(gen1.age)
// console.log(Generic.meth(33))
// generic function
function genFun(x) {
    return x;
}
//
let arr4 = [1, 3, 4, 5, 6];
let nums = genFun(arr4);
const obj5 = {
    name: "John",
    age: 23
};
// generic constraints
// we can only pass num or str or obj params  we per below code
function genConstraints(x) {
    return x;
}
// genConstraints(false)
// genConstraints("Sd")
const aa = genConstraints({ name: "hello" });
//  class Store<T>{
//  }
// decorators
// decorators are attributes for applying  to the classes and its members
// @Decorator its just a function
// first letter should be capital letter
// class decorator
// for class below function accepts constructor arg type matters
function ClassDec(constructor) {
    console.log("class decorator  called");
    constructor.prototype.uniId = Date.now();
}
let ComponentDec = class ComponentDec {
};
ComponentDec = __decorate([
    ClassDec
], ComponentDec);
