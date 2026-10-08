import { getCollection, type CollectionEntry } from 'astro:content';

export type ResourceEntry = CollectionEntry<'resources'>;

export async function getResources() {
  const entries = await getCollection('resources', ({ data }) => data.draft !== true);
  return entries.sort((a, b) => a.data.order - b.data.order || b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
