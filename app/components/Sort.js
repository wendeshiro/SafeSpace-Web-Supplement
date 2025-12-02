import styles from "./Sort.module.css";
import { ChevronDown } from "lucide-react";

export default function Sort({ label = "Sort by:", value = "Newest", onClick }) {
  return (
    <button className={styles.container} onClick={onClick} type="button">
      <span className={styles.text}>
        {label} {value}
      </span>
      <span className={styles.icon}>
        <ChevronDown color="#FFFFFF" size={24} />
      </span>
    </button>
  );
}
