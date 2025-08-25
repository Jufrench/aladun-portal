import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Stack, Tabs, Title } from "@mantine/core";
import ClassCards from "../components/classCards/ClassCards";

export default function UserHomePage() {
  const { isLoading, user } = useContext(AuthContext);
  const [allCards, setAllCards] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>('first');

  function handleChangeTab(tabValue: string) {
    setActiveTab(tabValue);
  }

  
  useEffect(() => {
    if (activeTab === "class-cards" && allCards.length === 0) {
      console.log('hey!')
      listGiftCards();
    }
  }, [activeTab])

  async function listGiftCards() {
    try {
      // const response = await fetch(`/api/giftcards?customerId=${user.square_id}`);
      const response = await fetch(`/api/giftcards?customerId=50V6FTEYNW27VG7PS630PQRG00`);
      const data = await response.json();
      console.log('//// data:', data);
      setAllCards(JSON.parse(data));
    } catch(error) {
      console.error('ERROR:', error);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (!user) {
    return "No user found";
  }

  return (
    <>
    <Stack>
      <Title order={3}>Hello {user.given_name}</Title>
    </Stack>
    <Tabs value={activeTab} onChange={(value: any) => handleChangeTab(value)}>
      <Tabs.List>
        <Tabs.Tab value="class-cards">Class Cards</Tabs.Tab>
        <Tabs.Tab value="attendance">Attendance</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="class-cards">
        <ClassCards allCards={allCards} />
      </Tabs.Panel>
      <Tabs.Panel value="attendance">Attendance</Tabs.Panel>
    </Tabs>
    </>
  );
}