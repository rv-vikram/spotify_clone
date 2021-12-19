import { useHistory } from "react-router-dom"
import styles from "./CSS/HomeNavbar.module.css"

export const HomeNavbar = ({ children }) => {
    const history = useHistory();
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.boxings}>
                    <div onclick={() => history.goBack()}><img src="http://localhost:3000/next.png" alt="next" /></div>
                    <div><img src="http://localhost:3000/next.png" alt="next" /></div>
                </div>
                {children ? children : null}
                <button className={styles.btn}>UPGRADE</button>
                <button className={styles.btn1}>Profile</button>
            </div>
        </div>
    )
}