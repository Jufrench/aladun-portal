import { createContext, useState, type ReactNode } from "react";

export const AuthContext = createContext<any>({});
const AuthContextProvider = AuthContext.Provider;

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Record<string, any>>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  console.log('%cremove api/supabase directory & its contents', 'color:tomato')

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
      console.log('%cdata:', 'color:tomato', data)
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
      }
      return data;
    } catch(error) {
      console.error('ERROR:', error);
    }
  };

  async function logout() {
    console.log('logout')
  }

  return (
    <AuthContextProvider value={{ signup, login, logout, user, isLoggedIn }}>
      <>{children}</>
    </AuthContextProvider>
  )
}

export default AuthProvider;