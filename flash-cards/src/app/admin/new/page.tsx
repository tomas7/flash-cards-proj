import { auth } from "@/auth";
import CardForm from "./createCardForm";
import { NotAuthorized } from "../../components/Not-authorized";

export default async function Page() {
  const session = await auth();      
  if (!session?.user) return <NotAuthorized/>;   
  const email = session.user.email;
  return (
    <CardForm email={email}/>
  );
}
