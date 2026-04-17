import styles from './button.module.css';
interface ButtonProps {
  children: any;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
export default function Button({ children, variant, onClick, type}: ButtonProps) {
    const baseClasses = styles['button-component'];
  const variantClass = styles[`button-${variant}`];
  const combinedClasses = `${baseClasses} ${variantClass}`
  return (
    <button className={combinedClasses} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
}