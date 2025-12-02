import styles from "./BackButton.module.css";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ onClick, className }) {
  return (
    <button type="button" className={`${styles.button} ${className}`} onClick={onClick} aria-label="Back">
      <span className={styles.icon}>
        <ArrowLeft color="#FFFFFF" size={24} strokeWidth={2} />
      </span>
    </button>
  );
}
