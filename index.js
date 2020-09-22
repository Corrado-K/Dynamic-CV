

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

    function validate(){
        const form = document.getElementById("newform");

        const fname = form.elements["fnames"].value;
        const lname = form.elements["lnames"].value;
        const address = form.elements["address"].value;
        const phone = form.elements["phone"].value
        const email = form.elements["email"].value
        const gender = form.elements["gender"].value;

        document.getElementById("fnames").classList.remove("error-border");
        document.getElementById("lnames").classList.remove("error-border");
        document.getElementById("address").classList.remove("error-border");
        document.getElementById("phone").classList.remove("error-border");
        document.getElementById("gender").classList.remove("error-border");
        document.getElementById("email").classList.remove("error-border");





        if (fname === "") {
            document.getElementById("fnames").classList.add("error-border");
            return false;
        }else if (!(isNaN(fname))){
            document.getElementById("fnames").classList.add("error-border");
            return false;
        }


        if (lname === "") {
            document.getElementById("lnames").classList.add("error-border");
            return false;
        }else if (!(isNaN(lname))){
            document.getElementById("lnames").classList.add("error-border");
            return false;
        }



        if (phone === "") {
            document.getElementById("phone").classList.add("error-border");
            return false;
        }else if (isNaN(phone)){
            document.getElementById("phone").classList.add("error-border");
            return false;
        }


        if (address === "") {
            document.getElementById("address").classList.add("error-border");
            return false;
        }


        if (email === "") {
            document.getElementById("email").classList.add("error-border");
            return false;
        }

        if (gender === "") {
            document.getElementById("gender").classList.add("error-border");
            return false;
        }

    }
    return validate();

}

document.getElementById("namedata").innerHTML=localStorage.getItem("v1");
document.getElementById("addressdata").innerHTML=localStorage.getItem("v2");
document.getElementById("phonedata").innerHTML=localStorage.getItem("v3");
document.getElementById("emaildata").innerHTML=localStorage.getItem("v5");
document.getElementById("genderdata").innerHTML=localStorage.getItem("v6");







