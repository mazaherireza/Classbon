import { useCategoryContext } from "./category-context";
import "./category-card.css";

const CategoryCard = ({ id, name, setShowDeleteModal, setCategoryId }) => {
  const { setCategory } = useCategoryContext();
  const handleDelete = () => {
    setShowDeleteModal(true);
    setCategoryId(id);
  };

  const handleEdit = () => {
    setCategory({ id, name });
  };

  return (
    <div className="category-card-wrapper">
      <p className="name">{name}</p>
      <div className="actions">
        <button onClick={handleDelete}>حذف</button>
        <button onClick={handleEdit}>ویرایش</button>
      </div>
    </div>
  );
};

export default CategoryCard;
