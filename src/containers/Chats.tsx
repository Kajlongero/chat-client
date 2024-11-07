import { useId } from "react";

type Props<T> = {
  elements: T | T[];
  RenderComponent: React.ElementType;
};

export function ChatsContainer<T>({ elements, RenderComponent }: Props<T>) {
  const id = useId();

  return (
    <ul className="pt-4 flex-1 overflow-y-scroll h-full">
      {Array.isArray(elements) &&
        elements.map((elem, idx) => {
          return (
            <li key={`container-${id}-${idx}`}>
              <RenderComponent {...elem} />
            </li>
          );
        })}
    </ul>
  );
}
