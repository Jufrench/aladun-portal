import { useState } from "react";
import { Button, Group, Modal, Stack, Text, Title } from "@mantine/core";
import { IconLogin2 } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import LoginSignupTabs from "../components/login/LoginSignupTabs";
import BuyGiftCardModalContent from "../components/landingPage/BuyGiftCardModalContent";
import { notifications } from "@mantine/notifications";
import PricingCard from "../components/landingPage/PricingCard";

const giftCardOptions = [
  {
    discountedPrice: "80",
    giftCardValue: "100",
    cardDescription: "5 classes for $80",
    valueType: "Popular",
    bulletPoints: [
      "Most common",
      "First-timers",
      "Regular visitor",
      "For any class"
    ],
    ctaText: "Purchase"
  },
  {
    discountedPrice: "160",
    giftCardValue: "200",
    cardDescription: "10 classes for $160",
    valueType: "Best Value",
    bulletPoints: [
      "Best value",
      "Eager dancers",
      "Regular visitor",
      "For any class"
    ],
    ctaText: "Purchase"
  },
];

export type ModalActionType = "CHECKOUT" | "LOGIN";

export default function LandingPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalAction, setModalAction] = useState<ModalActionType | null>(null);
  const [cardOption, setCardOption] = useState<Record<string, string>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleButtonIsLoading = () => setIsLoading(true);

  console.log('do you need the directory /api/customers?')

  function handleSetCardOption(cardOptionParam: Record<string, string>) {
    setCardOption(cardOptionParam);
  }

  function handleOpenModal(action: ModalActionType) {
    setModalAction(action);
    open();
  }

  async function handlePurchaseCard(params: {
    firstName: string,
    lastName: string
    email: string,
    phone: string,
  }) {
    try {
      if (cardOption) {
        const response = await fetch("/api/giftcards/purchase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            giftCardValue: cardOption.giftCardValue,
            discountedPrice: cardOption.discountedPrice,
            cardDescription: cardOption.cardDescription,
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            phone: params.phone,
          })
        });

        const data = await response.json();

        if (!data.success) {
          notifications.show({
            title: `Error: Checkout Link`,
            message: "Could not generate checkout link. Try again in a few seconds",
            color: "yellow",
          });
        } else {
          const parsedData = JSON.parse(data.paymentLink);
          window.open(parsedData.url, '_blank', 'noopener,noreferrer');
        }
      } else {
        notifications.show({
          title: `Error: Class Card`,
          message: "A card option must be selected",
          color: "yellow",
        });
      }
      // return JSON.parse(data.paymentLink);
    } catch(error) {
      console.error('ERROR:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCheckout(params: {
    firstName: string,
    lastName: string
    email: string,
    phone: string,
  }) {
    if (cardOption) {
      await handlePurchaseCard(params);
    }
  }

  return (
    <>
      <Stack align="center">
        <img width="150" src="/aladun_afrolatin_white.png" alt="Aladun logo in white" />
        <Button
          mt="xs"
          variant="subtle"
          color="ivory"
          size="sm"
          onClick={() => handleOpenModal("LOGIN")}
          leftSection={<IconLogin2 />}
        >
          Log in/Create Account
        </Button>
      </Stack>
      <Stack gap="md" mt="lg">
        <Stack gap={0}>
          <Title order={3}>Choose a Class Package</Title>
          <Text>Join the community!</Text>
        </Stack>
        <Group justify="space-around">
          {giftCardOptions.map((option: Record<string, any>) => {
            return (
              <PricingCard
                key={option.cardDescription}
                cardOption={option}
                onOpenModal={handleOpenModal}
                onSelectCardOption={handleSetCardOption} />
            );
          })}
        </Group>
      </Stack>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              {modalAction === "LOGIN" &&
                <>Login/Signup</>
              }
              {modalAction === "CHECKOUT" &&
                <>Checkout</>
              }
            </Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            {modalAction === "LOGIN" &&
              <LoginSignupTabs />
            }
            {modalAction === "CHECKOUT" &&
              <BuyGiftCardModalContent
                isLoading={isLoading}
                onButtonLoading={handleButtonIsLoading}
                onCheckout={handleCheckout}
              />
            }
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}