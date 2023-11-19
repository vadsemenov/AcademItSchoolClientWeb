document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const todoInput = document.getElementById("new-todo-text");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    form.addEventListener("submit", e => e.preventDefault());

    addButton.addEventListener("click", () => {
        let todoText = todoInput.value.trim();
        todoInput.classList.remove("invalid");

        if (todoText.length === 0) {
            todoInput.classList.add("invalid");
            return;
        }

        const todoItem = document.createElement("li");

        todoItem.classList.add("todo_item");

        setViewMode();

        todoList.appendChild(todoItem);

        todoInput.value = "";

        function setViewMode() {
            todoItem.innerHTML = "<div class='todo_item_text'></div>\
                                  <div class='content_block'>\
                                     <button class='edit_button small_button' type='button'>Изменить</button>\
                                     <button class='delete_button small_button delete_button' type='button'>Удалить</button>\
                                  </div>";

            todoItem.querySelector(".todo_item_text").textContent = todoText;

            todoItem.querySelector(".delete_button").addEventListener("click", () => todoItem.remove());

            todoItem.querySelector(".edit_button").addEventListener("click", () => setEditMode());
        }

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit_todo_item'>\
                                  <div class='error_message'>Строка не должна быть пустой!</div>\
                                  <div class='content_block'>\
                                       <button class='save_button small_button' type='button'>Сохранить</button>\
                                       <button class='cancel_button small_button exit_button' type='button'>Выйти</button>\
                                  </div>";

            todoItem.querySelector(".edit_todo_item").value = todoText;

            todoItem.querySelector(".edit_todo_item").addEventListener("keydown", event => {
                if (event.key === 13 || event.key === "Enter") {
                    saveEvent();
                }
            });

            todoItem.querySelector(".save_button").addEventListener("click", () => saveEvent());

            todoItem.querySelector(".cancel_button").addEventListener("click", () => setViewMode());

            function saveEvent() {
                const editedTodoText = todoItem.querySelector(".edit_todo_item").value.trim();

                if (editedTodoText.length === 0) {
                    todoItem.querySelector(".edit_todo_item").classList.add("invalid");
                } else {
                    todoItem.querySelector(".edit_todo_item").classList.remove("invalid");

                    todoText = editedTodoText;

                    setViewMode();
                }
            }
        }
    });
});