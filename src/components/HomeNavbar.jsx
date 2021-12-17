import styles from "./CSS/HomeNavbar.module.css"

export const HomeNavbar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <button className={styles.btn}>UPGRADE</button>
                <button className = {styles.btn1}>Profile</button>
            </div>
        </div>
    )
}