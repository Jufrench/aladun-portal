import { ActionIcon, Button, Card, Group, Paper, Pill, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconBarcode, IconDotsVertical, IconReload } from "@tabler/icons-react";
import dayjs from "dayjs";

interface GiftCardProps {
  giftCard: any;
}

export default function GiftCard(props: GiftCardProps) {
  const theme = useMantineTheme();

  return (
    <Stack gap="xs">
      <Card withBorder shadow="sm">
        <Card.Section p="xs">
          <Paper p="xs" radius="md" withBorder>
            <Group justify="space-between">
              <Stack align="flex-start" gap={0}>
                <Title order={2}>
                  {`$${props.giftCard?.balanceMoney.amount}`}
                </Title>
                <Text size="sm">Balance</Text>
              </Stack>
            </Group>
          </Paper>
        </Card.Section>
        <Card.Section withBorder p="md">
          <Stack gap="xs" align="flex-start">
            <Stack gap={0} w="100%">
              <Group justify="space-between">
                <Group gap="xs">
                  <Text fw="bold">{props.giftCard.gan.slice(0, 4)}</Text>
                  <Text fw="bold">{props.giftCard.gan.slice(4, 8)}</Text>
                  <Text fw="bold">{props.giftCard.gan.slice(8, 12)}</Text>
                  <Text fw="bold">{props.giftCard.gan.slice(12, 16)}</Text>
                </Group>
                <Pill variant="outline" size="xs" c="white" fw="bold" bg={theme.colors.leaf[8]}>{props.giftCard.state}</Pill>
              </Group>
              <Group gap="xs"> 
                <Text size="sm">Created:</Text>
                <Text size="sm">{dayjs(props.giftCard.createdAt).format("MM-DD-YYYY")}</Text>
              </Group>
            </Stack>
          </Stack>
        </Card.Section>
        <Card.Section p="xs">
          <Group gap="xs">
            <Button leftSection={<IconReload />} style={{ flex: "1 0 auto" }}>
              Reload
            </Button>
            <Button variant="light" leftSection={<IconBarcode />}>
              Bar Code
            </Button>
            <ActionIcon variant="light" size="lg">
              <IconDotsVertical />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </Stack>
  )
}