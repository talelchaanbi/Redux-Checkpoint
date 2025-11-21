import React from 'react';
import './listTask.css';
import { useSelector, useDispatch } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import EditTask from '../editTask/editTask.jsx';
import { removeTask, toggleDone } from '../../JS/actions/toDoActions.js';

const ListTask = () => {
  const tasks = useSelector((state) => state.toDoReducer?.tasksArray || []);
  const dispatch = useDispatch();
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [filter, setFilter] = React.useState('all');

  // Filtrer les tâches selon le filtre sélectionné
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'undone') return !task.isDone;
    return true;
  });

  return (
    <div className="list-task">
      <h3>List Task</h3>
      <div className="filter-btns" style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
        <button className={filter === 'all' ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'done' ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setFilter('done')}>Done</button>
        <button className={filter === 'undone' ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setFilter('undone')}>Undone</button>
      </div>
      {filteredTasks.length === 0 ? (
        <p>Aucune tâche</p>
      ) : (
        <Accordion defaultActiveKey="0">
          {filteredTasks.map((task, idx) => (
            <Accordion.Item eventKey={String(idx)} key={task.id}>
              <Accordion.Header>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <TaskEditor task={task} onEdit={() => setSelectedTask(task)} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      <EditTask show={!!selectedTask} onClose={() => setSelectedTask(null)} task={selectedTask} />
    </div>
  );
};

const TaskEditor = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  const remove = () => dispatch(removeTask(task.id));
  const toggle = () => dispatch(toggleDone(task.id));

  return (
    <div className="task-editor d-flex gap-2">
      <button className="btn btn-outline-primary" onClick={onEdit}>
        Edit
      </button>
      <button
        className={"btn " + (task.isDone ? 'btn-outline-warning' : 'btn-outline-success')}
        onClick={toggle}
      >
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button className="btn btn-danger" onClick={remove}>
        Delete
      </button>
    </div>
  );
};

export default ListTask;