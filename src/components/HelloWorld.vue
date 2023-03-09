<script>
import ShowTodos from './ShowTodos.vue';

export default {
    props: {
        msg: String,
    },
    data() {
        return {
            count: 0,
            todos: [],
        };
    },
    methods: {
        async getToDo() {
            const response = fetch("https://jsonplaceholder.typicode.com/todos");
            this.todos = await (await response).json();
        }
    },
    components: { ShowTodos }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="getToDo()">Fetch ToDos</button>
    <h2>ToDo response</h2>
    <p>
      <ShowTodos :todos="todos" />
    </p>
  </div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
