var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber =0;

var increment  = document.getElementById("increment")

var decrement = document.getElementById("decrement")


increment.addEventListener("click",
function increment(){
  currentNumber ++
  if (currentNumber <=10) {
      currentNumberWrapper.innerHTML=currentNumber
  } 
  if (currentNumber >=0){
      currentNumberWrapper.style="color:black;"
 }
}
)

decrement.addEventListener("click",
function decrement(){
  currentNumber --
  if (currentNumber <=-10) {
      currentNumberWrapper.innerHTML=currentNumber
  } 
  if (currentNumber >=0){
      currentNumberWrapper.style="color:red;"
  }
}
)
