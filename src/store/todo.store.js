import { Todo } from "../todos/models/todo.model";


export const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filter.All
}

const initStore = () => {
    loadStore();
    console.log('InitStore 🦋');
}

const loadStore = () => {
    if( !localStorage.getItem('state')) return;

    const {todos = [], filter = Filter.All} = JSON.parse(localStorage.getItem('state'))
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    console.log(JSON.stringify(state));
    localStorage.setItem('state', JSON.stringify(state))
}

const getTodos = (filter = Filter.All) => {
    switch(filter){
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.todos.filter(todo => todo.done);
        case Filter.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error (`Option ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error ('Description is required');
    state.todos.push(new Todo(description));
    
    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done
        }
        return todo;
    })

    saveStateToLocalStorage();
}

const deletTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deletCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deletCompleted,
    deletTodo,
    getCurrentFilter,
    initStore,
    setFilter,
    toggleTodo,
    getTodos
}

