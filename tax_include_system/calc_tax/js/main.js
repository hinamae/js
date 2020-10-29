$(function(){
    var calcTax = function() {
        var price = $("#price").val() * 1;
        var taxRate = $("#taxRate").val() * 1;

        var taxAmount = Math.floor(price * taxRate /100);
        var taxIncluded = price + taxAmount;

        $("#taxAmount").val(taxAmount);
        $("#taxIncluded").val(taxIncluded);

    };
    $("#btnExec").click(calcTax);
});