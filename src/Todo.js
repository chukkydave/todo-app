import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			editTodo: this.props.allTodo,
			completed: this.props.completed,
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	toggleForm() {
		this.setState({
			isEditing: !this.state.isEditing,
		});
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.editTodo);
		this.toggleForm();
	}

	handleClick() {
		this.props.toggleTodo(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="Todo">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<input
							type="text"
							name="editTodo"
							value={this.state.editTodo}
							onChange={this.handleChange}
						/>
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Todo">
					<li
						onClick={this.handleClick}
						className={

								this.props.completed ? 'Todo-task completed' :
								'Todo-task'
						}
					>
						{this.props.allTodo}
					</li>
					<div className="Todo-buttons">
						<button onClick={this.toggleForm}>
							<i className="fas fa-pen" />
						</button>
						<button onClick={this.props.removeTodo}>
							<i className="fas fa-trash" />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
