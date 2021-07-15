// javascript doesn't support multiple inheritance
// it only support single inheritance and multilevel inheritance

class Parent
{
    mobile()
    {
        console.log("inside parent mobile method")
    }
}
class Parent2 extends Parent
{
    m2()
    {
        console.log("inside parent 2")
    }
}
class Child extends Parent2
{

}
var child=new Child()
child.mobile()
child.m2()