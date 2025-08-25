// import { readLocalStorageValue, useLocalStorage } from "@mantine/hooks";
import { createContext, useState, type ReactNode } from "react";

export const AuthContext = createContext<any>({});
const AuthContextProvider = AuthContext.Provider;

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const [webToken, setWebToken] = useLocalStorage({
  //   key: "token",
  //   defaultValue: null,
  // });

  console.log('%cremove api/supabase directory & its contents', 'color:tomato')

  // useEffect(() => {
  //   const token = readLocalStorageValue({ key: "token" });
  //   if (!token) {
  //     setIsLoading(false);
  //     return;
  //   }

  //   fetch("api/", { headers: { Authorization: `Bearer ${token}` } })
  //     .then(res => {
  //       if (!res.ok) throw new Error("Not authenticated");
  //       return res.json();
  //     })
  //     .then((data) => setUser(data.user))
  //     .catch(() => setUser(null))
  //     .finally(() => setIsLoading(false));
  // }, []);

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName })
      });

      const data = await response.json();
      // if (data.success) {
      //   setUser(data.public[0]);
      // }
      return data;
    } catch(error) {
      console.error('ERROR:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.public[0]);
        setIsLoggedIn(true);
        // setWebToken(data.auth.session.access_token);
      }

      return data;
    } catch(error) {
      console.error('ERROR:', error);
    } finally {
      setIsLoading(false);
    }
  };

  async function logout() {
    console.log('logout')
  }

  return (
    <AuthContextProvider value={{ signup, login, logout, user, isLoading, isLoggedIn }}>
      <>{children}</>
    </AuthContextProvider>
  )
}

export default AuthProvider;