function sum(num1, num2) {
  
  if (
    num1 == parseInt(num1) &&
    num2 == parseInt(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    result = num1 + num2;
    return result
  } else {
    throw new Error(`[subtract] Impossible to subtract ${num1} - ${num2}`);
  }
}

function sub(num1, num2, base) {

  if (num1 < num2) {
    throw new Error (`[subtract] Impossible to subtract ${num1} - ${num2}`)
  }

  let result = sum(num2, base)

  if (result == num1) {
    return base
  }

  return sub(num1, num2, sum(base, 1))
}

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";

  const num1 = Number(document.getElementById("1").value);
  const num2 = Number(document.getElementById("2").value);
  let result = sub(num1, num2, 0)
  
  document.getElementById("result").innerHTML = result;
});
