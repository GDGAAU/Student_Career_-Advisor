import React from "react";
import styles from "./FloatingButton.module.css"; // Import modular CSS

const FloatingButton = ({ onClick }) => {
  return (
    <div className={styles.floatingButton} onClick={onClick}>
      💬 Chat
    </div>
  );
};

export default FloatingButton;
