export const pictures = [
  {
    name: 'dog',
    sources: [
      { media: 'xl', srcset: 'https://picsum.photos/id/237/1920/200' },
      { media: 'l', srcset: 'https://picsum.photos/id/237/1599/200' },
      { media: 'md', srcset: 'https://picsum.photos/id/237/1199/200' },
      { media: 'sm', srcset: 'https://picsum.photos/id/237/991/200' },
      { media: 'xs', srcset: 'https://picsum.photos/id/237/767/200' },
      { media: 'default', srcset: 'https://picsum.photos/id/237/575/200' }
    ],
    alt: 'dog',
    title: 'dog'
  },
  {
    name: 'skyscrapers',
    sources: [
      { media: 'xl', srcset: 'https://picsum.photos/id/238/1920/200' },
      { media: 'l', srcset: 'https://picsum.photos/id/238/1599/200' },
      { media: 'md', srcset: 'https://picsum.photos/id/238/1199/200' },
      { media: 'sm', srcset: 'https://picsum.photos/id/238/991/200' },
      { media: 'xs', srcset: 'https://picsum.photos/id/238/767/200' },
      { media: 'default', srcset: 'https://picsum.photos/id/238/575/200' }
    ],
    alt: 'skyscrapers',
    title: 'skyscrapers'
  }
];

export function getPicture(name) {
  return JSON.stringify(pictures.find((picture) => picture.name === name))
}
