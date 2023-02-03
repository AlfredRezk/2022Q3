import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let [,month, day, year ] = date.toLocaleDateString("en-US", options).split(' ');
  day = day.replace(',', '')

  return (
    <time className="icon">
      <em>{year}</em>
      <strong>{month}</strong>
      <span>{day}</span>
    </time>
  );
};

export default ExpenseDate;
