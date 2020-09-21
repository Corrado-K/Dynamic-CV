

function getData(){

    let fname2 = document.getElementById("fnames").value;
    let mname2 = document.getElementById("mnames").value;
    let lname2 = document.getElementById("lnames").value;
    let name2 = fname2 + " " + mname2 + " " + lname2;
    let address2 = document.getElementById("address").value;
    let phone2= document.getElementById("phone").value;
    let email2 = document.getElementById("email").value;
    let gender2 = document.getElementById("gender").value;

    localStorage.setItem("v1", name2);
    localStorage.setItem("v2", address2);
    localStorage.setItem("v3", phone2);
    localStorage.setItem("v5", email2);
    localStorage.setItem("v6",gender2);

}

document.getElementById("namedata").innerHTML=localStorage.getItem("v1");
document.getElementById("addressdata").innerHTML=localStorage.getItem("v2");
document.getElementById("phonedata").innerHTML=localStorage.getItem("v3");
document.getElementById("emaildata").innerHTML=localStorage.getItem("v5");
document.getElementById("genderdata").innerHTML=localStorage.getItem("v6");


const form = document.getElementById("newform");



function validate(){

    let error_msg ="";

    const fname = form.elements["fnames"].value;
    const mname = form.elements["fnames"].value;
    const lname = form.elements["fnames"].value;
    const address = form.elements["address"].value;
    const phone = form.elements["phone"].value
    const email = form.elements["email"].value
    const gender = form.elements["gender"].value;

    if (fname === null) {
        // error_msg += "Error, Please enter first name \n";
        return false;
    }
    if (lname === null) {
        // error_msg += "Error, Please enter last name \n";
        return false;
    }
    if (phone === null) {
        error_msg += "Error, Please enter phone number \n";
        return false;
    }
    if (address === null) {
        // error_msg += "Error, Please enter last name \n";
        return false;
    }
    if (email === null) {
        // error_msg += "Error, Please enter email \n";
        return false;
    }
    if (gender === null) {
        // error_msg += "Error, Please enter gender\n";
        return false;
    }

}
