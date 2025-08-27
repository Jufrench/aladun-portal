import { Stack } from "@mantine/core";
import CardItem from "./CardItem";

interface ClassCardsProps {
  allCards: any[] | undefined;
}

export default function ClassCards(props: ClassCardsProps) {

  return ( 
    <Stack>
      {props.allCards && props.allCards.map((item) => {
        // console.log('%citem:', 'color:tomato', item);
        return <CardItem key={item.id} cardItem={item}  />
      })}
    </Stack>
  )
}