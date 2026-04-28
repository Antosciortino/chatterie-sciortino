import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chats' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    sexe: z.enum(['mâle', 'femelle']),
    date_naissance: z.coerce.date(),
    couleur: z.string(),
    pedigree_loof: z.string().optional(),
    numero_icad: z.string().optional(),
    tests_sante: z.string().optional(),
    photo: image(),
    galerie: z.array(image()).default([]),
    ordre: z.number().default(0),
  }),
});

const portees = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portees' }),
  schema: ({ image }) => z.object({
    titre: z.string(),
    date_naissance: z.coerce.date(),
    pere: reference('chats'),
    mere: reference('chats'),
    numero_portee_loof: z.string(),
    icad_mere: z.string(),
    photo_couverture: image().optional(),
    chatons: z.array(z.object({
      nom: z.string(),
      sexe: z.enum(['mâle', 'femelle']),
      couleur: z.string(),
      statut: z.enum(['disponible', 'réservé', 'parti']),
      photos: z.array(image()).default([]),
      notes: z.string().optional(),
    })).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    titre: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { chats, portees, pages };
