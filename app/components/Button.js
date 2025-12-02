import styles from "./Button.module.css";
import { Sparkles } from "lucide-react";

const Button = ({ variant = "primary", children, icon, className, ...props }) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button className={`${styles.button} ${variantClass} ${className || ""}`} {...props}>
      <span>{children}</span>
      {variant === "tertiary" && (
        <span className={styles.icon}>
          {icon || <Sparkles color="#7842CB" size={22} fill="transparent" strokeWidth={2} />}
        </span>
      )}
    </button>
  );
};

export default Button;
