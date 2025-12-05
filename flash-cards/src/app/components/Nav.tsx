import { auth } from "@/auth";
import { SignIn, SignOut } from "./auth-components";
import NavLinks from "./NavLinks"; // <-- important
import styles from "./Nav.module.scss";
import Link from "next/link";

export default async function Nav() {
  const session = await auth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLinks />   {/* Active classes handled here */}
        </div>

        <div className={styles.right}>
          {/* convert this into navLInks that will hang onzzzzz */}
          <Link href="#" className={styles.link}>Your Profile</Link>
          <Link href="#" className={styles.link}>Settings</Link>

          {!session?.user ? <SignIn /> :<><SignOut /> <p>{session.user.email}</p></> }
        </div>
      </div>
    </nav>
  );
}
