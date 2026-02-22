import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    decorativeImage: z.string().optional(),
    services: z.array(z.object({
      image: z.string(),
      imageAlt: z.string(),
      title: z.string(),
      description: z.string(),
      buttonText: z.string(),
      buttonHref: z.string()
    }))
  })
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    featured: z.object({
      name: z.string(),
      role: z.string(),
      company: z.string(),
      image: z.string(),
      quote: z.string(),
      rating: z.number()
    }),
    reviews: z.array(z.object({
      name: z.string(),
      role: z.string(),
      company: z.string(),
      image: z.string(),
      quote: z.string(),
      rating: z.number()
    }))
  })
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    badge: z.string().optional(),
    hero_heading: z.string().optional(),
    hero_heading_accent: z.string().optional(),
    hero_subtitle: z.string().optional(),
    cta_primary_text: z.string().optional(),
    cta_primary_href: z.string().optional(),
    cta_secondary_text: z.string().optional(),
    cta_secondary_href: z.string().optional(),
    trust_indicators: z.array(z.string()).optional(),
  }).passthrough()
});

const dataCollection = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough()
});

export const collections = {
  services: servicesCollection,
  testimonials: testimonialsCollection,
  pages: pagesCollection,
  data: dataCollection
};