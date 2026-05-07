'use client';
import styles from './form.module.css';
import { useState } from 'react';
import Button from '../Button/button';
import { pageContent } from '@/public/textConstants';


export interface FormInfo {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
}

interface FormProps {
    formFields?: FormInfo[]
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonText?: string;
    buttonVariant?: string;
}
export default function Form({formFields, handleClick, buttonText, buttonVariant}: FormProps) {


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted');
    // Add your authentication logic here

    handleClick && handleClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
  };


  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }} className={styles.formContainer}>
       {formFields && formFields.map((field: FormInfo) => {
        return(
            <div className={styles.inputGroup} id={field.id} key={field.id}>
                {field.label && <label>{field.label}</label>}
            <input id={field.id} type={field.type} placeholder={field.placeholder} />
            </ div>
        )
       })}
      <Button variant={buttonVariant} type="submit">{buttonText}</Button>
    </form>
  );
}