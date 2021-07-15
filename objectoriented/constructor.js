// duty of constructor=> initialize instance variable

class Person
{
    constructor(age,name)
    {
        this.age=age;
        this.name=name;
    }
    printValues()
    {
        console.log(this.age,this.name)
    }
}
var p=new Person(44,"Bijoy");
p.printValues();