import { createContext, type ReactNode } from "react";

export const AuthContext = createContext<any>({});
const AuthContextProvider = AuthContext.Provider;

// export default function AuthProvider({ children }: { children: ReactNode }) {
function AuthProvider({ children }: { children: ReactNode }) {
  // const [user, setUser] = useState<Record<string, any>>();

  // const createAuthUser = async (email: string, password: string) => {
  //   try {
  //     const response = await fetch("/api/supabase/createAuth", {
  //       method: 'POST',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password })
  //     });

  //     const data = await response.json();
  //     console.log('%cdata:', 'color:tomato', data)
  //     return data;
  //   } catch(error) {
  //     console.error('ERROR:', error);
  //   }
  // };

  // const createPublicUser = async () => {
  //   const userInfo = {
  //     given_name: firstName,
  //     family_name: lastName,
  //     email_address: email
  //   };

  //   try {
  //     const response = await fetch("/api/supabase/createPublic", {
  //       method: 'POST',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ ...userInfo })
  //     });

  //     const data = await response.json();
  //     console.log('%ccreatePublicUser data:', 'color:limegreen', data)
  //     return data;
  //   } catch(error) {
  //     console.error('ERROR:', error);
  //   }
  // };

  // const createUser = async (email: string, password: string) => {
  //   const authResponse = await createAuthUser(email, password);

  //   // console.group('%c   ', 'background:chocolate')
  //   // console.log('authId:', authId)
  //   // console.log('status:', status)
  //   // console.groupEnd()

  //   if (!authResponse.success) {
  //     // return error if auth response is not success
  //     return {
  //       success: authResponse.success,
  //       status: authResponse.status,
  //       message: `${authResponse.code} - Could not create auth user`,
  //     };
  //   } else {
  //     // const response = await createPublicUser();

  //     // if (!response.success) {
  //     //   notifications.show({
  //     //     title: `Error: ${response.status}`,
  //     //     message: `Code: ${response.code} - ${response.message}`,
  //     //     color: 'red',
  //     //   });
  //     // } else {
  //     //   notifications.show({
  //     //     title: "Success!",
  //     //     message: "Account created"
  //     //   });
  
  //     //   props.toggleLogin('login', email);
  //     // }
  //   }
  // }

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response = await fetch("/api/auth/createUser", {
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

export default AuthProvider;