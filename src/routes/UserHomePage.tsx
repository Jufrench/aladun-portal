import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Stack, Tabs, Title } from "@mantine/core";
import ClassCards from "../components/classCards/ClassCards";

export default function UserHomePage() {
  const { isLoading, user } = useContext(AuthContext);
  const [allCards, setAllCards] = useState<any[]>();

  console.info('%cisLoading:', 'color:orange', isLoading)
  console.info('%cuser:', 'color:orange', user)
  async function listGiftCards() {
    try {
      const response = await fetch(`/api/giftcards?customerId=${user.square_id}`);
      const data = await response.json();
      console.log('//// data:', data);
      setAllCards(JSON.parse(data));
    } catch(error) {
      console.error('ERROR:', error);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (!user) {
    // return <div>Loading...</div>;
    return "No user found";
  }

  return (
    <>
    <Stack>
      <Title order={3}>Hello {user.given_name}</Title>
      <Button
        onClick={() => {
          listGiftCards();
        }}
      >
        Gift Card
      </Button>
    </Stack>
    <Tabs>
      <Tabs.List>
        <Tabs.Tab value="cards">Class Cards</Tabs.Tab>
        <Tabs.Tab value="attendance">Attendance</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="cards">
        <ClassCards allCards={allCards} />
      </Tabs.Panel>
      <Tabs.Panel value="attendance">Attendance</Tabs.Panel>
    </Tabs>
    </>
  );
}