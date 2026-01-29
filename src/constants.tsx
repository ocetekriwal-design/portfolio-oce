
import React from 'react';

export const COLORS = {
  black: '#000000',
  neonPink: '#FF007F',
  white: '#FFFFFF',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'NEO-VIRTUAL IDENTITY',
    tags: ['Branding', 'Typography'],
    description: 'A comprehensive brand overhaul for a decentralized digital collective, utilizing custom variable fonts and glitched textures.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'CYBER-GRID INTERFACE',
    tags: ['UI/UX', 'Interaction'],
    description: 'Experimental dashboard design for a future-facing AI data visualization tool, emphasizing high contrast and rapid navigation.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'SYNTHETIC SPECIMEN',
    tags: ['AI-Integrated', 'Typography'],
    description: 'A typeface generated through neural networks, blending classical serif proportions with algorithmic artifacts.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'KINETIC ECHOES',
    tags: ['Motion Graphics', 'Branding'],
    description: 'Live visuals and promotional material for the 2024 Electronic Communication Summit.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PIXEL_SYMBOLS = {
  star: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M16 0h8v8h8v8h8v8h-8v8h-8v8h-8v-8H8v-8H0v-8h8v-8h8V0z" />
    </svg>
  ),
  globe: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M12 0h16v4h4v4h4v4h4v16h-4v4h-4v4h-4v4H12v-4H8v-4H4v-4H0V12h4V8h4V4h4V0zm4 4v32h8V4h-8zM4 16v8h32v-8H4z" />
    </svg>
  ),
  crosshair: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M16 0h8v16h16v8H24v16h-8V24H0v-8h16V0zM20 16a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  ),
  arrow: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M24 0h16v16h-8V8h-8V0zM16 16V8h8v8h-8zM8 24V16h8v8H8zM0 32V24h8v8H0z" />
    </svg>
  ),
  flower: (className?: string) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className={className}>
      <path d="M12 4h16v8h8v16h-8v8H12v-8H4V12h8V4zm8 12h4v8h-4v-8z" />
    </svg>
  )
};
