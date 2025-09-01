import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Divider, Skeleton, Tabs, Title } from "@mantine/core";
import ClassCards from "../components/classCards/ClassCards";

export default function UserHomePage() {
  const { isLoading, user } = useContext(AuthContext);
  const [allCards, setAllCards] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>('first');
  // const [loading, setLoading] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      setLoading(true);
      // const response = await fetch(`/api/giftcards?customerId=${user.square_id}`);
      const response = await fetch(`/api/giftcards?customerId=50V6FTEYNW27VG7PS630PQRG00`);
      const data = await response.json();
      console.log('data:', JSON.parse(data));
      setAllCards(JSON.parse(data));
      return data;
    } catch(error) {
      console.error('ERROR:', error);
    } finally {
      console.log('%cfinally', 'color:tomato')
      // debugger
      setLoading(false);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (!user) {
    return "No user found";
  }

  console.log('loading:', loading)

  return (
    <>
    {/* <Stack> */}
      <Title ta="left" mb="md" order={3}>Hello {user.given_name}</Title>
    {/* </Stack> */}
    <Tabs variant="pills" value={activeTab} onChange={(value: any) => handleChangeTab(value)}>
      <Tabs.List>
        <Tabs.Tab value="class-cards">Class Cards</Tabs.Tab>
        <Tabs.Tab value="attendance">Attendance</Tabs.Tab>
      </Tabs.List>
      <Divider />
      <Tabs.Panel value="class-cards" pt="md">
        {(loading && allCards.length === 0) && <Skeleton height={200} />}
        {!loading && allCards.length === 0 && <>No Gift Cards Found</>}
        {!isLoading && allCards.length > 0 && <ClassCards allCards={allCards} />}
        {/* <ClassCards allCards={allCards} /> */}
      </Tabs.Panel>
      <Tabs.Panel value="attendance">Attendance</Tabs.Panel>
    </Tabs>
    </>
  );
}