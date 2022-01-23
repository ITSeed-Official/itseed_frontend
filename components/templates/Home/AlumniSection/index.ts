import dynamic from 'next/dynamic';

const AlumniSection = dynamic(() => import('./AlumniSection'), { ssr: false });

export default AlumniSection;
