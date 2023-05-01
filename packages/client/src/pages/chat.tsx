import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { fetchClient } from '@/utils';

interface Props {
  content: string;
}

export default function Home({ content }: Props) {
  const [chatContent, setChatContent] = useState('');

  const onChangeChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatContent(e.target.value);
  };

  const onSendChat = (n: number, s: string, b: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(process.env.testKey);
    //
  };

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_SOCKET_SERVER);
    socket.onopen = () => {
      console.log('Connected');
      socket.send(
        JSON.stringify({
          event: 'events',
          data: 'open message',
        }),
      );
      socket.onmessage = ({ data }) => {
        console.log('123', data);
      };
    };
  }, []);

  return (
    <>
      <Head>
        <title>smdk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <input type="text" onChange={onChangeChat} />
        <button type="button">보내기</button>
        <div>{content}</div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await fetchClient.get<Props>('/test');

  return {
    props: {
      content: data.content,
    },
  };
};