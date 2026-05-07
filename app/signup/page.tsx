"use client";
import styles from "./signup.module.css";
import { pageContent } from "@/public/textConstants";
import Form from "@/components/Form/form";
import { FormInfo } from "@/components/Form/form";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth-context";

export default function Signup() {
  const { loggedIn, setLoggedIn } = useAuth();
    const router = useRouter();
    const formFields: FormInfo[] = [
      {
        id: "email",
        type: "email",
        placeholder: "Email Address",
      },
      {
        id: "password",
        type: "password",
        placeholder: "Password",
      },
      {
        id: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
      },
    ];
  
    const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setLoggedIn(true);
      router.push("/createProfile");
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.signupFormContainer}>
          <div className={styles.title}>{pageContent.signup.mainTitle}</div>
          <div className={styles.form}>
            <Form formFields={formFields} handleClick={handleSubmitClick} buttonVariant="google-login" buttonText={pageContent.signup.formButtonText}/>
          </div>
        </div>
      </div>
    );
}