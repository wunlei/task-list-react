import PropTypes from "prop-types";
import s from "./IconBtn.module.scss";

function IconBtn({ title, classes = [], onClick, children }) {
  const classString = [s.iconBtn, ...classes].join(" ");

  return (
    <button title={title} className={classString} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconBtn;

IconBtn.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  children: PropTypes.element,
};
