'use client'
import Button from '@/components/Button/button'
import styles from './createProfile.module.css'
import { pageContent } from '@/public/textConstants'
import { FaImage } from "react-icons/fa6";
import Form from '@/components/Form/form';
import { FormInfo } from "@/components/Form/form";
import { useRouter } from "next/navigation";

export default function CreateProfile() {
    const router = useRouter();

    const formFields: FormInfo[] = [
          {
            id: "username",
            type: "username",
            placeholder: "Username",
          },
          {
            id: "displayName",
            type: "displayName",
            placeholder: "Display Name",
          },
          {
            id: "bio",
            type: "bio",
            placeholder: "Bio",
          },
          {
            id: "location",
            type: "location",
            placeholder: "Location",
          },
        ];

    const handleCreateProfile = () => {
        router.push("/feed");
    }
    return (
        <div className={styles.container}>
            <div className={styles.createProfileContainer}>
                <div className={styles.title}>{pageContent.createProfile.mainTitle}</div>
                 <div className={styles.addProfileImage}><Button><FaImage size={24}/></Button></div>
                 <div><Form formFields={formFields} buttonText='Start Chirping' buttonVariant='google-login' handleClick={handleCreateProfile}></Form></div>
            </div>
        </div>
    )
}