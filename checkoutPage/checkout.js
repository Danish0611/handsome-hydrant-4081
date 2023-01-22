let Cart = JSON.parse(localStorage.getItem("cart"))||[];
document.querySelector(".order-summary").textContent= "Order Summary "+"("+(Cart.length)+" Items)";
let total=document.getElementById("subtotalPrice")
let totalorder=document.getElementById("order-total")

let sum=0
for(let i=0;i<Cart.length;i++){
  sum+=Cart[i].price*Cart[i].quantity
}
total.textContent="₹"+sum;
totalorder.textContent="₹"+sum;


document.querySelector("#form-submit").addEventListener("click", function (e) {
  let username = document.querySelector("#name");
  let address = document.querySelector("#address");
  let phonenumber = document.querySelector("#phone");
  let cardname = document.querySelector("#nameoncard");
  let cardnumber = document.querySelector("#cardnumber");
  let expirydate = document.querySelector("#expirydate");
  let cvv = document.querySelector("#cvv");

  if (username.value == "") {
    alert("Please enter a name");
  } else if (address.value == "") {
    alert("Please enter a address");
  } else if (phonenumber.value == "") {
    alert("Please enter a phone number");
  } else if (cardname.value == "") {
    alert("Please enter name on card");
  } else if (cardnumber.value == "") {
    alert("Please enter card number");
  } else if (expirydate.value == "") {
    alert("Please enter expiry date");
  } else if (cvv.value == "") {
    alert("Please enter cvv");
  } else {
    let myObj = {
      username: username.value,
      address: address.value,
      phonenumber: phonenumber.value,
      cardname: cardname.value,
      cardnumber: cardnumber.value,
      expirydate: expirydate.value,
      cvv: cvv.value,
      
    };
    let order=JSON.parse(localStorage.getItem("order"))||[]
    Cart.push(myObj);
    
    localStorage.setItem("order", JSON.stringify(order));
    alert(
      username.value +
        "Your  order is received. You will send you the boxses soon!"
    );

//     // clearform
//     // document.querySelector("#name").value = "";
//     // document.querySelector("#address").value = "";
//     // document.querySelector("#phone").value = "";
//     // document.querySelector("#nameoncard").value = "";
//     // document.querySelector("#cardnumber").value = "";
//     // document.querySelector("#expirydate").value = "";
//     // document.querySelector("#cvv").value = "";

   
    window.location.href = "../index.html";
  }
});


      