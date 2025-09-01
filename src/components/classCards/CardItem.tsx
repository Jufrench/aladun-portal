import { useState } from 'react';
import { ActionIcon, Button, Card, Group, Image, Menu, Modal, Pill, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBarcode, IconDotsVertical, IconReload, IconTrash } from '@tabler/icons-react';
import dayjs from "dayjs";

interface CardItemProps {
  cardItem: any;
}

// export enum ModalActionType {
//   RELOAD = "reload",
//   DELETE = "delete",
// }
type ModalActionType = "RELOAD" | "DELETE";

export default function CardItem(props: CardItemProps) {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const canDeleteCard = props.cardItem.balanceMoney.amount === 0;
  const [modalAction, setModalAction] = useState<ModalActionType>();
  // const [drawerOpened, { toggle: openDrawer, close: closeDrawer }] = useDisclosure(false);

  const ReloadCardContent = () => {
    return (
      <>reload card</>
    )
  }
  const DeleteCardContent = () => {
    return (
      <>
        {!canDeleteCard &&
          <Text>Cannot delete card with an active balance. Please transfer balance to another card, use the remaining balance, or contact admin.</Text>
        }
      </>
    )
  }
  
  return (
    <>
      <Card withBorder shadow="sm">
        <Card.Section withBorder p="xs">
          <Group justify="space-between">
            {/* <Group gap={2}>
              <Text>Balance:</Text>
              <Text fw="bold">
              ${(props.cardItem.balanceMoney.amount / 100).toFixed(2)}
              </Text>
            </Group> */}
            <Text>{props.cardItem.gan}</Text>
            <Pill c="white" fw="bold" bg={theme.colors.leaf[8]}>{props.cardItem.state}</Pill>
            <Menu>
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDotsVertical />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                {/* <Menu.Item
                  leftSection={<IconReload size={14} />}
                  onClick={() => {
                    setModalAction("RELOAD");
                    toggle();
                  }}
                >
                  Reload
                </Menu.Item> */}
                <Menu.Divider />
                <Menu.Item
                  leftSection={<IconTrash size={14} />}
                  color="red"
                  onClick={() => {
                    setModalAction("DELETE");
                    toggle();
                  }}
                >
                  Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Card.Section>
        <Card.Section>
          <Image h={150} src="/cityinmotion_giftcard.png" alt="Aladun City in motion gift card" />
        </Card.Section>
        <Card.Section p="xs" withBorder>
          {/* <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" /> */}
          <Stack
            gap={0}
            align='flex-start'
            style={{
              // border: "1px solid tomato"
            }}
          >
            <Stack gap={0} align="flex-start">
              <Text size="sm">Balance:</Text>
              <Title>${(props.cardItem.balanceMoney.amount / 100).toFixed(2)}</Title>
            </Stack>
            {/* <Divider w="100%" /> */}
            <Group gap="xs" align="flex-start">
              <Text size="sm">Created:</Text>
              <Text size="sm">{dayjs(props.cardItem.createdAt).format("MM-DD-YYYY")}</Text>
            </Group>
          </Stack>
        </Card.Section>
        <Card.Section p="xs">
          <Group gap="xs">
            <Button
              leftSection={<IconReload />}
              style={{ flex: "1 0 auto" }}
            >
              Reload
            </Button>
            <Button
              leftSection={<IconBarcode />}
            >
              Bar Code
            </Button>
          </Group>
        </Card.Section>
        {/* <Card.Section p="xs">
          <Group justify="space-between">
            <Button size="compact-md">Reload</Button>
          </Group>
        </Card.Section> */}
      </Card>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Content>
          <Modal.Header>
            {!canDeleteCard ? <>Oops!</> : <>Are you sure?</>}
          </Modal.Header>
          <Modal.Body>
            {modalAction === "RELOAD" && <ReloadCardContent />}
            {modalAction === "DELETE" && <DeleteCardContent />}
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
  // return (
  //   <>
  //     <Card withBorder shadow="sm">
  //       <Card.Section withBorder p="xs">
  //         <Group justify="space-between">
  //           <Group gap={2}>
  //             <Text>Balance:</Text>
  //             <Text fw="bold">
  //             ${(props.cardItem.balanceMoney.amount / 100).toFixed(2)}
  //             </Text>
  //           </Group>
  //           <Pill c="white" fw="bold" bg={theme.colors.leaf[8]}>{props.cardItem.state}</Pill>
  //           <Menu>
  //             <Menu.Target>
  //               <ActionIcon variant="subtle" color="gray">
  //                 <IconDotsVertical />
  //               </ActionIcon>
  //             </Menu.Target>
  //             <Menu.Dropdown>
  //               <Menu.Item
  //                 leftSection={<IconReload size={14} />}
  //                 onClick={() => {
  //                   setModalAction("RELOAD");
  //                   toggle();
  //                 }}
  //               >
  //                 Reload
  //               </Menu.Item>
  //               <Menu.Divider />
  //               <Menu.Item
  //                 leftSection={<IconTrash size={14} />}
  //                 color="red"
  //                 onClick={() => {
  //                   setModalAction("DELETE");
  //                   toggle();
  //                 }}
  //               >
  //                 Delete
  //               </Menu.Item>
  //             </Menu.Dropdown>
  //           </Menu>
  //         </Group>
  //       </Card.Section>
  //       <Card.Section>
  //         {/* <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" /> */}
  //         <Image h={150} src="/cityinmotion_giftcard.png" alt="Aladun City in motion gift card" />
  //       </Card.Section>
  //       {/* <Card.Section p="xs">
  //         <Group justify="space-between">
  //           <Button size="compact-md">Reload</Button>
  //         </Group>
  //       </Card.Section> */}
  //     </Card>
  //     <Modal.Root opened={opened} onClose={close}>
  //       <Modal.Content>
  //         <Modal.Header>
  //           {!canDeleteCard ? <>Oops!</> : <>Are you sure?</>}
  //         </Modal.Header>
  //         <Modal.Body>
  //           {modalAction === "RELOAD" && <ReloadCardContent />}
  //           {modalAction === "DELETE" && <DeleteCardContent />}
  //         </Modal.Body>
  //       </Modal.Content>
  //     </Modal.Root>
  //     {/* <Drawer opened={drawerOpened} onClose={closeDrawer}>
  //       Drawer
  //     </Drawer> */}
  //   </>
  // );
}