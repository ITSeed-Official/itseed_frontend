import type { NextPage, GetStaticProps } from 'next';

import { getSeos } from 'api/seos';
import { getCourses, CourseDetailType } from 'api/courses';

import CoursesLists from 'components/templates/Courses/CoursesLists';
import PageMeta from 'components/atoms/PageMeta';

const Courses: NextPage<{ courses: CourseDetailType[] }> = ({ courses }) => {
  return <CoursesLists courses={courses} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const [meta, courses] = await Promise.all([getSeos('courses'), getCourses()]);

  return {
    props: {
      meta,
      courses,
    },
    revalidate: 1,
  };
};

export default PageMeta(Courses);
