new Vue({
    el: "#app",

    data: {
        contacts: [],
        isLastNameInvalid: false,
        isFirstNameInvalid: false,
        isPhoneNumberInvalid: false,
        newLastName: "",
        newFirstName: "",
        newPhoneNumber: "",
        itemId: 1
    },

    methods: {
        addContact: function () {
            if (!this.validateAllFields()) {
                return;
            }

            const contact = {
                id: this.itemId,
                firstName: this.newFirstName,
                lastName: this.newLastName,
                phoneNumber: this.newPhoneNumber
            };

            this.contacts.push(contact);

            this.itemId++;

            this.isLastNameInvalid = false;
            this.isFirstNameInvalid = false;
            this.isPhoneNumberInvalid = false;

            this.newLastName = "";
            this.newFirstName = "";
            this.newPhoneNumber = "";
        },

        validateAllFields: function () {
            let isAllFieldsValid = true;

            if (!this.validateText(this.newLastName)) {
                isAllFieldsValid = false;

                this.isLastNameInvalid = true;
            } else {
                this.isLastNameInvalid = false;
            }

            if (!this.validateText(this.newFirstName)) {
                isAllFieldsValid = false;

                this.isFirstNameInvalid = true;
            } else {
                this.isFirstNameInvalid = false;
            }

            if (!this.validatePhoneNumber(this.newPhoneNumber)) {
                isAllFieldsValid = false;

                this.isPhoneNumberInvalid = true;
            } else {
                this.isPhoneNumberInvalid = false;
            }

            return isAllFieldsValid;
        },

        validateText: function (text) {
            if (text.trim().length === 0) {
                return false;
            }

            return true;
        },
        validatePhoneNumber: function (text) {
            if (!this.validateText(text)) {
                return false;
            }

            const numberPattern = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
            const isNumber = numberPattern.test(text);

            if (!isNumber) {
                return false;
            }

            return true;
        },

        deleteContact: function (index) {
            this.contacts.splice(index, 1);

            this.renumberContacts();
        },

        renumberContacts: function () {
            let currentId = 1;

            this.contacts.forEach((contact) => {
                contact.id = currentId;
                currentId++;
            });

            this.itemId = currentId;
        }
    }
});