"use client"

import { signIn } from "auth";
import styles from './Not-authorized.module.scss'

export function NotAuthorized(){
    return <div className={styles.wrapper}>
        <h2>Not Authorized.</h2>
        <p>Please sign-in with your google</p>
        <button onClick={()=> signIn()}>Sign-in!</button>
    </div>
}