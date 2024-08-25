import propTypes from "prop-types";
import style from "./Section.module.css";

export const Section = ({ title, children }) => (
  <div>
    <h2 className={style.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};