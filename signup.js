let elInputUsername = document.querySelector('#name')
let elInputUserid = document.querySelector('#user-id')
let elInputPassword = document.querySelector('#password1')
let elInputPasswordretype = document.querySelector('#password2')
let elNumbertype = document.querySelector('#phone')
let elJoinbutton = document.querySelector('#signup-btn')

let elMisnamemessage = document.querySelector('.misname-message')
let elFailuremessage = document.querySelector('.failure-message')
let elSuccessmessage = document.querySelector('.success-message')
let elMismatchmessage = document.querySelector('.mismatch-message')
let elMatchmessage = document.querySelector('.match-message')
let elMisnumbermessage = document.querySelector('.misnumber-message')

let usernameCheck = 0
let useridCheck = 0
let phonenumberCheck = 0

elJoinbutton.disabled = true;

elInputUsername.onkeyup = function () {
    if (isMoreThan2Length(elInputUsername.value)) {
        elMisnamemessage.classList.add('hide')
        usernameCheck = 1
    }
    else {
        elMisnamemessage.classList.remove('hide')
        usernameCheck = 0
    }
}

function isMoreThan2Length(value) {
    return value.length >= 2
}

elInputUserid.onkeyup = function () {
    if (isMoreThan6Length(elInputUserid.value)) {
        elSuccessmessage.classList.remove('hide')
        elFailuremessage.classList.add('hide')
        useridCheck = 1
    }
    else {
        elSuccessmessage.classList.add('hide')
        elFailuremessage.classList.remove('hide')
        useridCheck = 0
    }
}

function isMoreThan6Length(value) {
    return value.length >= 6 
}

elInputPasswordretype.onkeyup = function () {
    if (isMatch(elInputPassword.value, elInputPasswordretype.value)) {
        elMismatchmessage.classList.add('hide')
        elMatchmessage.classList.remove('hide')
    }
    else {
        elMismatchmessage.classList.remove('hide')
        elMatchmessage.classList.add('hide')
    }
}

function isMatch (password1, password2) {
    if (password1 === password2) {
        return true;
    }
    else {
        return false;
    }
}

elNumbertype.onkeyup = function () {
    if (isNumbermatch(elNumbertype.value)) {
        elMisnumbermessage.classList.add('hide')
        phonenumberCheck = 1
    }
    else {
        elMisnumbermessage.classList.remove('hide')
        phonenumberCheck = 0
    }
}

function isNumbermatch(value) {
    let phonenumber = /^[0-9]*$/
    if (phonenumber.test(value) === true) {
        return true;
    }
    else {
        return false;
    }
}

elInputUsername.addEventListener('keyup', button)
elInputUserid.addEventListener('keyup', button)
elInputPassword.addEventListener('keyup', button)
elInputPasswordretype.addEventListener('keyup', button)
elNumbertype.addEventListener('keyup', button)

function button() {
    switch (!(elInputUsername.value && elInputUserid.value && elInputPassword.value && elInputPasswordretype.value && elNumbertype.value
        && elInputPassword.value === elInputPasswordretype.value && usernameCheck == useridCheck == phonenumberCheck == 1)) {
            case true : elJoinbutton.disabled = true; break;
            case false : elJoinbutton.disabled = false; break;
    }
}