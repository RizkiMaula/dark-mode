import { useDispatch, useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { darkMode } from '../redux/slices/accountSlice';

const DisplayAccount = () => {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  // const darkModehandler = (darkMode) => {
  //   darkMode ? console.log('lagi darkmode') : console.log('lagi lightmode');
  // };

  console.log(account.darkMode ? 'darkmode' : 'lightmode');

  return (
    <div>
      <h1>Tabungan</h1>
      <p>Saldo: {account.tabungan}</p>
      <Deposit />
      <Withdraw />
      <hr />
      <button
        className={`${account.darkMode ? 'dark-button' : 'light-button'}`}
        onClick={() => dispatch(darkMode({ darkMode: !account.darkMode }))}
      >
        {account.darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DisplayAccount;
