import { createContext, type ReactNode } from "react";

export const AuthContext = createContext<any>({});
const AuthContextProvider = AuthContext.Provider;

export default function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<Record<string, any>>();

  async function signup() {
    console.log('signup')
  }

  async function login() {
    console.log('login')
  }

  async function logout() {
    console.log('logout')
  }

  return (
    <AuthContextProvider value={{ signup, login, logout, /* user */ }}>
      <>{children}</>
    </AuthContextProvider>
  )
}