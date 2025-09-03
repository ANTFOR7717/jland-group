// /lib/sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '64604ozn',
    dataset: 'production',
  useCdn: true,
});