import { useState } from "react";
import PropTypes from "prop-types";
import IconBtn from "@/components/commons/IconBtn/IconBtn";
import CheckIcon from "@/assets/check.svg";
import s from "./TaskEditor.module.scss";

function TaskEditor({ text, handleTextInput }) {
  const [inputValue, setInputValue] = useState(text);

  function handleSaveText() {
    const text = inputValue.trim();

    handleTextInput(text);
  }

  function handleCancelEdit() {
    handleTextInput();
  }

  function handleKeydown(e) {
    if (e.key === "Enter") {
      handleSaveText();
    }
    if (e.key === "Escape") {
      handleCancelEdit();
    }
  }

  return (
    <div className={s.editorContainer}>
      <input
        autoFocus
        className={`input ${s.inputText}`}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleSaveText}
        onKeyDown={handleKeydown}
      />
      <IconBtn onClick={handleSaveText}>
        <CheckIcon />
      </IconBtn>
    </div>
  );
}

export default TaskEditor;

TaskEditor.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func,
};
