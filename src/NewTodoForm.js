import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoForm: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newStait = { ...this.state, id: uuidv4(), completed: false };
		this.props.addTodo(newStait);
		this.setState({
			todoForm: '',
		});
	}
	render() {
		return (
			<div>
				<form className="NewTodoForm" onSubmit={this.handleSubmit}>
					<label for="newtodo">New Todo</label>
					<input
						id="newtodo"
						name="todoForm"
						onChange={this.handleChange}
						value={this.state.todoForm}
						placeholder="Input task"
					/>
					<button>Add Task</button>
				</form>
			</div>
		);
	}
}

export default NewTodoForm;
