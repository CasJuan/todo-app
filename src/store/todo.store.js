import { Todo } from "../todos/models/todo.model";


const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filter.All
}

const initStore = () => {
    console.log(state);
    console.log('InitStore 🦋');
}

const loadStore = () => {
    throw new Error ('Not implemented');
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error ('Not implemented');
}

const toggleTodo = (todoId) => {
    throw new Error ('Not implemented');
}

const deletTodo = (todoId) => {
    throw new Error ('Not implemented');
}

const deletCompleted = () => {
    throw new Error ('Not implemented');
}

const setFilter = (newFilter = Filter.All) => {
    throw new Error ('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error ('Not implemented');
}

export default {
    addTodo,
    deletCompleted,
    deletTodo,
    getCurrentFilter,
    initStore,
    setFilter,
    toggleTodo,
}

