import { createContext, useState } from "react";
import { UserContext as UserCtx } from "../interfaces/context.model";
import { User } from "../interfaces/user.model";

export const UserContext = createContext({} as UserCtx);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const handleSetUser = (data: User) => {
    setUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleSetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
