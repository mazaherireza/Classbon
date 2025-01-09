import { useSearchParams } from "react-router-dom";
import { times } from "lodash";
import { convertEnNumToFa } from "@helpers/convertEnNumToFa";
import "./pagination.css";

const Pagination = ({ total, pageSize = 5 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = Math.ceil(total / pageSize);
  const currentPage = +searchParams.get("page") || 1;

  const prevPage = () => {
    if (currentPage > 1) setSearchParams({ page: currentPage - 1 });
    else setSearchParams({ page: pages });
  };

  const nextPage = () => {
    if (currentPage < pages) setSearchParams({ page: currentPage + 1 });
    else setSearchParams({ page: 1 });
  };

  return (
    <nav className="pagination-wrapper">
      <ul>
        <li onClick={prevPage}>قبلی</li>
        {times(pages, (index) => (
          <li
            key={index + 1}
            className={`${index + 1 == currentPage ? "highlight" : ""}`}
            onClick={() => setSearchParams({ page: index + 1 })}
          >
            {convertEnNumToFa(index + 1)}
          </li>
        ))}
        <li onClick={nextPage}>بعدی</li>
      </ul>
    </nav>
  );
};

export default Pagination;
