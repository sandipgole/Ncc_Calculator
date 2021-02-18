function dis(val)
{
document.getElementById("result").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("result").value = ""
}