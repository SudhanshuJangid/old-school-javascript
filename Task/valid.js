const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    date = document.getElementById("dob"),
    password = document.getElementById("password");


const submit = document.getElementById("submit");

let validusername = false,
    validemail = false,
    validphone = false,
    validdate = false,
    validpass = false;

if (username && email && phone && date && password && submit) {
    email.addEventListener('blur', () => {
        let femail = email.value.trim();
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let msg = document.getElementById("emailvalid");

        if (femail === "") {
            msg.innerText = "**value is incorrect**";
            email.classList.add("is-invalid");
            validemail = false;

        } else if (regex.test(femail)) {
            email.classList.add("is-valid");
            validemail = true;
        }
        else {
            msg.innerText = "Email is not Valid";
            email.classList.add('is-invalid');
            validemail = false;
        }
    })
    phone.addEventListener('blur', () => {
        let fphone = phone.value.trim();
        let regex = /^[0-9]{10}$/;
        let msg = document.getElementById("phonevalid");

        if (fphone === "") {
            msg.innerText = "**value is incorrect**";
            phone.classList.add("is-invalid");
            validphone = false;

        } else if (regex.test(fphone)) {
            phone.classList.add("is-valid");
            validphone = true;
        }
        else {
            msg.innerText = "Name is Valid";
            phone.classList.add('is-invalid');
            validphone = false;
        }
    })

    date.addEventListener('blur', () => {
        let fdate = date.value.trim();
        let msg = document.getElementById("datevalid");
        if (fdate === "") {
            msg.innerText = "**Plz fill the Dob**";
            date.classList.add("is-invalid");
            validdate = false;
        }
        else {
            date.classList.add("is-valid");
            validdate = true;
        }
    })

    password.addEventListener('blur', () => {
        let fpass = password.value.trim();
        let regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
        let msg = document.getElementById("passvalid");

        if (fpass === "") {
            msg.innerText = "**Plz fill your password**";
            password.classList.add("is-invalid");
            validpass = false;
        }
        else if (regex.test(fpass)) {
            password.classList.add("is-valid");
            validpass = true;
        }
        else {
            msg.innerText = "**Your password format is wrong**";
            password.classList.add("is-invalid");
            validpass = false;
        }
    })

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        let cinfo = JSON.parse(localStorage.getItem('cinfo')) || [];
        let id = phone.value.trim();
        let name = username.value.trim();
        let Email = email.value.trim();
        let dob = date.value.trim();
        let Password = password.value.trim();

        let newUser = {
            Id: id,
            Name: name,
            Email: Email,
            Dob: dob,
            Password: Password
        };

        cinfo.push(newUser);
        console.log(cinfo);
        localStorage.setItem('cinfo', JSON.stringify(cinfo));

        table();
        validname();
        
        let success = document.getElementById("success");
        let failure = document.getElementById("failure");
        console.log(validusername, validemail, validphone, validdate, validpass)

        if (validusername && validemail && validphone && validdate && validpass) {
            console.log("phone, email and username are valid . plz let them enter...");
            success.classList.add("d-block");
            success.classList.remove("d-none");
            failure.classList.add("d-none");
            failure.classList.remove("d-block")
        } else {
            console.log("throw them out of screen...");
            failure.classList.add("d-block");
            failure.classList.remove("d-none");
            success.classList.add("d-none");
            success.classList.remove("d-block")
        }
    })
    username.addEventListener('blur', () => {
        validname();
    })
}

function validname() {
    let fname = username.value.trim();
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let msg = document.getElementById("namevalid");

    if (fname === "") {
        msg.innerText = "**value is incorrect**";
        username.classList.add("is-invalid");
        validusername = false;

    } else if (regex.test(fname)) {
        username.classList.add("is-valid");
        validusername = true;
    }
    else {
        msg.innerText = "Name is inValid";
        username.classList.add('is-invalid');
        validusername = false;
    }
}

function successbtn() {
    let succbtn = document.getElementById("success");
    // window.location.reload;
}
function failurebtn() {
    let failbtn = document.getElementById("failure");
    // window.location.reload;
}

if (document.querySelector("#tbodyyy")) {
    window.onload = () => {
        table();
    }
}

function table() {

    let mydata = JSON.parse(localStorage.getItem('cinfo')) || [];
    console.log(mydata);
    let html1 = document.querySelector("#tbodyyy");
    mydata.forEach((element, index) => {
        html1.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${element.Id}</td>
        <td>${element.Name}</td>
        <td>${element.Email}</td>
        <td>${element.Dob}</td>
        <td>${element.Password}</td>
        </tr>`;
    });
    // let resetval=0;
    // localStorage.setItem("UserName",resetval);

}
