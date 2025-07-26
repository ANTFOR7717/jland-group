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
    publishDate: z.date().optional()
  })
});

export const collections = {
  services: servicesCollection,
  testimonials: testimonialsCollection,
  pages: pagesCollection
};