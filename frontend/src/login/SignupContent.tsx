import { useState } from "react";
import { Button, Group, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import supabase from "../../supabase/supabaseClient";

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
      const { data, error } = await supabase.auth.signUp({
        email, password,
      });

      console.log('data:', data)
      console.log('error:', error)
    }

    // create user account in square
    // return id from square
    // send user email & password to supabase auth
    // once verified, set auth foreign key to public users table
    // then set square id to public users table
  }

  return (
    <>
      <Title order={1}>Create an account</Title>
      <Group gap="xs" justify="center">
        <Text>Already have an account?</Text>
        <Button
          p={0}
          variant="subtle"
          onClick={() => props.toggleLogin("signup")}
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
        onClick={() => {
          signup();
        }}
      >
        Send
      </Button>
    </>
  );
}