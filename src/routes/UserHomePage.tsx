import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Modal, Skeleton, Tabs, Title } from "@mantine/core";
import ClassCards from "../components/classCards/ClassCards";
import { useDisclosure } from "@mantine/hooks";
import ReloadGiftCardContent from "../components/classCards/ReloadGiftCardContent";
import BarcodeContent from "../components/classCards/BarcodeContent";

export const ModalAction = {
  Reload: "Reload",
  Barcode: "Barcode",
  Transfer: "Transfer",
  Delete: "Delete"
};

export type ModalAction = (typeof ModalAction)[keyof typeof ModalAction];

export default function UserHomePage() {
  const { isLoading, user } = useContext(AuthContext);
  const [allCards, setAllCards] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>('first');
  const [loading, setLoading] = useState<boolean>(true);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalAction, setModalAction] = useState<ModalAction>();

  const handleChangeTab = (tabValue: string) => setActiveTab(tabValue);
  // const handleCloseModal = () => opened ? close() : open();
  function handleOpenModal(action: ModalAction) {
    setModalAction(action);
    open();
  }
  
  useEffect(() => {
    if (activeTab === "class-cards" && allCards.length === 0) {
      listGiftCards();
    }
  }, [activeTab])

  async function listGiftCards() {
    try {
      setLoading(true);
      const response = await fetch(`/api/giftcards?customerId=50V6FTEYNW27VG7PS630PQRG00`);
      const data = await response.json();

      if (response.status === 200) {
        setAllCards(JSON.parse(data));
      }
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

  console.log('/// fix hot reload error w/ incorrect type of export ///')

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
          <ClassCards
            allCards={allCards}
            onOpenModal={(action: ModalAction) => handleOpenModal(action)}
          />
        }
        {/* <ClassCards allCards={allCards} /> */}
      </Tabs.Panel>
      <Tabs.Panel value="attendance">Attendance</Tabs.Panel>
    </Tabs>
    <Modal
      opened={opened}
      onClose={close}
      title={modalAction}
    >
      {modalAction === ModalAction.Reload &&
        <ReloadGiftCardContent />
      }
      {modalAction === ModalAction.Barcode &&
        <BarcodeContent />
      }
    </Modal>
    </>
  );
}