import { useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import DarkModeButton from './DarkModeButton';

const DisplayAccount = () => {
  const account = useSelector((state) => state.account);

  return (
    <div>
      <h1>Tabungan</h1>
      <p>Saldo: {account.tabungan}</p>
      <Deposit />
      <Withdraw />
      <hr />
      <DarkModeButton />
    </div>
  );
};

export default DisplayAccount;
