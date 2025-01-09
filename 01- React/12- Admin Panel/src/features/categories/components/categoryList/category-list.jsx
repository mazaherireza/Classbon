import CategoryCard from "./category-card";
import Pagination from "@components/pagination/pagination";
import Modal from "@components/modal/modal";
import { useState } from "react";
import { httpInterceptedService } from "@core/http-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./category-list.css";

const CategoryList = ({ data, totalRecords }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const handleOk = async () => {
    setShowDeleteModal(false);
    const response = httpInterceptedService.delete(
      `/CourseCategory/${categoryId}`
    );

    toast.promise(
      response,
      {
        pending: "در حال انجام عملیات ...",
        success: {
          render() {
            const { pathname, search } = new URL(location.href);
            navigate(pathname + search);
            return "عملیات با موفقیت انجام شد.";
          },
        },
        error: {
          render({ data }) {
            return data.response.data.code;
          },
        },
      },
      {
        position: "bottom_left",
      }
    );
  };

  return (
    <>
      <div className="category-list-wrapper">
        {data.length !== 0 &&
          data.map((item) => (
            <CategoryCard
              key={item.id}
              {...item}
              setShowDeleteModal={setShowDeleteModal}
              setCategoryId={setCategoryId}
            ></CategoryCard>
          ))}
        <Pagination total={totalRecords}></Pagination>
      </div>

      <Modal
        isOpen={showDeleteModal}
        open={setShowDeleteModal}
        title="حذف"
        body="آیا از حذف اطمینان دارید؟"
      >
        <button onClick={() => setShowDeleteModal(false)}>خیر</button>
        <button onClick={handleOk}>بله</button>
      </Modal>
    </>
  );
};

export default CategoryList;
