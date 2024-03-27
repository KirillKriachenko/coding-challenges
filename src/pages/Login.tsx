import React, { useState } from 'react'
import styles from '../styles/loginstyles.module.css'

function Login() {
    const [displayModal, setDisplayModal] = useState(false);
    const [erroMessage, setErrorMessage] = useState('');

    const loginButtonHandler = (event:React.SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            login: {value:string};
            password: {value:string};
        };

        const login = target.login.value;
        const password = target.password.value;
        
        if(login == 'kirill' && password == 'Kirill@123'){
            // navigation('/home');
            window.location.pathname = '/home';
        }
        else{
            setErrorMessage('Please check login & password');
        }

    }

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
                        <form onSubmit={loginButtonHandler} style={{display:'flex', flexDirection:'column'}}>
                            <input name='login' className={styles.input}  placeholder='Login' />
                            <input name='password' className={styles.input} style={{marginTop:20}} type='password' placeholder='Password' />
                            <button className={styles.button} style={{marginTop:20}} type='submit'>Enter</button>
                        </form>
                        {
                            erroMessage !== '' && <p style={{color: 'rgb(155, 19, 19)', textAlign:'center'}}>{erroMessage}</p>
                        }
                    </div>

                    <button onClick={()=> setDisplayModal(false)} className={styles.closeButton} style={{position:'relative', right:'5vh', top:'-12vh'}}>X</button>
                    
                </div>
            }
        </div>
    )
}

export default Login