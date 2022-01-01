import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react/cjs/react.production.min";
import style from '../styles/login.module.css';
import loginImage from '../public/assets/image/login1.png';
import BasicButton from "../components/Utility/buttons/BasicButton";


function login(){
  return(
    <Fragment>
      <Head>

      </Head>
      <main className="background_primary text-dark  p-lg-0 pt-lg-3 text-center text-sm-start">
        <div className="">
          <div className="d-sm-flex align-items-start justify-content-between">
            <div className={style.login_left}>
              <form className={style.login_form}>
                <h1 className={style.login_heading}>Log into Your Account</h1>
                <div className={style.form_control}>
                  <lable htmlFor='email'>Email</lable>
                  <input className={style.login_input} id="email"/>
                </div>
                <div className={style.form_control}>
                  <lable htmlFor="password">Password</lable>
                  <input className={style.login_input} id="password"/>
                </div>
                <div className={style.form_control}>
                  <BasicButton>Login</BasicButton>
                </div>
                <div>
                  {/* <lable for="password">Password</lable> */}
                  {/* social media login button */}
                </div>
              </form>
              <p>Do you have account alread? <Link href='/'>Signup here</Link> </p>
            </div>
            <img className="img-fluid w-50 " src="https://media.istockphoto.com/photos/adult-african-american-woman-voting-picture-id1276510629?s=2048x2048" alt="file here"/>
          </div>
         
          {/* <div className="login-right">
              
          </div> */}
        </div>
      </main>
    </Fragment>
  );
}

export default login;