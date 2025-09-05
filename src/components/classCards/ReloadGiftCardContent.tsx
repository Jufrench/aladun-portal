import { Button, Divider, Group, Radio, RadioIndicator, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

const reloadOptions = [
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

export default function ReloadGiftCardContent() {
  const [amount, setAmount] = useState<string | null>(null);

  async function createGiftCardOrder() {
    try {
      const response = await fetch(`/api/orders?amount=${amount}`);
      const data = await response.json();

      if (data.success) {
        console.log('heeey!')
      }
    } catch(error) {
      console.error('ERROR:', error);
    }
  }

  const cards = reloadOptions.map(item => {
    return (
      <Radio.Card radius="md" value={item.amountValue} key={item.amountValue} p="sm">
        <Group>
          <RadioIndicator />
          <div>
            <Title order={5}>${item.amountLabel}</Title>
            <Text>{item.description}</Text>
          </div>
        </Group>
      </Radio.Card>
    );
  });

  console.log('//////> amount', amount)

  return (
    <Stack>
      <Title>Select an amount</Title>
      <Radio.Group value={amount} onChange={setAmount}>
        <Stack>
          {cards}
        </Stack>
      </Radio.Group>
      <Divider />
      <Button
        onClick={createGiftCardOrder}
      >Send</Button>
    </Stack>
  );
}