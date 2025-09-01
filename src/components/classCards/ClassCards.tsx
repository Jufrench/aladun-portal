import { Stack } from "@mantine/core";
import GiftCard from "./GiftCard";

interface ClassCardsProps {
  allCards: any[] | undefined;
}

export default function ClassCards(props: ClassCardsProps) {

  return (
    <Stack>
      {props.allCards && props.allCards.map((item) => {
        return <GiftCard key={item.id} giftCard={item}  />
      })}
    </Stack>
  );

  // return (
  //   <>
  //     <Stack>
  //       {props.allCards && props.allCards.map((item) => {
  //         return <CardItem key={item.id} cardItem={item}  />
  //       })}
  //     </Stack>
  //   </>
  // );
}