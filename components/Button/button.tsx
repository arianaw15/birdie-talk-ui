import styles from './button.module.css';

interface ButtonProps {
  children: any;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  id?: string;
}
export default function Button({ children, variant, onClick, type, id}: ButtonProps) {
    const baseClasses = styles['button-component'];
  const variantClass = styles[`button-${variant}`];
  const combinedClasses = `${baseClasses} ${variantClass}`
  return (
    <button className={combinedClasses} type={type || "button"} onClick={onClick} id={id}>
     {children}
    </button>
  );
}