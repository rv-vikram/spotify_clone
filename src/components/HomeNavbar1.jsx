import styles from "./CSS/HomeNavbar1.module.css"

export const HomeNavbar1 = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <button className={styles.btn}>SIGN UP</button>
                <button className = {styles.btn1}>LOG IN</button>
            </div>
        </div>
    )
}