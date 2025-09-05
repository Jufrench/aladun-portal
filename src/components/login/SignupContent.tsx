import { useContext, useState } from "react";
import { Button, Group, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { AuthContext } from "../../contexts/AuthContext";

interface SignupContentProps {
  toggleLogin?: (value: "login" | "signup", userEmail?: string | undefined) => void;
}

export default function SignupContent(props: SignupContentProps) {
  const { signup } = useContext(AuthContext);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  async function handleSignUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    const response = await signup(email, password, firstName, lastName);

    if (!response.success) {
      notifications.show({
        title: `Error: ${response.status}`,
        message: response.message,
        color: 'yellow',
      });
    } else {
      notifications.show({
        title: "Success!",
        message: "Account created"
      });

      props.toggleLogin && props.toggleLogin('login', email);
    }
  }

  return (
    <Stack mt="lg" w="auto">
      {/* <Title order={1}>Create an account</Title> */}
      <Group gap="xs" justify="center">
        <Text>Already have an account?</Text>
        <Button
          p={0}
          variant="subtle"
          color="leaf"
          onClick={() => {
            props.toggleLogin && props.toggleLogin("login");
          }}
        >
          Log in
        </Button>
      </Group>
      <TextInput
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <TextInput
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
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
      <PasswordInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />
      <Button
        color="leaf"
        onClick={() => {
          if (email !== "" && password !== "" && confirmPassword !== ""
            && firstName !== "" && lastName !== "") {
            handleSignUp(email, password, firstName, lastName);
          }
        }}
      >
        Send
      </Button>
    </Stack>
  );
}