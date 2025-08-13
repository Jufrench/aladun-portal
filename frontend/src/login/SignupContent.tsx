import { useState } from "react";
import { Button, Group, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";

interface SignupContentProps {
  toggleLogin: (value: "login" | "signup") => void;
}

export default function SignupContent(props: SignupContentProps) {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  async function signup() {
    if (email && password && confirmPassword) {
      try {
        const response = await fetch("http://localhost:3000/customers/create", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            emailAddress: email,
            givenName: firstName,
            familyName: lastName,
          })
        });

        const responseData = await response.json();
        console.log('data:', responseData)  

        if (responseData.status === 201 && responseData.statusText === "Created") {
          notifications.show({
            title: "Success!",
            message: "Account created!"
          });

          setTimeout(() => {
            props.toggleLogin("login");
          }, 1000);
        }

        return responseData;
      } catch(error) {
        console.error('ERROR:', error);
      }
    }
  }

  return (
    <>
      <Title order={1}>Create an account</Title>
      <Group gap="xs" justify="center">
        <Text>Already have an account?</Text>
        <Button
          p={0}
          variant="subtle"
          onClick={() => props.toggleLogin("login")}
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
        onClick={signup}
      >
        Send
      </Button>
    </>
  );
}