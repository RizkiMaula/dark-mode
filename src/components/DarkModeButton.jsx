import { useDispatch } from 'react-redux';
import { darkMode } from '../redux/slices/accountSlice';
import { useSelector } from 'react-redux';

const DarkModeButton = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={`${account.darkMode ? 'dark-button' : 'light-button'}`}
        onClick={() => dispatch(darkMode({ darkMode: !account.darkMode }))}
      >
        {account.darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeButton;
