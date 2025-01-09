import { useForm } from "react-hook-form";
import {
  Link,
  useSubmit,
  useNavigation,
  useActionData,
  useRouteError,
  redirect,
} from "react-router-dom";
import { httpService } from "@core/http-service";
import "./login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = useSubmit();
  const onSubmit = (data) => {
    submitForm(data, {
      method: "post",
    });
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const isSubmitionSuccessful = useActionData();
  const routeError = useRouteError();

  return (
    <div className="login-wrapper">
      <p>جهت ورود لازم است از طریق موبایل و رمزعبور خود اقدام کنید.</p>
      <p>
        قبلا ثبت نام نکرده‌اید؟،
        <Link to="/register">ثبت نام کنید</Link>.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>موبایل</label>
        <input
          placeholder="موبایل"
          type="text"
          autoFocus
          {...register("mobile", {
            required: "موبایل الزامی است.",
            minLength: 11,
            maxLength: 11,
          })}
          className={`${errors.mobile && "invalid"}`}
        />

        {errors.mobile && errors.mobile.type == "required" && (
          <p className="error-message">{errors.mobile?.message}</p>
        )}

        <label>رمزعبور</label>
        <input
          placeholder="رمزعبور"
          type="password"
          {...register("password", {
            required: "رمزعبور الزامی است.",
          })}
          className={`${errors.password && "invalid"}`}
        />

        {errors.password && errors.password.type == "required" && (
          <p className="error-message">{errors.password?.message}</p>
        )}

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "در حال انجام عملیات" : " وارد شوید"}
        </button>

        {isSubmitionSuccessful && (
          <p className="alert alert-success">عملیات با موفقیت انجام شد.</p>
        )}

        {routeError && (
          <p className="alert alert-error">{routeError?.message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users/login", data);
  if (response.status == 200) {
    localStorage.setItem("token", response?.data.token);
    return redirect("/");
  }
};
