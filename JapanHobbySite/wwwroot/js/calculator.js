$("#calcBtn").click(function () {

    let hours = $("#hours").val();
    let rate = $("#rate").val();

    if (hours <= 0 || hours === "") {
        alert("Please enter a positive number of hours.");
        return;
    }

    let total = hours * rate;
    $("#total").val("$" + total.toFixed(2));
});

