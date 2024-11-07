import { User } from "./user.model";

export interface UserContext {
  user: User | null;

  handleSetUser: (data: User) => void;
}
