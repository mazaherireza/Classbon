import {
  Link,
  useSubmit,
  useNavigation,
  useActionData,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { httpService } from "@core/http-service";
import "./register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const submitForm = useSubmit();

  const onSubmit = (data) => {
    const { confirmPassword, ...rest } = data;
    submitForm(rest, {
      method: "post",
    });
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const isSubmitionSuccessful = useActionData();
  const navigate = useNavigate();
  const routeError = useRouteError();

  useEffect(() => {
    if (isSubmitionSuccessful)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
  }, [isSubmitionSuccessful]);

  return (
    <div className="register-wrapper">
      <p>جهت استفاده از پلتفرم آموزش آنلاین کلاسبن ثبت‌نام کنید.</p>
      <p>
        قبلا ثبت‌نام کرده‌اید؟،
        <Link to="/login">وارد شوید</Link>.
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
        ></input>
        {errors.mobile && errors.mobile.type == "required" && (
          <p className="error-message">{errors.mobile?.message}</p>
        )}

        {errors.mobile &&
          (errors.mobile.type == "minLength" ||
            errors.mobile.type == "maxLength") && (
            <p className="error-message">موبایل باید یازده رقم باشد.</p>
          )}

        <label>رمز عبور</label>
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

        <label>تکرار رمزعبور</label>
        <input
          placeholder="تکرار رمزعبور"
          type="password"
          {...register("confirmPassword", {
            required: "تکرار رمزعبور الزامی است.",
            validate: (value) => {
              if (watch("password") !== value) {
                return "عدم تطابق با رمزعبور";
              }
            },
          })}
          className={`${errors.confirmPassword && "invalid"}`}
        ></input>

        {errors.confirmPassword &&
          errors.confirmPassword.type == "required" && (
            <p className="error-message">{errors.confirmPassword?.message}</p>
          )}

        {errors.confirmPassword &&
          errors.confirmPassword.type == "validate" && (
            <p className="error-message">{errors.confirmPassword?.message}</p>
          )}

        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "در حال انجام عملیات" : "ثبت‌نام"}
        </button>

        {isSubmitionSuccessful && (
          <p className="alert alert-success">عملیات با موفقیت انجام شد</p>
        )}
        {routeError && (
          <p className="alert alert-error"> {routeError?.message}</p>
        )}
      </form>
    </div>
  );
};
export default Register;

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  return response.status == 200;
};
