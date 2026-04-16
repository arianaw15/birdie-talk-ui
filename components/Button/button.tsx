import styles from './button.module.css';

export default function Button({ children, variant, onClick}: { children: any; variant?: string; onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void}) {
    const baseClasses = styles['button-component'];
  const variantClass = styles[`button-${variant}`];
  const combinedClasses = `${baseClasses} ${variantClass}`
  return (
    <button className={combinedClasses} type="button" onClick={onClick}>{children}</button>
  );
}