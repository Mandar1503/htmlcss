
// var today new Date();
// document.getElementById("datefield").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2); 

function checkDOB() {
    document.getElementById('datePicker').value = new Date().toDateInputValue();
    var dateentered = document.getElementById('datefield').value;
    var myDate = new Date(dateentered);
    var today = new Date();
    if(myDate > today)
    {
        // $('#datefield').after('<p>dude you are not in the future!</p>');
        alert("You cannot enter future date!!");
        return false;
    }
    return true;
}

