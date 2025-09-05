import { useState } from "react";
import { Stack } from "@mantine/core";
import LoginContent from "../components/login/LoginContent";
import SignupContent from "../components/login/SignupContent";

export default function LoginPage() {
  const [option, setOption] = useState<"login" | "signup">("signup");
  const [createdUserEmail, setCreatedUserEmail] = useState<string | undefined>(undefined);

  function handleSetOption(value: "login" | "signup", userEmail?: string) {
    setOption(value);
    if (userEmail) setCreatedUserEmail(userEmail);
  }

  return (
    <>
      <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" />
      {option === "login" &&
        <LoginContent
          toggleLogin={handleSetOption}
          userEmail={createdUserEmail}
        />
      }
      {option === "signup" && <SignupContent toggleLogin={handleSetOption} />}
    </>
  );
}