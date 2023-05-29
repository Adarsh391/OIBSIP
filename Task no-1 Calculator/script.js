let Output = document.getElementById("displayscreen");

function Display(num) {
  Output.value += num;
}

//  Clear Entry button funtion
function Clear_entry() {
  Output.value = "";
}

//  Delete button funtion
function Delete() {
  Output.value = Output.value.slice(0, -1);
}

//  Equal button funtion
function Equals() {
  try {
    Output.value = eval(Output.value);
  } catch (err) {
    alert("invalid");
  }
}
