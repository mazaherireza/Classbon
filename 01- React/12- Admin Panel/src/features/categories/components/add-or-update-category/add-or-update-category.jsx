import { useForm } from "react-hook-form";
import { httpInterceptedService } from "@core/http-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCategoryContext } from "../categoryList/category-context";
import { useEffect } from "react";
import "./add-or-update-category.css";

const AddOrUpdateCategory = ({ setShowAddCategory }) => {
  const navigate = useNavigate();
  const { category, setCategory } = useCategoryContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (category) {
      const { id, name } = category;
      setValue("name", name);
      setValue("id", id);
    }
  }, [category]);

  const onSubmit = async (data) => {
    setShowAddCategory(false);
    const response = httpInterceptedService.post("/CourseCategory", data);
    toast.promise(
      response,
      {
        pending: "در حال انجام عملیات ...",
        success: {
          render() {
            const { pathname, search } = new URL(location.href);
            navigate(pathname + search);
            if (category) setCategory(null);
            return "عملیات با موفقیت انجام شد.";
          },
        },
        error: {
          render({ data }) {
            if (data.response.status == 400) return data.response.data.code;
            else return "خطا در اجرای عملیات";
          },
        },
      },
      {
        position: "bottom-left",
      }
    );
  };

  const onClose = () => {
    setShowAddCategory(false);
    if (category) setCategory(null);
  };

  return (
    <div className="add-or-update-category-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>نام</label>
        <input
          type="text"
          className={`${errors.name && "invalid"}`}
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && errors.name.type == "required" && (
          <p className="alert alert-error">نام الزامی‌ست.</p>
        )}
        <div className="actions">
          <button onClick={onClose}>بستن</button>
          <button type="submit">ثبت تغییرات</button>
        </div>
      </form>
    </div>
  );
};

export default AddOrUpdateCategory;