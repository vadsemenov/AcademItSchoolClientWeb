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

        const todoItem = $("<li class='row list-group-item d-flex'>");

        setViewMode();

        todoList.append(todoItem);

        todoInput.val("");

        function setViewMode() {
            todoItem.html("<div class='col-9 todo_item_text text-justify'></div>\
                            <div class= 'col-2 btn-group' role ='group' >\
                                 <button class='btn btn-success edit_button' type='button'>Изменить</button>\
                                 <button class='btn btn-danger delete_button' type='button'>Удалить</button>\
                            </div>");

            todoItem.find(".todo_item_text").text(todoText);

            todoItem.find(".delete_button").click(() => todoItem.remove());

            todoItem.find(".edit_button").click(() => setEditMode());
        }

        function setEditMode() {
            todoItem.html("<div class='input-group has-validation'>\
                               <input class='col form-control edit_todo_item'>\
                               <div class='col btn-group' role='group'>\
                                   <button class ='btn btn-success save_button' type='button'>Сохранить</button>\
                                   <button class='btn btn-secondary cancel_button' type='button'>Выйти</button>\
                               </div>\
                               <div class='invalid-feedback'>\
                                   Строка не должна быть пустой!\
                               </div >\
                           </div>");

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