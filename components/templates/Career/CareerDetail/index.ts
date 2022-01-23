import dynamic from 'next/dynamic';

const CareerDetail = dynamic(() => import('./CareerDetail'), {
  ssr: false,
});

export default CareerDetail;
