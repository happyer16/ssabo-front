import { createContext } from 'react';
import {UserContextType} from "@/src/entity/user";


const UserContext = createContext<UserContextType>({
  user: null,
  loginToken: (token) => {},
  logoutUser: () => {},
});

export { UserContext };
