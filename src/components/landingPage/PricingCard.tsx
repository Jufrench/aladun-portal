import { Button, Card, List, Space, Stack, Text, Title, useMantineTheme } from "@mantine/core";
// import { IconHandClick } from "@tabler/icons-react";
import type { ModalActionType } from "../../routes/LandingPage";

interface PricingCardProps {
  cardOption: Record<string, any>;
  onOpenModal: (action: ModalActionType) => void;
  onSelectCardOption: (cardOption: Record<string, any>) => void;
}

export default function PricingCard(props: PricingCardProps) {
  const theme = useMantineTheme();

  return (
    <Card
      key={props.cardOption.giftCardValue}
      padding="sm"
      withBorder
      shadow="xl"
      maw="50%"
      style={{
        border: `1px solid ${theme.colors.leaf[5]}`,
        background: theme.colors.leaf[9],
        flex: "1 1 40%",
        cursor: "pointer"
      }}
    >
      <Stack gap={0} align="flex-start">
        <Text>{props.cardOption.valueType}</Text>
        <Title c="white" order={1}>${props.cardOption.discountedPrice}</Title>
        <Text ta="left">{props.cardOption.cardDescription}</Text>
        <List ta="left" mt="xl">
          {props.cardOption.bulletPoints.map((point: string) => {
            return <List.Item c="white" key={point}>{point}</List.Item>;
          })}
        </List>
      </Stack>
      <Space h="md" />
      <Space h="xl" />
      <Button
        mt="auto"
        size="md"
        color="white"
        c="black"
        // leftSection={<IconHandClick />}
        onClick={async () => {
          props.onSelectCardOption(props.cardOption);
          props.onOpenModal("CHECKOUT");
        }}
      >
        {props.cardOption.ctaText}
        </Button>
    </Card>
  );
  // return (
  //   <Card padding="sm" withBorder shadow="xl" key={props.cardOption.giftCardValue}>
  //     <Group>
  //       <Title order={2}>${props.cardOption.discountedPrice}</Title>
  //       <Divider orientation="vertical" />
  //       <Text>{props.cardOption.cardDescription}</Text>
  //     </Group>
  //     <Divider mt="sm" mb="sm" />
  //     <Button
  //       size="md"
  //       color="leaf"
  //       leftSection={<IconHandClick />}
  //       onClick={async () => {
  //         props.onSelectCardOption(props.cardOption);
  //         props.onOpenModal("CHECKOUT");
  //       }}
  //     >
  //       Get 20% Off
  //       </Button>
  //   </Card>
  // );
}