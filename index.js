
// import './fstyle.css';

// const submitBtn = document.getElementById("submit");

const form = document.getElementById("newform");
// const errorElement = document.getElementById("error");


function onSubmit(e){

    e.preventDefault();

    const names = form.elements["names"].value;
    const address = form.elements["address"].value;
    const phone = form.elements["phone"].value;
    const nationality= form.elements["nationality"].value;
    const email = form.elements["email"].value;
    const url = form.elements["url"].value;
    // const gender = form.elements["gender"].value;

    let msg ="";
    document.getElementById("error").innerHTML ="";

    document.getElementById("names").classList.remove("error-border");
    document.getElementById("address").classList.remove("error-border");
    document.getElementById("phone").classList.remove("error-border");
    document.getElementById("nationality").classList.remove("error-border");
    document.getElementById("email").classList.remove("error-border");
    document.getElementById("url").classList.remove("error-border");
    // document.getElementById("gender").classList.remove("error-border");


    if(names ===""){
        msg+= "Enter a name\n";
        document.getElementById("names").classList.add("error-border");
    }
    if(address ===""){
        msg+= "Enter an address\n";
        document.getElementById("address").classList.add("error-border");
    }
    if(phone!==""){
        if(isNaN(phone)){
            msg += "Enter a number\n";
            document.getElementById("phone").classList.add("error-border");
        }
        if(phone.length<0 || phone.length >10){
            msg += "Invalid number\n";
        }
    }else{
        msg += "Enter a number\n"
        document.getElementById("phone").classList.add("error-border");

    }
    if( nationality ===""){
        msg+= "Enter a nationality\n";
        document.getElementById("nationality").classList.add("error-border");
    }
    if(email !=="") {
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(form.email.value)) {
            msg += "Enter a valid address";
        }
    }else{
        msg+= "Enter an email address\n";
        document.getElementById("email").classList.add("error-border");
    }
    if(url ===""){
        msg+= "Enter your linkedIn url address\n";
        document.getElementById("url").classList.add("error-border");
    }


    if(msg!== ""){
        /*let error_para = document.createElement("p");
        error_para.innerHTML =msg;*/
        /*errorElement.appendChild(error_para);*/
        window.alert(msg);
    }
    else{
        window.alert("Success");
        window.location.href='./cv.html';
    }



}

function getData(){
    let name2 = document.getElementById("names").value;
    let address2 = document.getElementById("address").value;
    let phone2= document.getElementById("phone").value;
    let nationality2= document.getElementById("nationality").value;
    let email2 = document.getElementById("email").value;
    let url2= document.getElementById("url").value;

    localStorage.setItem("v1", name2);
    localStorage.setItem("v2", address2);
    localStorage.setItem("v3", phone2);
    localStorage.setItem("v4", nationality2);
    localStorage.setItem("v5", email2);
    localStorage.setItem("v6", url2);

    /*console.log(localStorage.getItem("v1"));
    console.log(localStorage.getItem("v2"));
    console.log(localStorage.getItem("v3"));
    console.log(localStorage.getItem("v4"));*/



}

document.getElementById("namedata").innerHTML=localStorage.getItem("v1");
document.getElementById("addressdata").innerHTML=localStorage.getItem("v2");
document.getElementById("phonedata").innerHTML=localStorage.getItem("v3");
document.getElementById("nationalitydata").innerHTML=localStorage.getItem("v4");
document.getElementById("emaildata").innerHTML=localStorage.getItem("v5");
document.getElementById("urldata").innerHTML=localStorage.getItem("v6");



form.addEventListener('submit',onSubmit);
// form.addEventListener('click',getData);
// form.addEventListener('load', addValues);




/*let obj = {
    name: names,
    address: address,
    phone:phone,
    nationality:nationality,
    email:email ,
    url:url ,
    genders:gender
}

let obj_string = JSON.stringify(obj);
console.log(obj_string);

window.localStorage.setItem("user" , obj_string);
u1 = JSON.parse(window.localStorage.getItem('user'));

document.getElementById("name1").innerHTML=localStorage.getItem("u1.name");

*/



// let name1 = document.getElementById("n1").value;


