import React, { useState } from 'react'
import styles from '../styles/loginstyles.module.css'

function Login() {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <div className={styles.body}>
            <div className={styles.centerDiv}>
                <h1 className={styles.titleContainer}>Welcome !</h1>
                <p style={{ padding: 0, margin: 0 }}>This is the login page</p>

            </div>

            <button onClick={() => setDisplayModal(true)} className={styles.button}>Log in</button>

            {
                displayModal && <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <form style={{display:'flex', flexDirection:'column'}}>
                            <input className={styles.input}  placeholder='Login' />
                            <input className={styles.input} style={{marginTop:20}} type='password' placeholder='Password' />
                            <button className={styles.button} style={{marginTop:20}} type='submit'>Enter</button>
                        </form>
                    </div>

                    <button onClick={()=> setDisplayModal(false)} className={styles.closeButton} style={{position:'relative', right:'5vh', top:'-12vh'}}>X</button>
                    
                </div>
            }
        </div>
    )
}

export default Login