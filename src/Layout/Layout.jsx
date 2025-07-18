import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Contact App</h1>
        <p>
          <a href="https://github.com/Mohm-j" target="_blank">
            Mohmj
          </a>
          | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Copyright © 2025 Designed by Mohmj</p>
      </footer>
    </>
  );
};

export default Layout;
