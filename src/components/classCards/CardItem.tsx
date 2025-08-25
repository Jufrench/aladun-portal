import { Button, Card, Group, Image, Text } from '@mantine/core';

interface CardItemProps {
  cardItem: any;
}

export default function CardItem(props: CardItemProps) {
  return (
    <Card withBorder shadow="sm">
      <Card.Section withBorder p="xs">
        <Text>
        {props.cardItem.gan}
        </Text>
      </Card.Section>
      <Card.Section>
        <Image h={100} src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>
      <Card.Section p="xs">
        <Group justify="space-between">
          <Button size="compact-md">Reload</Button>
          <Button size="compact-md">Trash</Button>
        </Group>
      </Card.Section>
    </Card>
  );
}