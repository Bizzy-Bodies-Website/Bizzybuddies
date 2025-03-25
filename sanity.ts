import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = createClient({
  projectId: 'u51tggwl', // Replace with your actual project ID
  dataset: 'production', // Change if needed
  useCdn: true, // `true` for faster responses
  apiVersion: '2025-03-24', // Keep this up-to-date
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export default client;

