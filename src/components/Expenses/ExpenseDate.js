import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Card>
      <Card className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </Card>
    </Card>
  );
}

export default ExpenseDate;

// Done card
