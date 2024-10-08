import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./utils/firebase.js";
import { LoggedNavigation } from "./routes/index.js";
import { Auth } from "./pages/Auth/index.js";

export default function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario logueado", user);
        setUser("Jeisson Ochoa");
      } else {
        console.log("No hay usuario logueado");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (user === undefined) return null;
  return user ? <LoggedNavigation /> : <Auth />;
}
