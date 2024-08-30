import { useSelector } from 'react-redux';
import './App.css';
import DisplayAccount from './components/DisplayAccount';

function App() {
  const account = useSelector((state) => state.account);
  return (
    <div className={`${account.darkMode ? 'dark' : 'light'}`}>
      <DisplayAccount />
      {/* <p>Saldo saya saat ini: {account.tabungan}</p> */}
    </div>
  );
}

export default App;
