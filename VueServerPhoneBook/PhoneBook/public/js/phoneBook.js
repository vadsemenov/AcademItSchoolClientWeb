function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

function PhoneBookService() {
}

PhoneBookService.prototype.baseUrl = "/api/";

PhoneBookService.prototype.getContacts = function (term) {
    return get(this.baseUrl + "getContacts", { term: term });
};

PhoneBookService.prototype.createContact = function (contact) {
    return post(this.baseUrl + "createContact", { contact: contact });
};

PhoneBookService.prototype.deleteContact = function (id) {
    return post(this.baseUrl + "deleteContact", { id: id });
};

new Vue({
    el: "#app",

    data: {
        contacts: [],
        lastName: "",
        firstName: "",
        phoneNumber: "",
        term: "",
        service: new PhoneBookService(),
        contactToDelete: null,
        isLastNameInvalid: false,
        isFirstNameInvalid: false,
        isPhoneNumberInvalid: false
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            this.service.getContacts(this.term).done(function (contacts) {
                self.contacts = contacts;
            }).fail(function () {
                alert("Impossible to load contacts!");
            });
        },

        addContact: function () {
            if (!this.validateAllFields()) {
                return;
            }

            const contact = {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            };

            var self = this;

            this.service.createContact(contact).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadContacts();
            }).fail(function () {
                alert("Impossible to create contact!");
            });

            this.isLastNameInvalid = false;
            this.isFirstNameInvalid = false;
            this.isPhoneNumberInvalid = false;

            this.lastName = "";
            this.firstName = "";
            this.phoneNumber = "";
        },

        validateAllFields: function () {
            let isAllFieldsValid = true;

            if (!this.validateText(this.lastName)) {
                isAllFieldsValid = false;

                this.isLastNameInvalid = true;
            } else {
                this.isLastNameInvalid = false;
            }

            if (!this.validateText(this.firstName)) {
                isAllFieldsValid = false;

                this.isFirstNameInvalid = true;
            } else {
                this.isFirstNameInvalid = false;
            }

            if (!this.validatePhoneNumber(this.phoneNumber)) {
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

        showDeleteConfirmationDialog: function (contact) {
            this.contactToDelete = contact;

            const deleteConfirmationModal = new bootstrap.Modal(this.$refs.deleteConfirmationDialog);
            deleteConfirmationModal.show();
        },

        deleteContact: function () {
            var self = this;

            this.service.deleteContact(this.contactToDelete.id).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadContacts();
            }).fail(function () {
                alert("Impossible to delete contact!");
            });
        }
    }
});