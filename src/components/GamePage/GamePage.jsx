import css from './GamePage.module.css'
import {NavLink} from "react-router-dom";
const GamePage = () => {
    return (

    <main className={css.background}>
            <div className={css.menubar}>
                <a href={'#'} className={css.button}>Exit</a>
                <div className={css.timer}>a</div>
                <a href={'#'} className={css.button}>Pause</a>
            </div>
            <div className={css.map}>
                <div className={css.fish}>a</div>
            </div>
    </main>

    );
}

export default GamePage;