import { memo, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectTaskById } from "@/state/tasks/selectors.tasks";
import {
  deleteTask,
  toggleTask,
  updateTaskText,
} from "@/state/tasks/actions.tasks";
import EditIcon from "@/assets/edit.svg";
import DeleteIcon from "@/assets/trash.svg";
import IconBtn from "@/components/commons/IconBtn/IconBtn";
import TaskEditor from "./TaskEditor/TaskEditor";
import s from "./TaskItem.module.scss";

function TaskItem({ id }) {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const task = useSelector((state) => selectTaskById(state, id));

  if (!task) {
    return null;
  }

  const { isDone, text } = task;

  function handleToggleTask() {
    dispatch(toggleTask(id));
  }

  function handleDeleteTask() {
    dispatch(deleteTask(id));
  }

  function handleEditMode(isEdit) {
    setIsEditMode(isEdit);
  }

  function handleTextInput(text) {
    setIsEditMode(false);

    if (text) {
      dispatch(updateTaskText({ id, text }));
    }
  }

  return (
    <li className={`${s.taskItem} ${isDone ? s.taskItemDone : ""}`}>
      {isEditMode ? (
        <TaskEditor text={text} handleTextInput={handleTextInput} />
      ) : (
        <>
          <div className={s.taskWrapper}>
            <input
              className={s.taskCheckbox}
              type="checkbox"
              title="Update state"
              checked={isDone}
              onChange={handleToggleTask}
            />
            <span
              className={s.taskText}
              onDoubleClick={() => handleEditMode(true)}
            >
              {text}
            </span>
          </div>
          <IconBtn
            title="Edit Task"
            classes={[s.btnEditTask]}
            onClick={() => handleEditMode(true)}
          >
            <EditIcon />
          </IconBtn>
          <IconBtn
            title="Delete Task"
            classes={[s.btnDeleteTask]}
            onClick={handleDeleteTask}
          >
            <DeleteIcon />
          </IconBtn>
        </>
      )}
    </li>
  );
}

export default memo(TaskItem);

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
};
