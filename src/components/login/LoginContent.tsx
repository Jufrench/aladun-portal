import { useState } from "react";
import { Button, Group, PasswordInput, Text, TextInput, Title, useMantineTheme } from "@mantine/core";

interface LoginContentProps {
  toggleLogin: (value: "login" | "signup", userEmail?: string | undefined) => void;
  userEmail?: string | undefined;
}

export default function LoginContent(props: LoginContentProps) {
  const theme = useMantineTheme();
  const [email, setEmail] = useState<string>(props.userEmail ?? "");
  const [password, setPassword] = useState<string>();

  console.log('%cLoginContent props.userEmail', 'color:tomato', props.userEmail)

  return (
    <>
      <Title order={1}>Log in</Title>
      <Group gap="xs" justify="center">
        <Text>Don't have an account?</Text>
        <Button
          p={0}
          variant="subtle"
          color={theme.colors.leaf[8]}
          onClick={() => props.toggleLogin("signup")}
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
        color={theme.colors.leaf[8]}
        onClick={() => {
          console.log('log in!')
        }}
      >
        Log in
      </Button>
    </>
  );
}