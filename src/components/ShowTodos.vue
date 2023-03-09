<script>
export default {
    props: {
        todos: Array
    },
}
</script>

<template>
    <div>
        <ul v-if="todos" class="todos">
            <li v-for="todo in todos">
                {{ todo.title }} - <span :class="{ 'yes': todo.completed, 'no': !todo.completed }">{{ todo.completed }}</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.todos {
    list-style-type: none;
    text-align: left;
}

.yes {
    font-weight: bold;
    color: green;
}
.no {
    font-weight: bold;
    color: red;
}
</style>
