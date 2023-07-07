document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("todo-form");
    var todoInput = document.getElementById("new-todo-text");
    var addButton = document.getElementById("add-button");
    var todoList = document.getElementById("todo-list");


    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {

        var todoText = todoInput.value.trim();
        todoInput.classList.remove("invalid");

        if (todoText.length === 0) {
            todoInput.classList.add("invalid");
            return;
        }

        var todoItem = document.createElement("li");

        todoItem.classList.add("todo_item");

        setViewMode();

        todoList.appendChild(todoItem);

        todoInput.value = "";

        function setViewMode() {

            todoItem.innerHTML = "<div class='todo_item_text'></div>\
            <div class='content_block'>\
        <button class ='edit_button small_button' type='button'>Изменить</button>\
            <button class='delete_button small_button' type='button'>Удалить</button>\
                </div>";

            todoItem.querySelector(".todo_item_text").textContent = todoText;

            todoItem.querySelector(".delete_button").addEventListener("click", function () {
                todoItem.remove();
            });

            todoItem.querySelector(".edit_button").addEventListener("click", function () {
                setEditMode();
            });
        }

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit_todo_item'>\
            <div class='error_message'>Строка не должна быть пустой!</div>\
            <div class='content_block'>\
        <button class ='save_button small_button' type='button'>Сохранить</button>\
            <button class='cancel_button small_button' type='button'>Выйти</button>\
            </div>";

            todoItem.querySelector(".edit_todo_item").value = todoText;

            todoItem.querySelector(".save_button").addEventListener("click", function () {
                var editedTodoText = todoItem.querySelector(".edit_todo_item").value.trim();

                if (editedTodoText.length === 0) {
                    todoItem.querySelector(".edit_todo_item").classList.add("invalid");
                } else {
                    todoItem.querySelector(".edit_todo_item").classList.remove("invalid");

                    todoText = editedTodoText;

                    setViewMode();
                }
            });

            todoItem.querySelector(".cancel_button").addEventListener("click", function () {
                setViewMode();
            });
        }
    });
});