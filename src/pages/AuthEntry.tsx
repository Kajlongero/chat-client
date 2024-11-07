import { useContext, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

export const AuthEntry = () => {
  const id = useId();

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const { handleSetUser } = useContext(UserContext);

  const handleJoin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleSetUser({
      id,
      username,
    });

    navigate("/app");
  };

  return (
    <main className="w-full min-h-dvh bg-dark flex items-center justify-center px-8">
      <div className="min-h-24 max-w-[24rem] bg-[#2a2a2a] shadow-md w-full px-6 py-4 rounded-md">
        <h3 className="text-light-gray">Ingrese su nombre de usuario</h3>
        <form action="" className="mt-4 w-full" onSubmit={handleJoin}>
          <input
            type="text"
            className="w-full rounded-md px-4 py-2 bg-transparent border border-light-grytext-light-gray placeholder:text-[#666] text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="w-full mt-8">
            <button className="w-full bg-light-blue rounded-md px-4 py-2 text-white transition-all hover:scale-105 hover:text-white/90">
              Entrar al chat
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
