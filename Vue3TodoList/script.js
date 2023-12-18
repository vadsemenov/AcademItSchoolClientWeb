﻿const Vue3TodoList = {
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
            this.isNewItemInvalid = value.length === 0;

            if (this.isNewItemInvalid) {
                return;
            }

            this.items.push({
                id: this.itemId,
                text: value,
                isEditing: false,
                isInvalid: false,
                editText: ""
            });

            this.itemId++;

            this.newTodoText = "";
        },

        deleteItem(item) {
            this.items = this.items.filter(i => i !== item);
        },

        modifyItem(item) {
            item.isEditing = true;
            item.editText = item.text;
        },

        saveItem(item) {
            if (item.editText.trim().length === 0) {
                item.isInvalid = true;

                return;
            }

            item.text = item.editText;
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