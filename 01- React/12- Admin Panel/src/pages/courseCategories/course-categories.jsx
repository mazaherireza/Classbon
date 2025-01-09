import { httpInterceptedService } from "@core/http-service";
import { useLoaderData, Await } from "react-router-dom";
import { useState, Suspense } from "react";
import CategoryList from "@features/categories/components/categoryList/category-list";
import { useCategoryContext } from "@features/categories/components/categoryList/category-context";
import AddOrUpdateCategory from "@features/categories/components/add-or-update-category/add-or-update-category";
import "./course-categories.css";

const CourseCategories = () => {
  const { courseCategories } = useLoaderData();
  const [showAddCategory, setShowAddCategory] = useState(false);
  const { category } = useCategoryContext();
  return (
    <div className="course-categories-wrapper">
      <button onClick={() => setShowAddCategory(true)}>
        افزودن دسته‌بندی جدید
      </button>
      {(showAddCategory || category) && (
        <AddOrUpdateCategory
          setShowAddCategory={setShowAddCategory}
        ></AddOrUpdateCategory>
      )}
      <Suspense fallback={<p>در حال دریافت اطلاعات</p>}>
        <Await
          resolve={courseCategories}
          children={(resolvedCourseCategories) => (
            <CategoryList {...resolvedCourseCategories.data}></CategoryList>
          )}
        ></Await>
      </Suspense>
    </div>
  );
};

export const courseCategoriesLoader = async ({ request }) => {
  const page = new URL(request.url).searchParams.get("page") || 1;
  const PAGE_SIZE = 5;
  const courseCategories = httpInterceptedService.get(
    `/CourseCategory/sieve?page=${page}&pageSize=${PAGE_SIZE}`
  );
  return {
    courseCategories,
  };
};

export default CourseCategories;
