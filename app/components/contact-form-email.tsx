import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Heading
} from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

// Define the type for props
type ContactFormEmailProps = {
  sender: string;
  message: string;
};

// ContactFormEmail component
const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ sender, message }) => (
  <Html>
    <Head />
    <Preview>Got a message from {sender}</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight text-sm">
              Check message below:
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender&apos;s email is: {sender}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactFormEmail;
