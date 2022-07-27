import API from "./API.js";
import UI from "./UI.js";


// show contact on body or not:
const contactShow = document.querySelector(".contactEdit")

const body = document.querySelector(".body");
body.addEventListener("click", (e) => {
    if (e.target.classList[0] === "body") {
        contactShow.classList.add("showOff");
    }
})


// click on add contact button:
const addContactBtn = document.querySelector(".addContactBtn");
addContactBtn.addEventListener("click", (e) => {
    document.querySelector(".nameInput").value = "New Contact";
    document.querySelector(".numberInput").value = "";
    document.querySelector(".contactShow").id = '';
    contactShow.classList.remove("showOff") // for appiare contact section in body
})


// click on save buttton:
const saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", (e) => {
    const name = document.querySelector(".nameInput").value;
    const number = document.querySelector(".numberInput").value;
    const id = document.querySelector(".contactShow").id;
    const thisContact_goTo_save = { name: name, phone: number, id: id }
    API.saveContact(thisContact_goTo_save);
})


// click on contact in contactList on sideBar:
const clickd_contact = document.querySelector(".contacts");
clickd_contact.addEventListener("click", (e) => {
    if (e.target.className == "contact") {
        document.querySelector(".nameInput").value = e.target.querySelector(".contactName").textContent;
        document.querySelector(".numberInput").value = e.target.querySelector(".contactPhone").textContent;
        document.querySelector(".contactShow").id = e.target.id;
    }
    else if (e.target.className == "contactName") {
        document.querySelector(".nameInput").value = e.target.textContent;
        document.querySelector(".numberInput").value = e.target.parentElement.querySelector(".contactPhone").textContent;
        document.querySelector(".contactShow").id = e.target.parentElement.id;
    }

    contactShow.classList.remove("showOff") // for appiare contact section in body
})


// click on delete button:
const contacts = document.querySelector(".contacts");
contacts.addEventListener("click", (e) => {
    if (e.target.classList[1] === "fa-trash-can") {
        const name = e.target.parentElement.parentElement.querySelector(".contactName").textContent;
        const phone = e.target.parentElement.parentElement.querySelector(".contactPhone").textContent;
        const id = e.target.parentElement.parentElement.id;
        const thisContact_goTo_delete = { name, phone, id };
        API.deleteContact(thisContact_goTo_delete);    //go to delete from contact List

        //show of from body
        if (id == document.querySelector(".contactShow").id) {
            contactShow.classList.add("showOff");
        }
    }
})


//lodade page:
document.addEventListener("DOMContentLoaded", (e) => {
    UI.showContact_on_ContacList(API.getAllContacts());
})