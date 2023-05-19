import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

import chatMockData from '../../../../mock/mock_assets/chat_mock.json';

export const chatRouter = router({
  getChatData: publicProcedure.query(() => chatMockData),
});
