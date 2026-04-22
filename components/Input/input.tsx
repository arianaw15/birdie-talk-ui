import styles from './input.module.css';

interface InputProps {
    variant?: string;
    placeholder?: string;
}

export default function Input({ variant, placeholder }: InputProps) {

    const baseClasses = styles['input-component'];
  const variantClass = styles[`input-${variant}`];
  const combinedClasses = `${baseClasses} ${variantClass}`
    return (
        <textarea className={combinedClasses} placeholder={placeholder}></textarea>
    )
}