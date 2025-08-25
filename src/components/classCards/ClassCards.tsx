import CardItem from "./CardItem";

interface ClassCardsProps {
  allCards: any[] | undefined;
}

export default function ClassCards(props: ClassCardsProps) {
  return ( 
    <>
      {props.allCards && props.allCards.map((item) => {
        // console.log('%citem:', 'color:tomato', item);
        return <CardItem cardItem={item}  />
      })}
    </>
  )
}