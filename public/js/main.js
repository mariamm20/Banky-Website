
$(document).ready(function () {
    $('#loginAlert').hide();
    $('#amountAlert').hide();
    $('#successAlert').hide();
    $("#select1").change(function () {
        let balance = $('#select1 option:selected').prop('id');
        $('#balance1').html(balance + ' <i class="bi bi-coin"></i>')
        $('#cust1').val($('#select1 option:selected').text())
        $("#select2").prop("disabled", false);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        $('#date').val(today);

        var time = new Date().toLocaleTimeString('en-US', {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
        });
        $('#time').val(time);

    })
    $("#select2").change(function () {
        let balance2 = $('#select2 option:selected').prop('id');
        $('#balance2').html(balance2 + ' <i class="bi bi-coin"></i>')
        $('#cust2').val($('#select2 option:selected').text())

    })

    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('error');
    const myParam2 = urlParams.get('state');
    if (myParam == "Incorrect_Credential") {
        $('#loginAlert').show();
        $('#amountAlert').hide();
        myParam = '/transfer';
    } else if (myParam == "Invalid_Amount") {
        $('#amountAlert').show();
        myParam = '/transfer';
    }
    if (myParam2 == "Successfully_Transfered") {
        $('#successAlert').show().delay(5000).fadeOut();;
        myParam = '/customers';
    }






});

function sort() {
    var tbody = $('table tbody');
    
    tbody.html($('tr', tbody).get().reverse()); 

}


