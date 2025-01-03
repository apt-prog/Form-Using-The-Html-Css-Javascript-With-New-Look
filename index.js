// Function TO Let Data From The Form
function Submit() {
    let Name = document.getElementById('Name').value;
    let Password = document.getElementById('Password').value;

    if (Name == "" || Password == "") {
        alert('Please Fill Full Form');
    } else {
        alert("Name : " + Name + "\nPassword : " + Password + "\n\n" + "SuccessFul To Store")
    }
}

// Function To Remove Data From Form
function Reset() {
    document.getElementById('Name').value = "";
    document.getElementById('Password').value = "";
}