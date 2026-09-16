export interface Casino {
  id: string;
  name: string;
  logo: string;
  bonus: { es: string; en: string };
  description: { es: string; en: string };
  referralUrl: string;
  rating: number;
  flags: { es: string[]; en: string[] };
}

const ABETPANDA_REFERRAL = 'https://betpandacasino.io/?referral=3GGGX4X&type=registration&modal=user&isReferral=true';
const MELBET_REFERRAL = 'https://refpa3665.com/L?tag=d_5484838m_2170c_Trisss';

export const casinos: Casino[] = [
  {
    id: 'Betpanda',
    name: 'Bet Panda',
    logo: '🐼',
    bonus: {
      es: 'Bono de bienvenida hasta 100% + giros gratis',
      en: 'Welcome bonus up to 100% + free spins',
    },
    description: {
      es: 'Deportes, casino en vivo y slots con promociones diarias.',
      en: 'Sports, live casino and slots with daily promotions.',
    },
    referralUrl: ABETPANDA_REFERRAL,
    rating: 4.8,
    flags: {
      es: ['Apuestas deportivas', 'Casino en vivo', 'Bono de bienvenida'],
      en: ['Sports betting', 'Live casino', 'Welcome bonus'],
    },
  },
  {
    id: 'Melbet',
    name: 'Melbet',
    logo: '🎰',
    bonus: {
      es: '200% de bono de depósito + 100 Free Spins',
      en: '200% deposit bonus + 100 Free Spins',
    },
    description: {
      es: 'Casino con licencia de Curazao, más de 6000 juegos de 100+ proveedores, casino en vivo, apuestas deportivas y app móvil.',
      en: 'Curaçao-licensed casino with 6000+ games from 100+ providers, live casino, sports betting and mobile app.',
    },
    referralUrl: MELBET_REFERRAL,
    rating: 4.5,
    flags: {
      es: ['Casino en vivo', 'Más de 6000 juegos', 'App móvil', 'Bono de bienvenida'],
      en: ['Live casino', '6000+ games', 'Mobile app', 'Welcome bonus'],
    },
  },
];
