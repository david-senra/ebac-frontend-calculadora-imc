import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.name}>
                Calculadora de IMC
            </h1>
        </header>
    )
}
    
export default Header;