import { Stack } from "@mantine/core";
import GiftCard from "./GiftCard";
import type { ModalAction } from "../../routes/UserHomePage";

interface ClassCardsProps {
  allCards: any[] | undefined;
  onOpenModal?: (action: ModalAction) => void;
}

export default function ClassCards(props: ClassCardsProps) {

  return (
    <Stack>
      {props.allCards && props.allCards.map((item) => {
        return (
          <GiftCard
            key={item.id}
            giftCard={item}
            onOpenModal={(action: ModalAction) => {
              props.onOpenModal && props.onOpenModal(action);
            }
            }
          />
        );
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