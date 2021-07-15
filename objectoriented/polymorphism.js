// method overloading
// =>same method name different number of parameters
// in javascript it only work the method we implimented recently(in every case).
class Calc
{
    add()
    {
        console.log("inside no arg method")
    }
    add(num1)
    {
        console.log("inside one arg method")
    }
    add(num1,num2)
    {
        console.log("inside two arg method")
    }
}
var c=new Calc()
c.add()

// method overriding
// =>

class Parent
{
    phone()
    {
        console.log("inside parent phone")
    }
}
class Child extends Parent
{
    phone()
    {
        // super.phone()  =>super keyword refers it for parent class, when we call method both will work
        console.log("inside child phone")
    }
}
var p=new Child();
p.phone()