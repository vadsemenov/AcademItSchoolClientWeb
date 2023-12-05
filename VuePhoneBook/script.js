new Vue({
    el: "#app",

    data: {
        contacts: [],
        isInvalidLastName: false,
        isInvalidFirstName: false,
        isInvalidPhoneNumber: false,
        newLastName: "Last Name",
        newFirstName: "First Name",
        newPhoneNumber: "92938439204324",
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

            this.isInvalidLastName = false;
            this.isInvalidFirstName = false;
            this.isInvalidPhoneNumber = false;

            this.newLastName = "";
            this.newFirstName = "";
            this.newPhoneNumber = "";
        },

        validateAllFields: function () {
            let isAllFieldsValid = true;

            if (!this.validateText(this.newLastName)) {
                isAllFieldsValid = false;

                this.isInvalidLastName = true;
            } else {
                this.isInvalidLastName = false;
            }

            if (!this.validateText(this.newFirstName)) {
                isAllFieldsValid = false;

                this.isInvalidFirstName = true;
            } else {
                this.isInvalidFirstName = false;
            }

            if (!this.validatePhoneNumber(this.newPhoneNumber)) {
                isAllFieldsValid = false;

                this.isInvalidPhoneNumber = true;
            } else {
                this.isInvalidPhoneNumber = false;
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

//            const isNumber = /^\d+$/.test(text);
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



//$(document).ready(function () {
//    const addForm = $("#add-form");
//    const addButton = $("#add-button");
//    const tbodyBlock = $("#tbody-block");
//    const phoneNumberInput = $("#phone-add-input");
//
//    addButton.click(addContactToTable);
//
//    phoneNumberInput.on("input", function (event) {
//        const eventInput = $(event.target);
//        const text = eventInput.val();
//
//        if (text.length > 12) {
//            eventInput.val(text.slice(0, 12));
//        }
//    });
//
//    addForm.submit(function (e) {
//        e.preventDefault();
//    });
//
//    function addContactToTable() {
//        if (!validateInputText()) {
//            return;
//        }
//
//        const firstName = $("#first-name-add-input");
//        const lastName = $("#last-name-add-input");
//        const phoneNumber = $("#phone-add-input");
//
//        const tableRow = $("<tr class='table-row'></tr>");
//
//        const numberCell = $("<td class='number-cell'></td>").text("Number");
//        const lastNameCell = $("<td class='last-name-cell'></td>").text(lastName.val());
//        const firstNameCell = $("<td class='first-name-cell'></td>").text(firstName.val());
//        const phoneNumberCell = $("<td class='phone-cell'></td>").text(phoneNumber.val());
//
//        const deleteRowButton = $("<input class='delete-row-button' type='button' name='delete-contact' value='X' title='Delete this row' />")
//            .click(showDeleteDialog);
//
//        const buttonCell = $("<td></td>").append(deleteRowButton);
//
//        tableRow.append(numberCell);
//        tableRow.append(lastNameCell);
//        tableRow.append(firstNameCell);
//        tableRow.append(phoneNumberCell);
//        tableRow.append(buttonCell);
//
//        tbodyBlock.append(tableRow);
//
//        numerateContacts();
//    }
//
//    function showDeleteDialog(event) {
//        const rowForDelete = $(event.target).closest(".table-row");
//
//        const lastName = rowForDelete.find(".last-name-cell").text();
//        const firstName = rowForDelete.find(".first-name-cell").text();
//        const phoneNumber = rowForDelete.find(".phone-cell").text();
//
//        const dialog = $("#dialog-confirm");
//
//        dialog.find(".first-name-dialog").text(firstName);
//        dialog.find(".last-name-dialog").text(lastName);
//        dialog.find(".phone-number-dialog").text(phoneNumber);
//
//        dialog.dialog({
//            resizable: false,
//            height: "auto",
//            width: 400,
//            modal: true,
//            buttons: {
//                "Delete contact": function () {
//                    deleteContactRow(event);
//                    $(this).dialog("close");
//                },
//                Cancel: function () {
//                    $(this).dialog("close");
//                }
//            }
//        });
//    }
//
//    function deleteContactRow(event) {
//        const rowForDelete = $(event.target).closest(".table-row");
//
//        rowForDelete.remove();
//
//        numerateContacts();
//    }
//
//    function numerateContacts() {
//        const rowNumberCells = $(".number-cell");
//
//        if (rowNumberCells.length === 0) {
//            return;
//        }
//
//        rowNumberCells.each(function (index) {
//            $(this).text(index + 1);
//        });
//    }
//
//    function validateInputText() {
//        const inputs = $(".input-block");
//        let allInputsIsValid = true;
//
//        inputs.each(function (index) {
//            const input = $(this);
//            const errorText = input.next();
//
//            if (input.val().length === 0) {
//                errorText.css("display", "block");
//                errorText.css("color", "#f00");
//                allInputsIsValid = false;
//            } else {
//                errorText.css("display", "none");
//            }
//        });
//
//        return allInputsIsValid;
//    }
//});