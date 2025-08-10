import { useState } from "react";
import LoginContent from "../login/SignupContent";
import SignupContent from "../login/LoginContent";
import { Stack } from "@mantine/core";

export default function LoginPage() {
  const [option, setOption] = useState<"login" | "signup">("login");

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