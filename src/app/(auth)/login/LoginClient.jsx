"use client";
import React, { useState } from "react";
import Image from "next/image";

import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";

import Loader from "@/comoponents/loader/Loader";

const LoginClient = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [isAutoLogin, setisAutoLogin] = useState(false);
    
    const router = useRouter();

    const redirectUser = () => {
        router.push("/");
    };
    
    const handleLoginUser = (e) => {
        e.preventDefault();
        setisLoading(true);
    };

    const signInWithGoogle = () => {
        // TODO
    };

    return (
        <>
            <Loader />
            <section className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <Image priority src={LogoPath} alt="logo" />
                    </h1>

                    <form onSubmit={handleLoginUser} className={styles.form}>
                        Input
                        <div className={styles.group}>
                            자동 로그인, 비밀번호 수정
                        </div>

                        <div className={styles.buttonGroup}>
                            Button
                            <div>
                                Button
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}

export default LoginClient;