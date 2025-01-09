import "./pagination.css";
import { times } from "lodash";

const Pagination = ({ pages, setPage, activePage }) => {
  const handlePrev = () => {
    setPage((current) => {
      const prev = --current;
      if (prev < 1) return pages;
      return prev;
    });
  };

  const handleNext = () => {
    setPage((current) => {
      const next = ++current;
      if (next > pages) return 1;
      return next;
    });
  };

  return (
    <nav className="container">
      <ul className="pagination-wrapper">
        <li className="page-item" onClick={() => handlePrev()}>
          قبلی
        </li>

        {times(pages, (index) => (
          <li
            key={`pagination-${index}`}
            className={`page-item ${index + 1 == activePage ? "active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}

        <li className="page-item" onClick={() => handleNext()}>
          بعدی
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
