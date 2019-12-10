function Add() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var firstNumberInteger = parseInt(firstNumber, 10);
  var secondNumberInteger = parseInt(secondNumber, 10);

  // if(firstNumber == "" || secondNumber == "") {
  //     console.log('if');
  //     ons.notification.alert("Please enter numbers");
  // }

  // if(firstNumber == "" && secondNumber == ""){
  //     console.log('both numbers');
  //     ons.notification.alert("Please enter numbers");
  // }

  if (firstNumber + secondNumber == "") {
    console.log("both numbers");
    ons.notification.alert("Please enter numbers");
  } else if (firstNumber == "") {
    console.log("1st");
    ons.notification.alert("Please enter first number");
  } else if (secondNumber == "") {
    console.log("2nd");
    ons.notification.alert("Please enter second number");
  } else {
    console.log("else");
    ons.notification.alert(
      "Your Number is " + (firstNumberInteger + secondNumberInteger)
    );
    // ons.notification.toast('Hello ' + myname, {timeout:2000}
  }
}

function Multiply() {
  var firstNumberMultiply = document.getElementById("firstNumberMultiply")
    .value;
  var secondNumberMultiply = document.getElementById("secondNumberMultiply")
    .value;
  var firstNumberMultiplyInteger = parseInt(firstNumberMultiply, 10);
  var secondNumberMultiplyInteger = parseInt(secondNumberMultiply, 10);

  // if(firstNumber == "" || secondNumber == "") {
  //     console.log('if');
  //     ons.notification.alert("Please enter numbers");
  // }

  // if(firstNumber == "" && secondNumber == ""){
  //     console.log('both numbers');
  //     ons.notification.alert("Please enter numbers");
  // }

  if (firstNumberMultiply + secondNumberMultiply == "") {
    console.log("both numbers");
    ons.notification.alert("Please enter numbers");
  } else if (firstNumberMultiply == "") {
    console.log("1st");
    ons.notification.alert("Please enter first number");
  } else if (secondNumberMultiply == "") {
    console.log("2nd");
    ons.notification.alert("Please enter second number");
  } else {
    console.log("M else");
    ons.notification.toast(
      "Your Number is " +
        firstNumberMultiplyInteger * secondNumberMultiplyInteger,
      { timeout: 2000 }
    );
  }
}

function Clear() {
  console.log("function success");
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function MClear() {
  console.log("function success");
  document.getElementById("firstNumberMultiply").value = "";
  document.getElementById("secondNumberMultiply").value = "";
}

window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById("menu");
  menu.open();
};

window.fn.load = function(page, mytitle) {
  var navigator = document.getElementById("myNavigator");
  var menu = document.getElementById("menu");
  data = { data: { title: mytitle }, animation: "slide" };
  navigator.pushPage(page, data).then(menu.close.bind(menu));
};
