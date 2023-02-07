// class Person{
//     static hello(){
//         console.log("hello from static method");
//     }
//     hello1(){
//         console.log("hello from non static method");
//     }
// }
// const a=new Person();
// try{
//     a.hello1();
//     a.hello();
// }
// catch(err){
//     console.log(err.message);
// }

const a=0;
try{
    if(!a)
        throw "hello";
        //throw new Error("hello");
}
catch(err){
    console.log(err);
    console.log(err.message);
}
