import CourseCard from "./courseCard/course-card";

const CourseList = ({ list }) => {
  return (
    <>
      {list.length !== 0 &&
        list.map((course) => (
          <CourseCard key={course.id} {...course}></CourseCard>
        ))}
    </>
  );
};

export default CourseList;
