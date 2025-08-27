import { ActionIcon, Button, Card, Group, Image, Menu, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDotsVertical, IconReload, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

interface CardItemProps {
  cardItem: any;
}

// export enum ModalActionType {
//   RELOAD = "reload",
//   DELETE = "delete",
// }
type ModalActionType = "RELOAD" | "DELETE";

export default function CardItem(props: CardItemProps) {
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
            <Group gap={2}>
              <Text>Balance:</Text>
              <Text fw="bold">
              ${(props.cardItem.balanceMoney.amount / 100).toFixed(2)}
              </Text>
            </Group>
            <Menu>
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconDotsVertical />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconReload size={14} />}
                  onClick={() => {
                    setModalAction("RELOAD");
                    toggle();
                  }}
                >
                  Reload
                </Menu.Item>
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
          <Image h={100} src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
        </Card.Section>
        <Card.Section p="xs">
          <Group justify="space-between">
            <Button size="compact-md">Reload</Button>
          </Group>
        </Card.Section>
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
      {/* <Drawer opened={drawerOpened} onClose={closeDrawer}>
        Drawer
      </Drawer> */}
    </>
  );
}