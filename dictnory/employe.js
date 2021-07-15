var employe=
{
    eid:1000,
    ename:"ram",
    desig:"developer",
    salary:30000
}
console.log(employe.ename,employe.desig)

employe["salary"]=40000
console.log(employe)
console.log(!("gender" in employe))
{
    employe["gender"]="male"
}
console.log(employe)