import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Random User",
    email: "random@random.com",
  },
});

export default UserContext;
