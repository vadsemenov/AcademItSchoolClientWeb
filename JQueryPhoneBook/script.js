$(document).ready(function () {
//    $("body").append($.ui.dialog.overlay.create());

    const addForm = $("#add-form");
    const addButton = $("#add-button");
    const tbodyBlock = $("#tbody-block");
    const phoneNumberInput = $("#phone-add-input");

    addButton.click(addContactToTable);

    phoneNumberInput.on("input", function (event) {
        const eventInput = $(event.target);
        const text = eventInput.val();

        if (text.length > 12) {
            eventInput.val(text.slice(0, 12));
        }
    });

    addForm.submit(function (e) {
        e.preventDefault();
    });

    function addContactToTable() {
        if (!validateInputText()) {
            return;
        }

        const firstName = $("#first-name-add-input");
        const lastName = $("#last-name-add-input");
        const phoneNumber = $("#phone-add-input");

        const tableRow = $("<tr class='table-row'></tr>");

        const numberCell = $("<td class='number-cell'></td>").text("Number");
        const lastNameCell = $("<td class='last-name-cell'></td>").text(lastName.val());
        const firstNameCell = $("<td class='first-name-cell'></td>").text(firstName.val());
        const phoneNumberCell = $("<td class='phone-cell'></td>").text(phoneNumber.val());

        const deleteRowButton = $("<input class='delete-row-button' type='button' name='delete-contact' value='X' title='Delete this row' />")
            .click(showDeleteDialog);

        deleteRowButton.hover(function () {
            $(this).css('cursor', 'pointer');
        });

        const buttonCell = $("<td></td>").append(deleteRowButton);

        tableRow.append(numberCell);
        tableRow.append(lastNameCell);
        tableRow.append(firstNameCell);
        tableRow.append(phoneNumberCell);
        tableRow.append(buttonCell);

        tbodyBlock.append(tableRow);

        numerateContacts();

        firstName.val("");
        lastName.val("");
        phoneNumber.val("");
    }

    function showDeleteDialog(event) {
        const rowForDelete = $(event.target).closest(".table-row");

        const lastName = rowForDelete.find(".last-name-cell").text();
        const firstName = rowForDelete.find(".first-name-cell").text();
        const phoneNumber = rowForDelete.find(".phone-cell").text();

        const dialog = $("#dialog-confirm");

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

        rowNumberCells.each(function (index) {
            $(this).text(index + 1);
        });
    }

    function validateInputText() {
        const namesInputs = $(".input-block");
        let allInputsIsValid = true;

        namesInputs.each(function (index) {
            const input = $(this);
            const errorText = input.next();
            const inputText = $(this).val();

            if (!validateText(inputText)) {
                input.css('border-color', '#f00');

                errorText.show();

                allInputsIsValid = false;
            } else {
                input.css('border-color', '#000');

                errorText.hide();
            }
        });

        const phoneText = phoneNumberInput.val();
        const phoneErrorText = phoneNumberInput.next();

        if (!validateText(phoneText) || !validatePhoneNumber(phoneText)) {
            phoneNumberInput.css('border-color', '#f00');

            phoneErrorText.show();

            allInputsIsValid = false;
        } else {
            phoneNumberInput.css('border-color', '#000');

            phoneErrorText.hide();
        }

        return allInputsIsValid;
    }

    function validateText(text) {
        if (text.trim().length === 0 || /\s/.test(text.trim())) {
            return false;
        }

        return true;
    }

    function validatePhoneNumber(text) {
        const numberPattern = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
        const isPhoneNumber = numberPattern.test(text);

        return isPhoneNumber;
    }
});