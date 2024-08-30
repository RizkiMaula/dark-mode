import { useDispatch } from 'react-redux';

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    dispatch({ type: 'darkMode/toggle' });
  };
  return (
    <div>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </div>
  );
};

export default DarkModeButton;
