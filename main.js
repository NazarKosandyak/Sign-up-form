let getForm = document.forms.signUp

// Запишу дані в змінні для подальшого використання
let myName = getForm.name.value
let mySurName = getForm.surname.value
let myEmail = getForm.email.value

let nameS = document.querySelector('.name_in')
getForm.name.addEventListener('change', function () {

    let myName = getForm.name.value


    let nameSur = nameS.textContent = `${myName}${" "}`


    getForm.surname.addEventListener('change', function () {
        let mySurName = getForm.surname.value
        nameS.textContent = nameSur + mySurName
    })

})

let getEmail = document.querySelector('.email_in')

getForm.email.addEventListener('change', function () {
    let myEmail = getForm.email.value
    getEmail.textContent = myEmail

})



// Делегування(для radio)
getForm.addEventListener('click', function (e) {
    let cc = document.querySelector('.img')
    if (e.target.name == 'gender') {
        let myGender = e.target.value
        console.log(myGender);
        if (myGender == 'man') {
            cc.style.backgroundImage = `url("img/man.png")`
        } else if (myGender == 'woman') {
            cc.style.backgroundImage = `url("img/mutant.png")`
        }
    }

})


// (для select)

getForm.positions.addEventListener('change', function () {
    for (let i = 0; i < getForm.positions.options.length; i++) {
        if (getForm.positions.options[i].selected) {
            let myOpt = getForm.positions.options[i].value
            if (myOpt && myOpt != 'Choose..') {
                let getPos = document.querySelector(".position_in")
                getPos.textContent = myOpt
                getPos.style.marginTop = 30 + "px"
            }
        }

    }
})



// checkbox

getForm.agree.addEventListener('click', function () {
    let check = document.querySelector('.subm')
    if (!getForm.agree.checked) {
        console.log(getForm.agree);
        check.style.background = 'grey'
        document.querySelector('.subm').disabled = true;

    } 
    else {

        document.querySelector('.subm').disabled = false;
        check.classList.toggle('subm1')
        check.style.background = 'green'

    }
})



getForm.lol.addEventListener('click', function () {

    let getLogBox = document.querySelector('.box')
    let getAccBox = document.querySelector('.in')
    getLogBox.style.display = "none"
    getAccBox.style.display = "block"

    let check = document.querySelector('.subm')
    check.style.background = 'grey'
    document.querySelector('.subm').disabled = true;
    getForm.reset()


})

let getPrevBTN = document.querySelector('.prevStyle')
getPrevBTN.addEventListener('click', function () {
    let getLogBox = document.querySelector('.box')
    let getAccBox = document.querySelector('.in')
    getLogBox.style.display = "block"
    getAccBox.style.display = "none"
})