import propTypes from "prop-types";
import style from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={style.feedbackList}>
    <li className={style.feedbackListItem}>Good: {good}</li>
    <li className={style.feedbackListItem}>Neutral: {neutral}</li>
    <li className={style.feedbackListItem}>Bad: {bad}</li>
    <li className={style.feedbackListItem}>Total: {total}</li>
    <li className={style.feedbackListItem}>
      Positive feedback: {positivePercentage} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

