import TaskItem from "../TaskItem/TaskItem";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({
  titulo,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="titulo">{titulo}</div>
      <div className="conteudo">
        {tasks.map((task) => {
          return (
            <TaskItem
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.PropTypes = {
  titulo: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
