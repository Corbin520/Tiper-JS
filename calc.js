

var resultText = document.getElementById("result")
var totalBill = document.getElementById("total-bill")


var billTotal = []


$("#calculate-total").on("click", function() {
    

    
    var inpVal = $("#price-input").val().trim()
    
    if (inpVal === "") {
        alert("Please enter a bill amount");
        
    } else {

        $("#how-wasit").hide()

        billTotal.push(inpVal)
    
        var tipValue = document.getElementById("tipVal").value;
        
        var grandTotal = billTotal * tipValue
    
        var combinedTotal = +inpVal + +tipValue;
    
        resultText.textContent = "Tip: " + "$" + grandTotal.toFixed(2)
        totalBill.textContent = "Total Bill: " + "$" + combinedTotal.toFixed(2)
    
        $("#calculate-total").hide()
    }
})

// Leave a review or see reviews