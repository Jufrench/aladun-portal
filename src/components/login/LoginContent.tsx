import { useContext, useState } from "react";
import { Button, Group, PasswordInput, Text, TextInput, Title, useMantineTheme } from "@mantine/core";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { notifications } from "@mantine/notifications";

interface LoginContentProps {
  toggleLogin: (value: "login" | "signup", userEmail?: string | undefined) => void;
  userEmail?: string | undefined;
}

export default function LoginContent(props: LoginContentProps) {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>(props.userEmail ?? "");
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLogin(email: string, password: string) {
    const response = await login(email, password);

    if (!response.success) {
      notifications.show({
        title: `Error: ${response.message}`,
        message: response.details,
        color: 'yellow',
      });
    } else {
      navigate("/home");
    }
  }

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
        loading={isLoading}
        color={theme.colors.leaf[8]}
        onClick={() => {
          if (email && password) {
            handleLogin(email, password);
            setIsLoading(true);
          }
        }}
      >
        Log in
      </Button>
    </>
  );
}