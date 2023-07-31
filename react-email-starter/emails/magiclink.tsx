import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface RaycastMagicLinkEmailProps {
    magicLink?: string;
  }
  
  export const RaycastMagicLinkEmail = ({
    magicLink = 'https://sinisaandrijevic.com',
  }: RaycastMagicLinkEmailProps) => (
    <Html>
      <Head />
      <Preview>Log in with this magic link.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://sinisaandrijevic.com/assets/img/profile.jpg`}
            width={70}
            height={70}
            alt="Raycast"
            style={{ borderRadius: "50%", marginTop: "3rem"}}
          />
          <Heading style={heading}>Your magic link 🪄</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={magicLink}>
                Click here to sign in
              </Link>
            </Text>
            <Text style={paragraph}>
              If you didn't request this, please ignore this email.
            </Text>
          </Section>
          <Text style={paragraph}>
            Best regards,
            <br />Sinisa Andrijevic
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Doofenshmirtz Evil Inc.</Text>
          <Text style={footer}>
            2023 Jumeirah Beach Residence, Dubai - UAE
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default RaycastMagicLinkEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 25px 48px',
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
  };
  
  const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '48px',
  };
  
  const body = {
    margin: '24px 0',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const link = {
    color: '#FF6363',
  };
  
  const hr = {
    borderColor: '#dddddd',
    marginTop: '48px',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginLeft: '4px',
  };
  