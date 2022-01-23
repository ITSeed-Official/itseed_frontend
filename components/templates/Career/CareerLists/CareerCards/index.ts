import dynamic from 'next/dynamic';

const CareerCards = dynamic(() => import('./CareerCards'), {
  ssr: false,
});

export default CareerCards;
