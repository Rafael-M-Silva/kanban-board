import PropTypes from "prop-types";
import { useState } from "react";
import "./taskitem.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (e) => {
    const newTitle = e.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
