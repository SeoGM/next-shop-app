"use client";
import React, { useState } from "react";
import Image from "next/image";

import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";

import Loader from "@/comoponents/loader/Loader";
import Input from "@/comoponents/input/Input";

const LoginClient = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAutoLogin, setIsAutoLogin] = useState(false);
    
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
            {isLoading && <Loader />}
            <section className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <Image priority src={LogoPath} alt="logo" />
                    </h1>

                    <form onSubmit={handleLoginUser} className={styles.form}>
                        <Input 
                            email 
                            icon="letter" 
                            id="Email" 
                            label="Email" 
                            name="email" 
                            placeholder="아이디(이메일)" 
                            className={styles.control}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input 
                            password
                            icon="lock" 
                            id="password" 
                            label="password" 
                            name="password" 
                            placeholder="비밀번호" 
                            className={styles.password}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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