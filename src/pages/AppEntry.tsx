import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ChatsContainer } from "../containers/Chats";
import { ChatElement } from "../components/Chat";

export const AppEntry = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) return navigate("/", {});
  }, []);

  return (
    <main className="w-full min-h-dvh bg-dark max-h-dvh overflow-y-hidden">
      <section className="sm:max-w-60 md:max-w-64">
        <Navbar />
        <ChatsContainer
          RenderComponent={ChatElement}
          elements={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        />
      </section>
      <section className="max-sm:hidden"></section>
    </main>
  );
};
