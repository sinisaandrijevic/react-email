import React from "react";
import { Body, Html, Head, Container, Tailwind, Text, Button, Img, Heading } from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head>
        <Tailwind>
          <Body className="bg-[#121929] my-12 mx-auto font-sans">
            <Container className="p-8 rounded-lg mx-auto shadow-lg text-center bg-[#1e2231]  text-white">
              <Img className="mx-auto w-24 rounded-full" src="https://sinisaandrijevic.com/assets/img/profile.jpg"></Img>
              <Heading className="text-xl pt-4 text-center">Hello there!</Heading>
              <Text className="text-lg font-medium">Thanks for joining me on this journey, please check out my website down below.</Text>
              <Button className="bg-purple-700 font-bold px-2 py-4 rounded-md  text-white" href="https://sinisaandrijevic.com">Check out my website!</Button>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  )
}

export default Email