import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main/main";
import Courses, { coursesLoader } from "./pages/courses/courses";
import CourseDetails, {
  courseDetailsLoader,
} from "./features/courses/components/courseDetails/course-details";
import CourseCategories, {
  courseCategoriesLoader,
} from "./pages/courseCategories/course-categories";
import CategoryProvider from "./features/categories/components/categoryList/category-context";
import IdentityLayout from "./layout/identity/identity/";
import Login, { loginAction } from "./features/identity/login/login";
import Register, {
  registerAction,
} from "./features/identity/register/register";
import NotFound from "./pages/notFound/not-found";
import UnhandledException from "./pages/unhandledException/unhandled-exception";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <UnhandledException />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),
        loader: courseCategoriesLoader,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: courseDetailsLoader,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
