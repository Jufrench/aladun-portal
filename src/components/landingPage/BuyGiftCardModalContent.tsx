import { Anchor, Button, Stack, TextInput } from "@mantine/core";
import { IconCreditCardPay } from "@tabler/icons-react";
import { useState } from "react";

interface BuyGiftCardModalContentProps {
  checkoutUrl: string | undefined;
  isLoading?: boolean;
  onButtonLoading?: () => void;
  onCheckout: (params: {
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  }) => void;
}

export default function BuyGiftCardModalContent(props: BuyGiftCardModalContentProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  
  return (
    <Stack>
      <TextInput
        withAsterisk
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        label="First Name"
        placeholder="First Name"
      />
      <TextInput
        withAsterisk
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        label="Last Name"
        placeholder="Last Name"
      />
      <TextInput
        withAsterisk
        value={email}
        onChange={e => setEmail(e.target.value)}
        label="Email"
        placeholder="Email"
        prefix="hi"
      />
      <TextInput
        withAsterisk
        value={phone}
        onChange={e => {
          let value = e.target.value.replace(/\D/g, "");
          setPhone(value);
        }}
        label="Phone"
        placeholder="Phone Number"
        leftSection={<>+1</>}
      />
      <Button
        mt="sm"
        loading={props.isLoading}
        onClick={() => {
          if (firstName && lastName && email && phone) {
            props.onCheckout({ firstName, lastName, email, phone: ("+1" + phone) });
            props.onButtonLoading && props.onButtonLoading();
          }
        }}
        leftSection={<IconCreditCardPay />}
      >
        Checkout
      </Button>
      {props.checkoutUrl &&
        <Anchor
          href={props.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete Purchase
        </Anchor>
      }
    </Stack>
  );
}