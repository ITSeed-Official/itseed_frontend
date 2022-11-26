import type { GetStaticProps } from 'next';

import { getSeos } from 'api/seos';
import { getCourses } from 'api/courses';
import { getVisitations } from 'api/visitations';
import { DEFAULT_REVALIDATE } from 'util/const';

import Plan from 'components/templates/Plan';
import PageMeta from 'components/atoms/PageMeta';

export const getStaticProps: GetStaticProps = async () => {
  const [meta, courses, visitations] = await Promise.all([getSeos('plan'), getCourses(), getVisitations()]);

  return {
    props: {
      meta,
      courses,
      visitations,
    },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(Plan);
