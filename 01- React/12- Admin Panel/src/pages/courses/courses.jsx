import { useLoaderData, Await } from "react-router-dom";
import { httpInterceptedService } from "@core/http-service";
import CourseList from "@features/courses/components/course-list";
import { Suspense } from "react";
import "./courses.css";

const Courses = () => {
  const { courses } = useLoaderData();
  return (
    <div className="courses-wrapper">
      <button>افزودن دوره‌ی جدید</button>
      <div className="grid-container">
        <Suspense fallback={<p>در حال دریافت اطلاعات</p>}>
          <Await
            resolve={courses}
            children={(resolvedCourses) => (
              <CourseList list={resolvedCourses.data}></CourseList>
            )}
          ></Await>
        </Suspense>
      </div>
    </div>
  );
};

export const coursesLoader = async () => {
  const courses = httpInterceptedService.get("/Course/list");
  return {
    courses,
  };
};

export default Courses;

// Await
// Used to render promise values with automatic error handling.
// Await expects to be renderd inside of a <Suspense>
// <Suspense fallback={<ReviewsSkeleton />}>
