import UI from "./UI.js";


const contactsList = [
    { name: "arian", phone: '9130663841', id: 1656758137031.616 },
]



class API {
    static getAllContacts() {
        const savedContacts = JSON.parse(window.localStorage.getItem("saved-contacts")) || [];
        return savedContacts;
    }

    static saveContacts_toLocalStorage(contactList) {
        window.localStorage.setItem("saved-contacts", JSON.stringify(contactList));
    }

    static addContact() {
        const newContact = { name: "new contact", phone: "", id: Date.now() + Math.random() }
        contactsList.push(newContact);
        liveContact = newContact;
    }

    // save(create and update contacts) live contact to contactList:
    static saveContact(liveContact) {
        const contactsList = this.getAllContacts();
        const isExsist = contactsList.some((contact) => contact.id == liveContact.id);
        if (isExsist) {     // update exsist contact
            const editedContact = contactsList.find((contact) => contact.id === Number(liveContact.id));
            editedContact.name = liveContact.name;
            editedContact.phone = liveContact.phone;
        }
        else {              // create new contact
            const newContact = { name: liveContact.name, phone: liveContact.phone, id: Date.now() + Math.random() }
            document.querySelector(".contactShow").id = newContact.id;   //set new contact id to editContact div
            contactsList.push(newContact);
        }
        this.saveContacts_toLocalStorage(contactsList);
        UI.showContact_on_ContacList(contactsList);   // go to UI and show updated list of contact
    }

    // delete contact from contactList:
    static deleteContact(contactForDelete) {
        const contactsList = this.getAllContacts();
        const indexOf_deleteContact = contactsList.findIndex((contact) => contact.id == contactForDelete.id)
        contactsList.splice(indexOf_deleteContact, 1,);
        UI.showContact_on_ContacList(contactsList);
        this.saveContacts_toLocalStorage(contactsList)
    }

}

export default API;