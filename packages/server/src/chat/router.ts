import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

import { ChatData } from 'chat-type';

const chatData: Array<ChatData> = [
  {
    content: '7318c522-c7b9-4ce7-a0c0-a27ac9c7cc19',
    isSender: false,
    fullDate: 'May 15, 2023 9:59 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '0c563b66-d1ad-4fea-834b-42a11e037d68',
    isSender: true,
    fullDate: 'May 15, 2023 10:00 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '618fc6b1-4b2a-4a7a-acd5-4458d67fa217',
    isSender: true,
    fullDate: 'May 15, 2023 10:01 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '21680e26-37c1-4aaf-a722-ac5ba4247977',
    isSender: true,
    fullDate: 'May 15, 2023 10:02 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: 'e7846a36-56bc-400f-a98c-75d8ea0b31ab',
    isSender: true,
    fullDate: 'May 15, 2023 10:03 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '115fecaf-03de-4f19-945a-96bba008e648',
    isSender: true,
    fullDate: 'May 15, 2023 10:04 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: 'ca75c530-69fa-4b88-b176-7b57883dc7ee',
    isSender: true,
    fullDate: 'May 15, 2023 10:05 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: 'e7932206-252d-4cc6-803c-59c23b9c4cf4',
    isSender: false,
    fullDate: 'May 15, 2023 10:06 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: 'e6a4cb75-0682-4cdf-8344-25f93900810d',
    isSender: false,
    fullDate: 'May 15, 2023 10:07 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '440f78c5-9b6d-4db3-98a1-6fd6d4cfec6c',
    isSender: true,
    fullDate: 'May 15, 2023 10:08 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '22c9363e-6bf4-4c78-9c2f-e3c5a585bbdb',
    isSender: true,
    fullDate: 'May 15, 2023 10:09 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '3b258ab3-d520-484b-a407-5661eeb6d8bb',
    isSender: true,
    fullDate: 'May 15, 2023 10:10 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '7acf3c61-a7fb-4ead-ad4e-d3c93ab3017c',
    isSender: true,
    fullDate: 'May 15, 2023 10:11 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '9b9751cb-89e3-4d72-b5e1-029462f626de',
    isSender: true,
    fullDate: 'May 15, 2023 10:12 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '0f47c588-9e23-4244-b4af-5072d4037141',
    isSender: true,
    fullDate: 'May 15, 2023 10:13 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '5beea60c-d5e6-498b-9126-0d854d9d31f8',
    isSender: false,
    fullDate: 'May 15, 2023 10:14 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '9a615a53-91e4-4f64-9d49-1dbb0e7c2f3a',
    isSender: false,
    fullDate: 'May 15, 2023 10:15 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '7e477d72-f8a6-4044-b346-a485c9229b6a',
    isSender: true,
    fullDate: 'May 15, 2023 10:16 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: 'fcb34196-b718-47b9-9779-3817ffa8abf2',
    isSender: true,
    fullDate: 'May 15, 2023 10:17 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '74e61109-174f-488a-b8c3-5e65cfbaf724',
    isSender: true,
    fullDate: 'May 15, 2023 10:18 AM',
    milliSeconds: '1684112281000',
  },
  {
    content: '8a3d3065-76c8-44c3-911b-32785106979c',
    isSender: true,
    fullDate: 'May 15, 2023 10:19 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'ab553e42-dc83-4f2a-8c6d-c310908f413f',
    isSender: true,
    fullDate: 'May 15, 2023 10:20 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '28bd2319-fcaa-4ff6-b5ea-615ee33b2740',
    isSender: true,
    fullDate: 'May 15, 2023 10:21 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '61e38e71-9ae4-42e8-afea-a82519b9256f',
    isSender: false,
    fullDate: 'May 15, 2023 10:22 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'd402995e-b3af-40c9-a436-4459676854f9',
    isSender: false,
    fullDate: 'May 15, 2023 10:23 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '604fb824-bbca-4637-8e28-8bfb94d2f2e0',
    isSender: true,
    fullDate: 'May 15, 2023 10:24 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '8227818f-62d8-46b9-a54e-7b51c3560946',
    isSender: false,
    fullDate: 'May 15, 2023 10:25 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '2af98660-7495-402e-beb1-28cbef5b6c08',
    isSender: false,
    fullDate: 'May 15, 2023 10:26 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '46dffda8-3166-401a-b750-44f32a017821',
    isSender: true,
    fullDate: 'May 15, 2023 10:27 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '198d7cd6-a63c-445b-a939-d9648c0b90f4',
    isSender: true,
    fullDate: 'May 15, 2023 10:28 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'dc4e7417-454d-413c-9d5f-9fa0c7efa078',
    isSender: false,
    fullDate: 'May 15, 2023 10:29 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'e5a63dfa-916f-48f1-8ac9-a11724c067f9',
    isSender: false,
    fullDate: 'May 15, 2023 10:30 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'a30863bf-7c58-44e2-8d47-16f5f8bc1d6b',
    isSender: false,
    fullDate: 'May 15, 2023 10:31 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '9cfa469d-39bc-4213-8936-2250823ef797',
    isSender: true,
    fullDate: 'May 15, 2023 10:32 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'a6324f50-d28e-456e-a8ea-d719e2200134',
    isSender: true,
    fullDate: 'May 15, 2023 10:33 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: 'bf08f121-1f44-4f46-a780-b829237b1162',
    isSender: false,
    fullDate: 'May 15, 2023 10:34 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '5ea2541b-0c37-45ab-809d-4ca9ddc9afa1',
    isSender: false,
    fullDate: 'May 15, 2023 10:35 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '2b9a5905-6ca5-431e-a564-22bb57f3a023',
    isSender: true,
    fullDate: 'May 15, 2023 10:36 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '6c63afc4-886f-46f6-b026-b24202c5a1b4',
    isSender: false,
    fullDate: 'May 15, 2023 10:37 AM',
    milliSeconds: '1684113481000',
  },
  {
    content: '7fdd560f-31ce-4d0d-abfe-9635e9dd63de',
    isSender: true,
    fullDate: 'May 15, 2023 10:38 AM',
    milliSeconds: '1684113481000',
  },
];

export const chatRouter = router({
  getChatData: publicProcedure.query(() => {
    return chatData;
  }),
});
