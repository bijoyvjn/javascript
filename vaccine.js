// read value for age , health_issues
// if age>65 and health_issues=false eligible for vaccination
// if age in range of 18-65 and health_issues=true eligible for vaccination
// else not eligible for vaccination

var age=66
var health_issues=false
if(age>65 & health_issues==false)
{
    console.log("Eligible for vaccination")
}
else if(age<65 & age>=18)
{
    console.log("Eligible for vaccination")
}
else
{
    console.log("Not eligible")
}