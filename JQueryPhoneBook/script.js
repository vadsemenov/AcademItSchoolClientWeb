$(document).ready(function () {
    const addForm = $("#add-form");
    const addButton = $("#add-button");
    const tbodyBlock = $("#tbody-block");
    const phoneNumberInput = $("#phone-add-input");

    const numberPattern = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

    addButton.click(addContactToTable);

    phoneNumberInput.on("input", event => {
        const eventInput = $(event.target);
        const text = eventInput.val();

        if (text.length > 12) {
            eventInput.val(text.slice(0, 12));
        }
    });

    addForm.submit(event => {
        event.preventDefault();
    });

    function addContactToTable() {
        if (!validateInputText()) {
            return;
        }

        const firstNameInput = $("#first-name-add-input");
        const lastNameInput = $("#last-name-add-input");
        const phoneNumberInput = $("#phone-add-input");

        const tableRow = $("<tr class='table-row'></tr>");

        const numberCell = $("<td class='number-cell'></td>");
        const lastNameCell = $("<td class='last-name-cell'></td>").text(lastNameInput.val());
        const firstNameCell = $("<td class='first-name-cell'></td>").text(firstNameInput.val());
        const phoneNumberCell = $("<td class='phone-cell'></td>").text(phoneNumberInput.val());

        const deleteRowButton = $("<input class='delete-row-button' type='button' name='delete-contact' value='X' title='Delete this row' />")
            .click(showDeleteDialog);

        deleteRowButton.hover(event => {
            $(event.target).addClass("button-hover-hand");
        });

        const buttonCell = $("<td class='delete-button'></td>").append(deleteRowButton);

        tableRow.append(numberCell);
        tableRow.append(lastNameCell);
        tableRow.append(firstNameCell);
        tableRow.append(phoneNumberCell);
        tableRow.append(buttonCell);

        tbodyBlock.append(tableRow);

        numerateContacts();

        firstNameInput.val("");
        lastNameInput.val("");
        phoneNumberInput.val("");
    }

    function showDeleteDialog(event) {
        const rowForDelete = $(event.target).closest(".table-row");

        const lastName = rowForDelete.find(".last-name-cell").text();
        const firstName = rowForDelete.find(".first-name-cell").text();
        const phoneNumber = rowForDelete.find(".phone-cell").text();

        const dialog = $(".dialog-confirm");

        dialog.find(".first-name-dialog").text(firstName);
        dialog.find(".last-name-dialog").text(lastName);
        dialog.find(".phone-number-dialog").text(phoneNumber);

        dialog.dialog({
            appendTo: "body",
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Delete contact": function () {
                    deleteContactRow(event);
                    $(this).dialog("close");
                },
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });
    }

    function deleteContactRow(event) {
        const rowForDelete = $(event.target).closest(".table-row");

        rowForDelete.remove();

        numerateContacts();
    }

    function numerateContacts() {
        const rowNumberCells = $(".number-cell");

        if (rowNumberCells.length === 0) {
            return;
        }

        rowNumberCells.each((index, cell) => {
            $(cell).text(index + 1);
        });
    }

    function validateInputText() {
        const namesInputs = $(".input-block");
        let areAllInputsIsValid = true;

        namesInputs.each((index, nameInput) => {
            const input = $(nameInput);
            const errorText = input.next();
            const inputText = $(nameInput).val();

            const validateText = getValidateMessage(inputText);

            if (validateText.length !== 0) {
                input.addClass("input-invalid");

                errorText.text(validateText);
                errorText.show();

                areAllInputsIsValid = false;
            } else {
                input.removeClass("input-invalid");

                errorText.hide();
            }
        });

        const phoneText = phoneNumberInput.val();
        const phoneErrorText = phoneNumberInput.next();

        const phoneNumberValidateText = getPhoneNumberValidateMessage(phoneText);

        if (phoneNumberValidateText.length !== 0) {
            phoneNumberInput.addClass("input-invalid");

            phoneErrorText.text(phoneNumberValidateText);
            phoneErrorText.show();

            areAllInputsIsValid = false;
        } else {
            phoneNumberInput.removeClass("input-invalid");

            phoneErrorText.hide();
        }

        return areAllInputsIsValid;
    }

    function getValidateMessage(text) {
        if (text.trim().length === 0) {
            return"The text input is empty";
        }

        if (/\s/.test(text.trim())) {
            return "The text is contains spaces!";
        }

        return "";
    }

    function getPhoneNumberValidateMessage(text) {
        if (text.trim().length === 0) {
            return "The text input is empty";
        }

        if (!numberPattern.test(text)) {
            return "The phone number is not valid";
        }

        return "";
    }
});