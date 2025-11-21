import './App.css';
import AddTask from './components/addTask/addTask.jsx';
import ListTask from './components/listTask/listTask.jsx';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
