export const ChatElement = () => {
  return (
    <article className="flex gap-2 w-full pb-4 pl-4 cursor-pointer">
      <figure className="flex items-center justify-center bg-gray-500 min-w-10 h-10 rounded-full">
        <p className="text-white">C</p>
      </figure>
      <div className="w-full border-b border-b-[#2a2a2a] truncate">
        <h1 className="truncate text-white">
          Chat Super largo para probar que no se pasa
        </h1>
        <p className="text-xs text-light-gray">{new Date().toDateString()}</p>
      </div>
    </article>
  );
};
