import pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";

export default function Pagination(props) {
  const { totalItems, currentPage, itemsPerPage, updateCurrentPage } = props;

  useEffect(() => {
    const paginate = new pagination('pagination', {
      totalItems,
      itemsPerPage,
      visiblePages: 5
    });
    paginate.movePageTo(currentPage);
    paginate.on("beforeMove", (eventData) => {
      console.log(eventData);
      updateCurrentPage(eventData);
    });
  }, [currentPage, itemsPerPage, totalItems, updateCurrentPage]);

  return (
    <div
      id="tui-pagination-container"
      className="tui-pagination"
    ></div>
  );
}