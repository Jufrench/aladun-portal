import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Modal, Skeleton, Tabs, Title } from "@mantine/core";
import ClassCards from "../components/classCards/ClassCards";
import { useDisclosure } from "@mantine/hooks";

export default function UserHomePage() {
  const { isLoading, user } = useContext(AuthContext);
  const [allCards, setAllCards] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>('first');
  const [loading, setLoading] = useState<boolean>(true);
  const [opened, { open, close }] = useDisclosure(false);

  const handleChangeTab = (tabValue: string) => setActiveTab(tabValue);
  const handleOpenModal = () => opened ? close() : open();
  
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
      setLoading(false);
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (!user) {
    return "No user found";
  }

  return (
    <>
    <Title ta="left" mb="md" order={3}>Hello {user.given_name}</Title>
    <Tabs autoContrast color="#f8f3e6" variant="pills" value={activeTab} onChange={(value: any) => handleChangeTab(value)}>
      <Tabs.List>
        <Tabs.Tab value="class-cards">Class Cards</Tabs.Tab>
        <Tabs.Tab value="attendance">Attendance</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="class-cards" pt="md">
        {(loading && allCards.length === 0) && <Skeleton height={200} />}
        {!loading && allCards.length === 0 && <>No Gift Cards Found</>}
        {!isLoading && allCards.length > 0 &&
          <ClassCards allCards={allCards} onOpenModal={handleOpenModal} />
        }
        {/* <ClassCards allCards={allCards} /> */}
      </Tabs.Panel>
      <Tabs.Panel value="attendance">Attendance</Tabs.Panel>
    </Tabs>
    <Modal
      opened={opened}
      onClose={close}
    >
      Hello
    </Modal>
    </>
  );
}