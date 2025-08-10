import { useState } from "react";
import { Button, Group, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";

interface LoginContentProps {
  toggleLogin: (value: "login" | "signup") => void;
}

export default function LoginContent(props: LoginContentProps) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <>
      <Title order={1}>Log in</Title>
      <Group gap="xs" justify="center">
        <Text>Don't have an account?</Text>
        <Button
          p={0}
          variant="subtle"
          onClick={() => props.toggleLogin("login")}
        >
          Sign up
        </Button>
      </Group>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button
        onClick={() => {

        }}
      >
        Log in
      </Button>
    </>
  );
}