import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getCourseDetail, CourseDetailType, getCourses } from 'api/courses';
import { appPath } from 'util/routing.config';

import CourseDetail from 'components/templates/Courses/CoursesDetail';
import PageMeta from 'components/atoms/PageMeta';

interface CourseInfoProperty {
  detail: CourseDetailType;
  list: CourseDetailType[];
}

const CourseInfo: NextPage<CourseInfoProperty> = ({ detail, list }) => {
  return <CourseDetail detail={detail} list={list} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await getCourses();
  const paramsList = list.map(({ id }) => ({ params: { courseId: id.toString() } }));

  return {
    paths: paramsList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [detail, list] = await Promise.all([getCourseDetail(params!.courseId as string), getCourses()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  const meta = {
    title: detail.title,
    description: detail.overview,
    og_title: detail.title,
    og_description: detail.overview,
    og_url: `${appPath.courses}/${detail.id}`,
    og_image: detail.image.url,
  };

  return {
    props: { detail, list, meta },
    revalidate: 1,
  };
};

export default PageMeta(CourseInfo);
