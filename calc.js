
// We are going to need to take the user-input (total of bill)
// and store it. Once we have that, based off the user total
// We will then calculate the percent of the check and return
// the amount for the user

var resultText = document.getElementById("result")
var totalBill = document.getElementById("total-bill")


var billTotal = []

// get the value off the input price box
$("#calculate-total").on("click", function() {
    
    // if(inpVal === null) {
    //     console.log("nothing entered");
    // }

    var inpVal = $("#price-input").val().trim()

    billTotal.push(inpVal)

    var tipValue = document.getElementById("tipVal").value;
    
    var grandTotal = billTotal * tipValue

    var combinedTotal = +inpVal + +tipValue;

    resultText.textContent = "Tip: " + "$" + grandTotal.toFixed(2)
    totalBill.textContent = "Total Bill: " + "$" + combinedTotal.toFixed(2)

    $("#calculate-total").hide()

})

// Leave a review or see reviews