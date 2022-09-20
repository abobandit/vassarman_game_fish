import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import GamePage from './components/GamePage/GamePage';

const App = () =>  {
  return (
    <main className={css.background}>
      <div className={css.center}>
        <input type="text" className={css.username}/>
        <NavLink to='/game' className={(navData) => navData.isActive ? css.active : ""}>Начать</NavLink>
      </div>
    </main>
  );
}

export default App;
