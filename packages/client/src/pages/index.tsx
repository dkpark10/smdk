import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { fetchClient } from '@/utils';

interface Props {
  content: string;
}

export default function Home({ content }: Props) {
  const [chatContent, setChatContent] = useState('');

  const onChangeChat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatContent(e.target.value);
  };

  const onSendChat = () => {
    //
  };

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
        <button type="button" onClick={onSendChat}>
          보내기
        </button>
        <div>{content}</div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await fetchClient.get<Props>('/test');
  // const result = await fetch(`${process.env.BASE_URL}/test`);
  // const data = result.json() as unknown as Props;

  return {
    props: {
      content: data.content,
    },
  };
};