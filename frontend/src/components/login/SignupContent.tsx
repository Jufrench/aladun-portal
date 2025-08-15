import { useState } from "react";
import { Button, Group, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
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

  // async function testList() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/customers/list");
  //     const data = await response.json();
  //     console.log('%cresponse:', 'color:limegreen', response)
  //     console.log('%cdata:', 'color:limegreen', JSON.parse(data))

  //   } catch(error) {
  //     console.error('ERROR:', error);
  //   }
  // }

  // async function testCreate() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/customers/create", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json' // Indicate the content type of the body
  //       },
  //       body: JSON.stringify({
  //         emailAddress: email,
  //         givenName: firstName,
  //         familyName: lastName
  //       })
  //     });

  //     const responseData = await response.json();
  //     console.log('data:', responseData);

  //     if (email) {
  //       await getUpdatedRow(email);
  //     }
  //   } catch(error) {
  //     console.error('ERROR:', error);
  //   }
  // }
  async function testCreate() {
    await fetch("http://localhost:3000/api/customers/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' // Indicate the content type of the body
      },
      body: JSON.stringify({
        emailAddress: email,
        givenName: firstName,
        familyName: lastName
      })
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log('%cres:', 'color:deeppink', res)
      getUpdatedRow(res[0].email_address);
    }).catch(error => {
      console.error('ERROR:', error);
    })
  }

  async function getUpdatedRow(email: string) {
    const response = await supabase.from('test').select().eq("email_address", email);
    console.log('%cresponse:', 'background:chocolate', response)
  }

  // async function signup() {
  //   if (email && password && confirmPassword) {
  //     try {
  //       const response = await fetch("http://localhost:3000/customers/create", {
  //         method: 'POST',
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           emailAddress: email,
  //           givenName: firstName,
  //           familyName: lastName,
  //         })
  //       });

  //       const responseData = await response.json();
  //       console.log('data:', responseData)  

  //       if (responseData.status === 201 && responseData.statusText === "Created") {
  //         notifications.show({
  //           title: "Success!",
  //           message: "Account created!"
  //         });

  //         setTimeout(() => {
  //           props.toggleLogin("login");
  //         }, 1000);
  //       }

  //       return responseData;
  //     } catch(error) {
  //       console.error('ERROR:', error);
  //     }
  //   }
  // }

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
        // onClick={signup}
        onClick={() => {
          // testList();
          testCreate();
        }}
      >
        Send
      </Button>
    </>
  );
}