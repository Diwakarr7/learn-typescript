// type annotation
let a : string  = "string";
let b :number  = 23
let bool :boolean = false
let obj :{readonly name :string, age?:number} = {
  name :"hehe",
  age :23
}

let no :null =null;

// type inference
let str = "string"
// error cause implicit type internce
// str= 23

// implicit any type
let level ;
const fun = (x:any):number=> x

// functions
let fun1 = (x:string="default"):string=> x
let fun2 = (x:number):void  =>console.log("hehev "+ x)
let fun3 = (name:string):{name:string, age:number} => ({name, age:23})

// arrays
const arr : string[] = ["strig"]
const arr1 : Array<number> = [12,2,3]
const arr2 :string[][] = [["str"]]


// tuples fixed length of values
const tup : [string, number]=["str", 12]


// enums default values will be 0,1,2
// constants
enum Person {
    male , // 0
  female, // 1
  none, // 2
  // once we have explicit values we cant have var without a value
   other = "hehe",
   //error
   // >  name,
}


// unknown type
// we dont know if the obj have specific methods or props
// so we use the unknown for forcing type narrowing or type guard
const fun4  = (obj:unknown)=>{
    // forces us to check the type
    // obj.same()  //error

    // > type narrowing
   if(typeof obj === "string"){
     console.log(obj.toString)
   }
  }

// never type
const fun5 =():never=> {
  // never type should have unreachable code
  // throw new Error("hehe")
   while(true){
    // do nothing
   }

  // errors
  // console.log("hehe");
  //  return "something"
}

// fun5()

// type aliases
// we can define custom types
 type Employee ={
  readonly name :string,
   age ?:number,
   place:string,
   address?:string,
 }
 const person:Employee  ={
  name : "John",
  age :23,
  place :"New York",
  address :"123 street"
 }
//  person.name = "hehe" // error prop is read only

// union type
let num :(number | string)
num = "hehe"
// num = undefined  // error
let arr3 : (string|number)[] = ["hehe", 23]

const fun6 =(x:(string |number)):number=>{
    // type narrowing
    if(typeof x === "number"){
        return x*2
    }else{
      return parseInt(x)*2
    }
}

// intersection types
type person1 = {name :string, age :number,  action:()=> void}
type personPlace={place :string, birth :boolean}

type Inter = person1 & personPlace
const obj4:Inter = {
    name :"hehe", age :23, place :"founf", birth:true, action :()=> console.log("seothing")
}


// literal types
// limit the values limit to the variable  or set of values can only be assigned
type Kgs = 50 | 60 | 10
type strs = "str" |  "lol"

let kgs: Kgs = 50;
kgs = 50
kgs = 60
// kgs = 32 // not valid

// nullable types
// null, undefined , .? (optional chaining) ,  ?? (nullish collisang)




// classes
// static, private & protected props and methods
class Parent{
  // props are public by default
 private static _firstName:string = "First Name"
  // public //  lastName:string

  // can be access by class itself and sub classes where private only can be accessed by class itself
  protected age:number = 11
  constructor(firstName:string, public lastName:string,){
    Parent._firstName = firstName
    this.lastName = lastName
    // this.age = age
  }
  get fullName(){
    return Parent._firstName+ " " + this.lastName
  }


}
const person1 = new Parent("someone", "hehe")


// method over riding , inheritance
class Child extends Parent {
  // constructor(firstName:string, lastName:string) {
  //   super(firstName, lastName)
  // }
  override get fullName(){
    return super.fullName
  }
  testMethod(){
    return this.age
  }

}

const person2 = new Child("from", " child");

// interfaces
// declaration merging is possible
interface Parent1{
  name ?:string, // optional
 readonly  age :number, // readonly
}
interface Parent1 {
  place :string
}
// we can declare  interface with same name and it will get merged but it is not possible with the type alias
const children : Parent1 = {
  name :"hehe", age :23, place :"New York"
}

// we can  inherit props and methods from interface to class  using "implements"
class Parent2 implements Parent1{
  name:string;
   age:number;
    place: string;
  constructor(name:string, age:number, place:string){
     this.name = name
     this.age = age
     this.place = place

    }

    get personPlace(){
      return this.getPlace()
    }

     private getPlace(){
         return this.place
     }

}


// index signature properties
class Assignment{

  //index signature properties
  // to create dynamic properties
  [members: string]:string

}
let student = new Assignment();
student.people1 = "someone"
student.people2 = "other"

// console.log(student.people1)


// generics

// generic class
class Generic<T, A>{
  constructor(public name :T, public age :A){

  }
  static meth<T>(x:T){
    return x
  }
}
const gen =  new Generic<string, number>("Generic", 12)
//  type infernce implicit inference
const gen1 =  new Generic("Generic", 12)
// console.log(gen1.age)
// console.log(Generic.meth(33))

// generic function
function genFun<T>(x:T){
  return x
}
//
let arr4 = [1,3,4,5,6]
let nums = genFun(arr4)
// console.log(nums)

// generic interfaces

interface Genint <N, A>{
  name :N,
  age :A,
}

const obj5: Genint<string, number> = {
  name:"John",
  age :23
}

// generic constraints
// we can only pass num or str or obj params  we per below code
function genConstraints<T extends number | string | {name:string}>(x:T):T{
  return x
}
// genConstraints(false)
// genConstraints("Sd")
const aa = genConstraints({name:"hello"})
// console.log(aa)


// extending generic classes
interface Product {
  name :string;
  price :number;
}
//  class Store<T>{

//  }


// decorators
// decorators are attributes for applying  to the classes and its members
// @Decorator its just a function
// first letter should be capital letter

// class decorator
// for class below function accepts constructor arg type matters
function ClassDec(constructor:Function){
        console.log("class decorator  called");
        constructor.prototype.uniId = Date.now();
}




@ClassDec
class ComponentDec {

}
