$(function () {
    var addForm = $("#add_form");
    var contactsForm = $("#contacts_form");
    var deleteButton = $("#delete_button");

    addForm.submit(function (e) {
        e.preventDefault();
    });

    contactsForm.submit(function(e) {
        e.preventDefault();
    });

    deleteButton.click(function () {

        $("#dialog_confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Delete all items": function () {
                    $(this).dialog("close");
                },
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });

//        var todoText = todoInput.val().trim();
//        todoInput.removeClass("invalid");
//
//        if (todoText.length === 0) {
//            todoInput.addClass("invalid");
//            return;
//        }
//
//        var todoItem = $("<li>").addClass("todo_item");
//
//        setViewMode();
//
//        todoList.append(todoItem);
//
//        todoInput.val("");
//
//        function setViewMode() {
//
//            todoItem.html("<div class='todo_item_text'></div>\
//            <div class='content_block'>\
//        <button class ='edit_button small_button' type='button'>Изменить</button>\
//            <button class='delete_button small_button' type='button'>Удалить</button>\
//                </div>");
//
//            todoItem.find(".todo_item_text").text(todoText);
//
//            todoItem.find(".delete_button").click(function () {
//                todoItem.remove();
//            });
//
//            todoItem.find(".edit_button").click(function () {
//                setEditMode();
//            });
//        }
//
//        function setEditMode() {
//            todoItem.html("<input class='edit_todo_item'>\
//            <div class='error_message'>Строка не должна быть пустой!</div>\
//            <div class='content_block'>\
//        <button class ='save_button small_button' type='button'>Сохранить</button>\
//            <button class='cancel_button small_button' type='button'>Выйти</button>\
//            </div>");
//
//            todoItem.find(".edit_todo_item").val(todoText);
//
//            todoItem.find(".save_button").click(function () {
//                var editedTodoText = todoItem.find(".edit_todo_item").val().trim();
//
//                if (editedTodoText.length === 0) {
//                    todoItem.find(".edit_todo_item").addClass("invalid");
//                } else {
//                    todoItem.find(".edit_todo_item").removeClass("invalid");
//
//                    todoText = editedTodoText;
//
//                    setViewMode();
//                }
//            });
//
//            todoItem.find(".cancel_button").click(function () {
//                setViewMode();
//            });
//        }
    });
});