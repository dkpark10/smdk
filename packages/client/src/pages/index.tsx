import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Center, Input, Stack, Box, HStack, Heading, Button } from '@chakra-ui/react';
import { ErrorBoundary } from '@/components/error';
import { Styles } from '@/components/common';

const Chat = dynamic(() => import('@/components/chat'));

export default function Index() {
  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = () => {
    setIsLogin(true);
  };

  return (
    <>
      <Head>
        <title>smdk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="fonts/NotoSansKR-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="fonts/Inter-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      {!isLogin ? (
        <main>
          <Box w="100vw" h="100vh">
            <Center h="22vh">
              <HStack>
                <Styles.Heart />
                <Heading as="h1" size="2xl">
                  smdk
                </Heading>
              </HStack>
            </Center>
            <form onSubmit={onSubmit}>
              <Center>
                <Stack spacing={3} w="80%">
                  <Input variant="flushed" placeholder="아이디" id="id" focusBorderColor="primary" />
                  <Input
                    variant="flushed"
                    placeholder="비밀번호"
                    id="pwd"
                    type="password"
                    focusBorderColor="primary"
                    autoComplete="off"
                  />
                  <Box>
                    <Button type="submit" mt={7} w="100%">
                      로그인
                    </Button>
                  </Box>
                </Stack>
              </Center>
            </form>
          </Box>
        </main>
      ) : (
        <ErrorBoundary fallback={<h1>에러 바운더리</h1>}>
          <Chat />
        </ErrorBoundary>
      )}
    </>
  );
}
