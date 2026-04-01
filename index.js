let expenses = []

function getTotal(arr){
  return arr.reduce((sum, val) => sum + val , 0);
}


function addExpenses() {
  // Getting input value
  let value = document.getElementById("amount").value
  
  // Validation ( Empty or NaN)
  if(value === "" || isNaN(value)){
    alert("please enter valid number")
  } 

  // Convert Number 
  let amount = Number(value)

  // Add to array
  expenses.push(amount)
  
  // calculate total
  let total = getTotal(expenses)

  // show on screen
  document.getElementById("total").innerText = total;

  // clear input
  document.getElementById("amount").value = "";


}



console.log(total)