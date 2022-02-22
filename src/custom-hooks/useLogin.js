// import { createContext, useContext, useState, useEffect } from "react";
// import userServices from "../services/userServices";
// export const UserContext = createContext(null);

// export default function LoginProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     userServices
//       .getCurrentUser()
//       .then((res) => {
//         setCurrentUser(res.data);

//       })
//       .catch(() => setCurrentUser(null));
//   }, []);

//   return (
//     <UserContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
// export function useLogin() {
//   return useContext(UserContext);
// }
