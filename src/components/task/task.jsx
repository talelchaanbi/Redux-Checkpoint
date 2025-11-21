import './task.css';

const Task = ({ task }) => {
	if (!task) {
		return (
			<div className="task">
				<p>Task placeholder</p>
			</div>
		);
	}

	return (
		<div className="task">
			<h4 style={{ margin: 0 }}>{task.description}</h4>
			<small>{task.isDone ? 'Done' : 'Pending'}</small>
		</div>
	);
};

export default Task;