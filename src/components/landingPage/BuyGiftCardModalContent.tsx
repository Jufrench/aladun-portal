import { Button, Stack, TextInput } from "@mantine/core";
import { IconCreditCardPay, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

interface BuyGiftCardModalContentProps {
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
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>("");
  
  return (
    <Stack>
      <TextInput
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        label="First Name"
        placeholder="First Name"
      />
      <TextInput
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        label="Last Name"
        placeholder="Last Name"
      />
      <TextInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        label="Email"
        placeholder="Email"
      />
      <TextInput
        value={phone}
        onChange={e => setPhone(e.target.value)}
        label="Phone"
        placeholder="Phone Number"
        leftSection={<IconPlus size={25} />}
      />
      <Button
        mt="sm"
        loading={props.isLoading}
        onClick={() => {
          if (firstName && lastName && email && phone) {
            props.onCheckout({ firstName, lastName, email, phone });
            props.onButtonLoading && props.onButtonLoading();
          }
        }}
        leftSection={<IconCreditCardPay />}
      >
        Checkout
      </Button>
    </Stack>
  );
}