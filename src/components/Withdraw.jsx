import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../redux/slices/accountSlice';

const Withdraw = () => {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const handleWithdraw = (event) => {
    event.preventDefault();
    const amount = event.target.withdraw.value;
    dispatch(withdraw(parseInt(amount)));
    event.target.withdraw.value = 0;
  };

  return (
    <div>
      <h4>Withdraw</h4>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          name="withdraw"
        />
        <button
          className={`${account.darkMode ? 'dark-button' : 'light-button'}`}
          type="submit"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
