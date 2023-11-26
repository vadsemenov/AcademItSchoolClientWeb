$(() => {
    const form = $("#todo-form");
    const todoInput = $("#new-todo-text");
    const addButton = $("#add-button");
    const todoList = $("#todo-list");

    form.submit((e) => {
        e.preventDefault();
    });

    addButton.click(() => {
        let todoText = todoInput.val().trim();
        todoInput.removeClass("is-invalid");

        if (todoText.length === 0) {
            todoInput.addClass("is-invalid");
            return;
        }

        const todoItem = $("<li class='row todo_item'>");

        setViewMode();

        todoList.append(todoItem);

        todoInput.val("");

        function setViewMode() {
            todoItem.html("<div class='col todo_item_text'></div>\
                              <div class='col button_content_block'>\
                                <button class ='btn edit_button small_button' type='button'>Изменить</button>\
                                <button class='btn delete_button small_button' type='button'>Удалить</button>\
                              </div>");

            todoItem.find(".todo_item_text").text(todoText);

            todoItem.find(".delete_button").click(() => todoItem.remove());

            todoItem.find(".edit_button").click(() => setEditMode());
        }

        function setEditMode() {
            todoItem.html("<input class='col form-control edit_todo_item'>\
                           <div class='col content_block'>\
                                <button class ='btn save_button small_button' type='button'>Сохранить</button>\
                                <button class='btn cancel_button small_button exit_button' type='button'>Выйти</button>\
                           </div>\
                           <div class='error_message'>Строка не должна быть пустой!</div>");

            const todoItemInput = todoItem.find(".edit_todo_item");

            todoItemInput.val(todoText);

            todoItemInput.keypress(event => {
                if (event.key === 13 || event.key === "Enter") {
                    saveEventHandler();
                }
            });

            todoItem.find(".save_button").click(() => saveEventHandler());

            todoItem.find(".cancel_button").click(() => setViewMode());

            function saveEventHandler() {
                const editedTodoText = todoItem.find(".edit_todo_item").val().trim();

                if (editedTodoText.length === 0) {
                    todoItem.find(".edit_todo_item").addClass("is-invalid");
                } else {
                    todoItem.find(".edit_todo_item").removeClass("is-invalid");

                    todoText = editedTodoText;

                    setViewMode();
                }
            }
        }
    });
});