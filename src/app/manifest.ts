import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kristina Eck Real Estate Team',
    short_name: 'Kristina Eck RE',
    description: 'Your trusted partner in finding the perfect home. Expert real estate services for buyers and sellers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fef9f5',
    theme_color: '#a67c68',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
