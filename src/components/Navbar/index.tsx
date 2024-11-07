import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-[#2a2a2a] w-full md:px-8 px-4 py-2 md:py-4 text-white">
      <nav>
        <h3>Hola, {user?.username}</h3>
      </nav>
    </header>
  );
};
