import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { getCourseDetail, CourseDetailType, getCourses } from 'api/courses';
import { appPath } from 'util/routing.config';
import { DEFAULT_REVALIDATE } from 'util/const';

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
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [detail, list] = await Promise.all([getCourseDetail(params!.courseId as string), getCourses()]);

  if (Object.keys(detail).length === 0) {
    return {
      notFound: true,
    };
  }

  const metaTitle = `${detail.title}|by ${detail.lecturer}|資訊種子培訓計畫|講座課程`;
  const metaDescription = `${detail.experience
    .substring(0, 160)
    .replace(/[\r\n#]+/g, '')
    .trim()}...`;

  const meta = {
    title: metaTitle,
    description: metaDescription,
    og_title: metaTitle,
    og_description: metaDescription,
    og_url: `${appPath.courses}/${detail.id}`,
    og_image: detail.image.url,
  };

  return {
    props: { detail, list, meta },
    revalidate: DEFAULT_REVALIDATE,
  };
};

export default PageMeta(CourseInfo);
