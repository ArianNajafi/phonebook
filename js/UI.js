


const alpha = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l'
    , 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
let updatedContactList = [];

class UI {
    static showContact_on_ContacList(contactList) {
        // moratab kardan
        updatedContactList = [];
        alpha.forEach((item) => {
            contactList.forEach((contact) => {
                if (contact.name[0] === item) {
                    updatedContactList.push(contact);
                }
            });
        });

        // show on ui
        const contacts = document.querySelector(".contacts");
        contacts.innerHTML = '';           // empity innerHtml of contact
        updatedContactList.forEach((contact) => {
            const contact_ = `
            <div class="contact" id=${contact.id}>
                <p class="contactName">${contact.name}</p>
                <p class="contactPhone">${contact.phone}</p>
                <div class="doOnContant">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
        </div>
            `;
            contacts.innerHTML += contact_;
        })

    }

}

export default UI;


// Arian Baran Cina Diba erfan

