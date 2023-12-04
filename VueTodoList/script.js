new Vue({
    el: "#app",

    data: {
        items: [],
        newTodoText: "",
        isNewItemInvalid: false,
        itemId: 1
    },

    methods: {
        addItem: function () {
            const value = this.newTodoText.trim();
            this.isNewItemInvalid = value.length === 0;

            if (this.isNewItemInvalid) {
                return;
            }

            this.items.push({
                id: this.itemId,
                text: value,
                isEditing: false
            });

            this.itemId++;
            this.newTodoText = "";
        }
    }
});


//$(() => {
//    const form = $("#todo-form");
//    const todoInput = $("#new-todo-text");
//    const addButton = $("#add-button");
//    const todoList = $("#todo-list");
//
//    form.submit((e) => {
//        e.preventDefault();
//    });
//
//    addButton.click(() => {
//        let todoText = todoInput.val().trim();
//        todoInput.removeClass("is-invalid");
//
//        if (todoText.length === 0) {
//            todoInput.addClass("is-invalid");
//            return;
//        }
//
//        const todoItem = $("<li class='list-group-item d-flex justify-content-between'>");
//
//        setViewMode();
//
//        todoList.append(todoItem);
//
//        todoInput.val("");
//
//        function setViewMode() {
//            todoItem.html("<div class='col todo-item-text text-start text-break'></div>\
//                           <div class='col-3 text-end'>\
//                                 <button class='btn btn-success edit-button button-width' type='button'>Изменить</button>\
//                                 <button class='btn btn-danger delete-button button-width' type='button'>Удалить</button>\
//                           </div>");
//
//            todoItem.find(".todo-item-text").text(todoText);
//
//            todoItem.find(".delete-button").click(() => todoItem.remove());
//
//            todoItem.find(".edit-button").click(() => setEditMode());
//        }
//
//        function setEditMode() {
//            todoItem.html("<div class='input-group has-validation'>\
//                             <div class='col'>\
//                               <input class='form-control edit-todo-item'>\
//                               <div class='invalid-feedback'>\
//                                   Строка не должна быть пустой!\
//                               </div>\
//                             </div>\
//                             <div class='col-3 text-end'>\
//                                   <button class='btn btn-success save-button button-width' type='button'>Сохранить</button>\
//                                   <button class='btn btn-secondary cancel-button button-width' type='button'>Выйти</button>\
//                             </div>\
//                           </div>");
//
//            const todoItemInput = todoItem.find(".edit-todo-item");
//
//            todoItemInput.val(todoText);
//
//            todoItemInput.keypress(event => {
//                if (event.key === 13 || event.key === "Enter") {
//                    event.preventDefault();
//                    saveEventHandler();
//                }
//            });
//
//            todoItem.find(".save-button").click(() => saveEventHandler());
//
//            todoItem.find(".cancel-button").click(() => setViewMode());
//
//            function saveEventHandler() {
//                const editedTodoText = todoItem.find(".edit-todo-item").val().trim();
//
//                if (editedTodoText.length === 0) {
//                    todoItem.find(".edit-todo-item").addClass("is-invalid");
//
//                    return;
//                }
//
//                todoItem.find(".edit-todo-item").removeClass("is-invalid");
//
//                todoText = editedTodoText;
//
//                setViewMode();
//
//                return;
//            }
//        }
//    });
//});