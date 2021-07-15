var person=
{
    id:100,
    name:"bijoy",
    age:23,
    blood:"O+ve"
}
// printing name
console.log(person["name"]);
// update age as 30
person["age"]=30
console.log(person["age"])
// cheking for gender key
console.log("gender" in person)
// cheking for gender key, if it is not available set gender as male and add that into person
console.log(!("gender" in person))
{
    person["gender"]="male"
}
console.log(person)