import { auth } from "@/auth";
import CardForm from "./createCardForm";
import { SignIn } from "../../components/auth-components";

export default async function Page() {
  const session = await auth();      
  if (!session?.user) return <SignIn />;   
  const email = session.user.email;
  return (
    <CardForm email={email}/>
  );
}
