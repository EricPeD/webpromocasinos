export interface SocialLink {
  id: string;
  url: string;
  color: string;
  label: { es: string; en: string };
}

export const socialLinks: SocialLink[] = [
  {
    id: 'discord',
    url: 'https://discord.gg/Em9C4zEkAq',
    color: '#5865F2',
    label: {
      es: 'Discord',
      en: 'Discord',
    },
  },
  {
    id: 'kick',
    url: 'https://kick.com/triskkkis',
    color: '#53FC18',
    label: {
      es: 'Kick',
      en: 'Kick',
    },
  },
  {
    id: 'youtube-trisgambling',
    url: 'https://www.youtube.com/channel/UCFoIpXDWYAwlqqaNjoihlAg',
    color: '#FF0033',
    label: {
      es: 'YouTube TrisGambling',
      en: 'YouTube TrisGambling',
    },
  },
  {
    id: 'youtube-triskkkis',
    url: 'https://www.youtube.com/channel/UC-HyZX5K2LvvbXO1JlS13IA',
    color: '#FF0033',
    label: {
      es: 'YouTube triskkkis',
      en: 'YouTube triskkkis',
    },
  },
];