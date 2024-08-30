import { useDispatch, useSelector } from 'react-redux';
import { deposit } from '../redux/slices/accountSlice';

const Deposit = () => {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const handleDeposit = (event) => {
    event.preventDefault();
    const amount = event.target.deposit.value;
    dispatch(deposit(parseInt(amount)));
    event.target.deposit.value = 0;
  };
  return (
    <div>
      <h4>Deposit</h4>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          name="deposit"
        />
        <button
          className={`${account.darkMode ? 'dark-button' : 'light-button'}`}
          type="submit"
        >
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
