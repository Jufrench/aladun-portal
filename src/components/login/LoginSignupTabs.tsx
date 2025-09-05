import { Tabs } from "@mantine/core";
import { useState } from "react";
import LoginContent from "./LoginContent";
import SignupContent from "./SignupContent";

export default function LoginSignupTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("signup");

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="signup">Sign Up</Tabs.Tab>
        <Tabs.Tab value="login">Log In</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="signup">
        <SignupContent />
      </Tabs.Panel>
      <Tabs.Panel value="login">
        <LoginContent />
      </Tabs.Panel>
    </Tabs>
  );
}