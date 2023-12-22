const Vue3TodoList = {
    data() {
        return {
            items: [],
            newTodoText: "",
            isNewItemInvalid: false,
            itemId: 1
        }
    },

    methods: {
        addItem() {
            const value = this.newTodoText.trim();
            this.isNewItemInvalid = value.trim().length === 0;

            if (this.isNewItemInvalid) {
                return;
            }

            const todoItem = {
                id: this.itemId,
                text: value.trim(),
                isEditing: false,
                isInvalid: false,
                editedText: ""
            }

            this.items.push(todoItem);

            this.itemId++;

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
}

Vue.createApp(Vue3TodoList).mount('#app');