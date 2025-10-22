import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange?: (size: number) => void;
};

export default function PaginationNav({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
}: Props) {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
      <nav className="w-full sm:w-auto sm:mr-auto">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => handlePageClick(1)}>
              <ChevronsLeft className="w-4 h-4" />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </li>

          {pageNumbers.map((page) => (
            <li key={page} className={`page-item ${page === currentPage ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageClick(page)}>
                {page}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => handlePageClick(totalPages)}>
              <ChevronsRight className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </nav>

      <select
        className="w-20 form-select box mt-3 sm:mt-0"
        value={pageSize}
        onChange={(e) => onPageSizeChange?.(parseInt(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}
