"use client";
import styles from "./login.module.css";
import { pageContent } from "@/public/textConstants";
import Form from "@/components/Form/form";
import { FormInfo } from "@/components/Form/form";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth-context";

export default function Login() {
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
  ];

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoggedIn(true);
    router.push("/feed");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginFormContainer}>
        <div className={styles.title}>{pageContent.login.mainTitle}</div>
        <div className={styles.form}>
          <Form formFields={formFields} handleClick={handleSubmitClick} buttonVariant="google-login" buttonText={pageContent.login.signInButton}/>
        </div>
      </div>
    </div>
  );
}
