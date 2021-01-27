import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		this.addTodo = this.addTodo.bind(this);
		this.update = this.update.bind(this);
		this.toggleompleted = this.toggleompleted.bind(this);
	}

	addTodo(todo) {
		let newTodo = { ...todo };
		this.setState((state) => ({
			todos: [
				...state.todos,
				newTodo,
			],
		}));
	}

	remove(id) {
		this.setState({
			todos: this.state.todos.filter((tod) => tod.id !== id),
		});
	}

	renderTodos() {
		return this.state.todos.map((td) => (
			<Todo
				key={td.id}
				id={td.id}
				completed={td.completed}
				removeTodo={() => this.remove(td.id)}
				allTodo={td.todoForm}
				updateTodo={this.update}
				toggleTodo={this.toggleompleted}
			/>
		));
	}

	update(id, updatedtask) {
		const updatedTodos = this.state.todos.map((tdi) => {
			if (tdi.id === id) {
				return { ...tdi, todoForm: updatedtask };
			}
			return tdi;
		});

		this.setState({ todos: updatedTodos });
	}

	toggleompleted(id) {
		const updatedCompleted = this.state.todos.map((tdi) => {
			if (tdi.id === id) {
				return { ...tdi, completed: !tdi.completed };
			}
			return tdi;
		});

		this.setState({ todos: updatedCompleted });
	}

	render() {
		return (
			<div className="TodoList">
				<h1>
					Todo List <span>A simple React Todo List App</span>
				</h1>
				<ul>{this.renderTodos()}</ul>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
