import { auth } from "@/auth";
import { NotAuthorized } from "./components/Not-authorized";
import styles from "./page.module.scss"

export default async function Home() {
  const session = await auth();      
  if (!session?.user) return <NotAuthorized/>;   
  return (
    <div className={styles.container}>
      <h2>Welcome {session.user.email}</h2>

      <h3>What would you like to learn today?</h3>
      
      </div>
  );
}
