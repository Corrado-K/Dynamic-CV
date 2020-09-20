

function getData(){

    let fname2 = document.getElementById("fnames").value;
    let mname2 = document.getElementById("mnames").value;
    let lname2 = document.getElementById("lnames").value;
    let name2 = fname2 + " " + mname2 + " " + lname2;
    let address2 = document.getElementById("address").value;
    let phone2= document.getElementById("phone").value;
    let email2 = document.getElementById("email").value;

    localStorage.setItem("v1", name2);
    localStorage.setItem("v2", address2);
    localStorage.setItem("v3", phone2);
    localStorage.setItem("v5", email2);

}

document.getElementById("namedata").innerHTML=localStorage.getItem("v1");
document.getElementById("addressdata").innerHTML=localStorage.getItem("v2");
document.getElementById("phonedata").innerHTML=localStorage.getItem("v3");
document.getElementById("emaildata").innerHTML=localStorage.getItem("v5");





