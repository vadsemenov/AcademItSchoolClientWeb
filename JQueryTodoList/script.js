$(() => {
    const form = $("#todo-form");
    const todoInput = $("#new-todo-text");
    const addButton = $("#add-button");
    const todoList = $("#todo-list");

    form.submit(e => {
        e.preventDefault();
    });

    addButton.click(() => {
        let todoText = todoInput.val().trim();
        todoInput.removeClass("is-invalid");

        if (todoText.length === 0) {
            todoInput.addClass("is-invalid");
            return;
        }

        //        const todoItem = $("<li class='list-group-item d-flex justify-content-between'>");
        const todoItem = $("<tr class='table-row'></tr>");

        setViewMode();

        todoList.append(todoItem);

        todoInput.val("");

        function setViewMode() {
            const number = todoItem.find(".number").text();

            todoItem.html("<th scope='row' class='col-1 number align-middle'></th>\
                           <td class='todo-item-text align-middle text-start text-break'></td>\
                           <td class='col-3 align-middle'>\
                                 <button class='btn my-1 btn-success edit-button button-width' type='button'>Изменить</button>\
                                 <button class='btn my-1 btn-danger delete-button button-width' type='button'>Удалить</button>\
                           </td>");

            todoItem.find(".number").text(number);

            todoItem.find(".todo-item-text").text(todoText);

            todoItem.find(".delete-button").click(() => {
                todoItem.remove();
                numerateItems();
            });

            todoItem.find(".edit-button").click(() => setEditMode());
        }

        function setEditMode() {
            const number = todoItem.find(".number").text();

            todoItem.html("<th scope='row' class='number align-middle'></th>\
                          <td class='col has-validation align-middle'>\
                               <input class='form-control edit-todo-item mt-1'>\
                               <div class='invalid-feedback'>\
                                   Строка не должна быть пустой!\
                               </div>\
                          </td>\
                          <td class='col-3 align-middle'>\
                              <button class='btn my-1 btn-success save-button button-width' type='button'>Сохранить</button>\
                              <button class='btn my-1 btn-secondary cancel-button button-width' type='button'>Выйти</button>\
                          </td>\
                           ");

            todoItem.find(".number").text(number);

            const todoItemInput = todoItem.find(".edit-todo-item");

            todoItemInput.val(todoText);

            todoItemInput.keypress(event => {
                if (event.key === 13 || event.key === "Enter") {
                    event.preventDefault();
                    saveEventHandler();
                }
            });

            todoItem.find(".save-button").click(() => saveEventHandler());

            todoItem.find(".cancel-button").click(() => setViewMode());

            function saveEventHandler() {
                const editedTodoText = todoItemInput.val().trim();

                if (editedTodoText.length === 0) {
                    todoItemInput.addClass("is-invalid");

                    return;
                }

                todoItemInput.removeClass("is-invalid");

                todoText = editedTodoText;

                setViewMode();
            }
        }

        numerateItems();
    });

    function numerateItems() {
        const rowNumberCells = $(".number");

        if (rowNumberCells.length === 0) {
            return;
        }

        rowNumberCells.each((index, cell) => {
            $(cell).text(index + 1);
        });
    }
});