
import { auth } from "auth";

import { SignIn } from "./auth-components";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm sm:inline-flex">
        {session.user.email}
      </span>
      
    </div>
  );
}
