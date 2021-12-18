import styles from "./CSS/HomeNavbar.module.css"

export const HomeNavbar = ({children}) => {
    return (
        <div>
            <div className={styles.navbar}>
                {children? children:null}
                <button className={styles.btn}>UPGRADE</button>
                <button className = {styles.btn1}>Profile</button>
            </div>
        </div>
    )
}