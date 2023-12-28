const Vue3PhoneBook = {
    data() {
        return {
            contacts: [],

            isLastNameInvalid: false,
            isFirstNameInvalid: false,
            isPhoneNumberInvalid: false,

            lastName: "",
            firstName: "",
            phoneNumber: "",

            isEditedLastNameInvalid: false,
            isEditedFirstNameInvalid: false,
            isEditedPhoneNumberInvalid: false,

            editedLastName: "",
            editedFirstName: "",
            editedPhoneNumber: "",

            contactId: 1,

            phoneNumberPattern: /^([+]?[0-9\s-\(\)]{3,25})*$/i,

            editModalDialog: null,
            deleteModalDialog: null,
            contactToDelete: "",
            contactToEdit: ""
        };
    },

    mounted() {
        this.setFocusToLastName();

        this.deleteModalDialog = new bootstrap.Modal(this.$refs.deleteContactModalDialog);
        this.editModalDialog = new bootstrap.Modal(this.$refs.editContactModalDialog);
    },

    methods: {
        setFocusToLastName: function () {
            this.$refs.lastName.focus();
        },

        showDeleteContactModalDialog(contact) {
            this.contactToDelete = contact;

            this.deleteModalDialog.show();
        },

        hideDeleteContactModalDialog() {
            this.deleteModalDialog.hide();
        },

        showEditContactModalDialog(contact) {
            this.contactToEdit = contact;

            this.editedLastName = contact.lastName;
            this.editedFirstName = contact.firstName;
            this.editedPhoneNumber = contact.phoneNumber;

            this.isEditedLastNameInvalid = false;
            this.isEditedFirstNameInvalid = false;
            this.isEditedPhoneNumberInvalid = false;

            this.editModalDialog.show();
        },

        hideEditContactModalDialog() {
            this.editModalDialog.hide();
        },

        saveEditedContact(index) {
            if (!this.validateEditedFields()) {
                return;
            }

            this.hideEditContactModalDialog();

            this.contacts.map((c) => {
                if (c.id === index) {
                    c.firstName = this.editedFirstName;
                    c.lastName = this.editedLastName;
                    c.phoneNumber = this.editedPhoneNumber;
                }
            });

            this.isEditedLastNameInvalid = false;
            this.isEditedFirstNameInvalid = false;
            this.isEditedPhoneNumberInvalid = false;

            this.editedLastName = "";
            this.editedFirstName = "";
            this.editedPhoneNumber = "";
        },

        validateEditedFields() {
            let areAllFieldsValid = true;

            if (!this.validateText(this.editedLastName)) {
                areAllFieldsValid = false;
                this.isEditedLastNameInvalid = true;
            } else {
                this.isEditedLastNameInvalid = false;
            }

            if (!this.validateText(this.editedFirstName)) {
                areAllFieldsValid = false;
                this.isEditedFirstNameInvalid = true;
            } else {
                this.isEditedFirstNameInvalid = false;
            }

            if (!this.validatePhoneNumber(this.editedPhoneNumber)) {
                areAllFieldsValid = false;
                this.isEditedPhoneNumberInvalid = true;
            } else {
                this.isEditedPhoneNumberInvalid = false;
            }

            return areAllFieldsValid;
        },

        addContact() {
            if (!this.validateAddFields()) {
                return;
            }

            const contact = {
                id: this.contactId,
                firstName: this.firstName.trim(),
                lastName: this.lastName.trim(),
                phoneNumber: this.phoneNumber.trim()
            };

            this.contacts.push(contact);

            this.contactId++;

            this.isLastNameInvalid = false;
            this.isFirstNameInvalid = false;
            this.isPhoneNumberInvalid = false;

            this.lastName = "";
            this.firstName = "";
            this.phoneNumber = "";
        },

        validateAddFields() {
            let areAllFieldsValid = true;

            if (!this.validateText(this.lastName)) {
                areAllFieldsValid = false;
                this.isLastNameInvalid = true;
            } else {
                this.isLastNameInvalid = false;
            }

            if (!this.validateText(this.firstName)) {
                areAllFieldsValid = false;
                this.isFirstNameInvalid = true;
            } else {
                this.isFirstNameInvalid = false;
            }

            if (!this.validatePhoneNumber(this.phoneNumber)) {
                areAllFieldsValid = false;
                this.isPhoneNumberInvalid = true;
            } else {
                this.isPhoneNumberInvalid = false;
            }

            return areAllFieldsValid;
        },

        validateText(text) {
            return text.trim().length !== 0;
        },

        validatePhoneNumber(text) {
            if (!this.validateText(text)) {
                return false;
            }

            return this.phoneNumberPattern.test(text);
        },

        deleteContact(index) {
            this.hideDeleteContactModalDialog();

            this.contacts.splice(index, 1);
        }
    }
};

Vue.createApp(Vue3PhoneBook).mount("#app");