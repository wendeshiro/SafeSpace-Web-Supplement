import styles from "./Dialog.module.css";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

const Dialog = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Summarize Posts</h2>

        <div className={styles.description}>
          <p className={styles.textRegular}>Generate a summary of all reports submitted near</p>
          <p className={styles.textMedium}>3700 Willingdon Avenue, Burnaby</p>
        </div>

        <div className={styles.inputSection}>
          <p className={styles.label}>Choose how wide an area to include:</p>
          <div className={styles.inputWrapper}>
            <span className={styles.inputValue}>Within 50 km</span>
            <ChevronDown color="#7842CB" size={24} />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <Button variant="secondary" className={styles.button} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" className={styles.button}>
            Generate Summary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
