import { useState } from "react";
import { Button, Card, Divider, Group, Modal, Radio, Stack, Text, Title } from "@mantine/core";
import { IconHandClick, IconLogin2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

const giftCardOptions = [
  {
    amountLabel: "80",
    amountValue: "100",
    description: "Get 5 classes for $80"
  },
  {
    amountLabel: "160",
    amountValue: "200",
    description: "Get 10 classes for $160"
  },
];

export default function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [amount, setAmount] = useState<string | null>(null);

  // const radioCards = giftCardOptions.map(item => {
  //   return (
  //     <Radio.Card radius="md" value={item.amountValue} key={item.amountValue} p="md">
  //       <Group>
  //         <RadioIndicator />
  //         <div>
  //           <Title order={5}>${item.amountLabel}</Title>
  //           <Text>{item.description}</Text>
  //         </div>
  //       </Group>
  //     </Radio.Card>
  //   );
  // });

  // const cardElements = giftCardOptions.map(item => {
  //   return (
  //     <Card padding="sm">
  //       <Group>
  //         <Stack align="flex-start" gap={0}>
  //           <Title order={2}>${item.amountLabel}</Title>
  //           <Text>{item.description}</Text>
  //         </Stack>
  //         {/* <Title order={2} fw="bold">20% OFF</Title> */}
  //       </Group>
  //       <Divider mt="sm" mb="sm" />
  //       <Stack>
  //         {/* <Title fw="bold">Save ${parseInt(item.amountValue) - parseInt(item.amountLabel)}</Title> */}
  //         <Title order={2} fw="bold">20% OFF</Title>
  //         <Button color="leaf">Get Package</Button>
  //       </Stack>
  //     </Card>
  //   );
  // });
  const cardElements = giftCardOptions.map(item => {
    return (
      <Card padding="sm" withBorder shadow="xl">
        <Group>
          <Title order={2}>${item.amountLabel}</Title>
          <Divider orientation="vertical" />
          <Text>{item.description}</Text>
        </Group>
        <Divider mt="sm" mb="sm" />
        <Button
          size="md"
          color="leaf"
          leftSection={<IconHandClick />}
        >
          Get 20% Off Package
          </Button>
      </Card>
    );
  });

  return (
    <>
      <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" />
      <Button
        mt="xs"
        variant="subtle"
        color="ivory"
        size="sm"
        onClick={open}
        leftSection={<IconLogin2 />}
      >
        Log in/Create Account
      </Button>
      <Stack mt="xl" gap="md">
        <Stack gap={0}>
          <Title td="underline" order={3}>Choose a Class Package</Title>
          <Text>Join the community!</Text>
        </Stack>
        <Radio.Group
          value={amount}
          onChange={setAmount}
        >
          <Stack>
            {cardElements}
          </Stack>
        </Radio.Group>
      </Stack>
      {/* <Divider mt="lg" mb="lg" /> */}
      <Modal opened={opened} onClose={close}>
        hello
      </Modal>
    </>
  );
}