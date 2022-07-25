import styles from "./style.module.css";


export function Navbar () {

    return (

    <nav className={`navbar ${styles.bgBlue}`}>
        <ul className={`d-flex justify-content-between align-items-center m-1 ${styles.navItems}`} >
            <li className="nav-item">
                <span className={`${styles.logoFont}`}>Classify</span>
            </li>
            <li className="nav-item">
                <div className={`container ${styles.textWhite}`}>About us</div> 
            </li>
            <li className="nav-item">
                <div className={`container ${styles.textWhite}`}>Our mission</div> 
            </li>
            <li className="nav-item">
                <div className={`container ${styles.textWhite}`}>FAQs</div> 
            </li>
            <li className="nav-item">
                <div className={`container ${styles.textWhite}`}>Login</div> 
            </li>
            <li className="nav-item">
            <button className={`btn btn-danger ${styles.button}`}>Create an account</button>
            </li>
        </ul>
    </nav>
    
    )
}