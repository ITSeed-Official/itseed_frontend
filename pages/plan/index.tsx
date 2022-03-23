import type { GetStaticProps } from 'next';

import { getSeos } from 'api/seos';
import { getCourses } from 'api/courses';
import { getVisitations } from 'api/visitations';

import Plan from 'components/templates/Plan';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, courses, visitations] = await Promise.all([getSeos('seo'), getCourses(), getVisitations()]);

  return {
    props: {
      meta,
      courses,
      visitations,
    },
    revalidate: 1,
  };
};

export default PageMeta(Plan);
