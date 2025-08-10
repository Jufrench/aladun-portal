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
    <Stack mt="xl" w="auto">
      {option === "login" && <LoginContent toggleLogin={handleSetOption} />}
      {option === "signup" && <SignupContent toggleLogin={handleSetOption} />}
    </Stack>
  );
}