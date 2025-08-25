import { Card } from '@mantine/core';

interface CardItemProps {
  cardItem: any;
}

export default function CardItem(props: CardItemProps) {
  return (
    <Card withBorder shadow="sm">
      <Card.Section>
        {props.cardItem.id}
      </Card.Section>
    </Card>
  );
}