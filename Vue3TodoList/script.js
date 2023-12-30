const Vue3TodoList = {
    data() {
        return {
            items: [],
            newTodoText: "",
            isNewItemInvalid: false,
            newItemId: 1
        };
    },

    methods: {
        addItem() {
            const text = this.newTodoText.trim();
            this.isNewItemInvalid = text.trim().length === 0;

            if (this.isNewItemInvalid) {
                return;
            }

            const todoItem = {
                id: this.newItemId,
                text: text.trim(),
                isEditing: false,
                isInvalid: false,
                editedText: ""
            }

            this.items.push(todoItem);

            this.newItemId++;

            this.newTodoText = "";
        },

        deleteItem(item) {
            this.items = this.items.filter(e => e.id !== item.id);
        },

        modifyItem(item) {
            item.isEditing = true;
            item.editedText = item.text;
        },

        saveItem(item) {
            if (item.editedText.trim().length === 0) {
                item.isInvalid = true;

                return;
            }

            item.text = item.editedText;
            item.isInvalid = false;
            item.isEditing = false;
        },

        exitItem(item) {
            item.isInvalid = false;
            item.isEditing = false;
        }
    }
};

Vue.createApp(Vue3TodoList).mount("#app");