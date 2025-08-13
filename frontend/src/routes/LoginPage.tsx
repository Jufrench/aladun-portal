import { useState } from "react";
import { Stack } from "@mantine/core";
import LoginContent from "../login/LoginContent";
import SignupContent from "../login/SignupContent";

export default function LoginPage() {
  const [option, setOption] = useState<"login" | "signup">("signup");

  function handleSetOption(value: "login" | "signup") {
    setOption(value);
  }

  return (
    <>
      <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" />
      <Stack mt="lg" w="auto">
        {option === "login" && <LoginContent toggleLogin={handleSetOption} />}
        {option === "signup" && <SignupContent toggleLogin={handleSetOption} />}
      </Stack>
    </>
  );
}