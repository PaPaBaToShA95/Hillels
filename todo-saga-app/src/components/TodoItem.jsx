import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, updateTodoAsync } from "../sagas/todosSagas";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };

  const handleToggleComplete = () => {
    dispatch(updateTodoAsync({ id: todo.id, completed: !todo.completed }));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim() && editText !== todo.text) {
        dispatch(updateTodoAsync({ id: todo.id, text: editText }));
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center w-full justify-between p-2 border-b`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow mr-2 p-1 border rounded text-black"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEdit();
            if (e.key === "Escape") handleCancelEdit();
          }}
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow cursor-pointer ${todo.completed ? "line-through text-white" : "text-black"}`}
          onClick={handleToggleComplete}
        >
          {todo.text}
        </span>
      )}

      <div className="flex space-x-2 ml-2 flex-shrink-0">
        {" "}
        <button
          onClick={handleToggleComplete}
          className={`p-1 rounded text-sm ${todo.completed ? "bg-yellow-500" : "bg-green-500 text-white"}`}
        >
          {todo.completed ? "Відмінити" : "Виконано"}
        </button>
        <button
          onClick={handleEdit}
          className="p-1 bg-blue-500 text-white rounded text-sm"
        >
          {isEditing ? "Зберегти" : "Редагувати"}
        </button>
        {isEditing && (
          <button
            onClick={handleCancelEdit}
            className="p-1 bg-gray-700 text-white rounded text-sm"
          >
            Відміна
          </button>
        )}
        {!isEditing && (
          <button
            onClick={handleDelete}
            className="p-1 bg-red-500 text-white rounded text-sm"
          >
            Видалити
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
