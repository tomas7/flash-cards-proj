import { signIn, signOut } from "auth";
import style from './auth-component.module.scss';

export function SignIn() {
  return (
        <form action={async () => { "use server"; await signIn(); }}>

    
    <button className={`${style.authBtnBase} ${style.signIn}`}>
      Sign In!
    </button>
        </form>
  );
}

export function SignOut() {
  return (
      <form action={async () => { "use server"; await signOut(); }}>

    <button className={`${style.authBtnBase} ${style.signOut}`}>
      Sign Out
    </button>
    </form>
  );
}
