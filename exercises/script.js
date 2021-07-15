function display_value(num)
{
    let input_box=document.getElementById("inpt")
    input_box.value+=num
}
function evaluateExpression()
{
    let cur_val=inpt.value;
    let res=eval(cur_val)
    inpt.value=res
}
function clearing()
{
    inpt.value="";
}
function las_cle()
{
    inpt.value=inpt.value.slice(0,-1)
}