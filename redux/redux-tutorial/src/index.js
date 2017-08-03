import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const todo = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map((t) => todo(t, action));
		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

const { combineReducers } = Redux;
const todoApp = combineReducers({todos, visibilityFilter});

const { createStore } = Redux;
let store = createStore(todoApp);

const { Component } = React;

const FilterLink = ({filter, currentFilter, children}) => {
	if(filter === currentFilter) {
		return <span>{children}</span>;
	}
	return (
		<a href='#'
			onClick={(e) => {
				e.preventDefault();
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				});
			}}>
			{children}
		</a>
	);
};

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed);
		default:
			return todos;
	}
};

const Todo = ({onClick, completed, text}) => {
	return (
		<li onClick={onClick}
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
		>
			{text}
		</li>
	);
};

const TodoList = ({todos, onTodoClick}) => {  
	return (
		<ul>
			{todos.map(todo =>
				<Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} />
			)}
		</ul>
	);
};

const AddTodo = ({onClick}) => {
	let input;

	return (
		<div>
			<input ref={node => {
				input = node;
			}}/>
			<button 
				onClick={() => {
					onClick(input.value);
					input.value = '';
				}}
			>
			Add Todo
			</button>
		</div>
	);
};

let nextTodoId = 0;
class TodoApp extends Component {
	render() {
		const {todos, visibilityFilter} = this.props;
		const visibleTodos = getVisibleTodos(todos, visibilityFilter);

		return (
			<div>
				<AddTodo
					onClick={text =>
						store.dispatch({
							type: 'ADD_TODO',
							text,
							id: nextTodoId++
						})
					}
				/>
				<TodoList 
					todos={todos}
					onTodoClick={id =>
						store.dispatch({
							type: 'TOGGLE_TODO',
							id
						})
					}
				/>
				<p>
					Show:
					{' '}
					<FilterLink
						filter='SHOW_ALL'
						currentFilter={visibilityFilter}
					>
						All
					</FilterLink>
					{', '}
					<FilterLink
						filter='SHOW_ACTIVE'
						currentFilter={visibilityFilter}
					>
						Active
					</FilterLink>
					{', '}
					<FilterLink
						filter='SHOW_COMPLETED'
						currentFilter={visibilityFilter}
					>
						Completed
					</FilterLink>
				</p>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(<TodoApp {...store.getState()} />, document.getElementById('root'));
};

store.subscribe(render);

render();