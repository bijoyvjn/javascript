// classes using camalin notation
// class, object, reference
// this.age,this.name=> this is called instance variables(python have self)
// in python we use __init__
// duty of constructor=> initialize instance variable

class Person
{
    setValues(age,name)
    {
        this.age=age;
        this.name=name;
    }
    printValues()
    {
        console.log(this.age,this.name)
    }
}
var p=new Person();
p.setValues(44,"Bijoy");
p.printValues();