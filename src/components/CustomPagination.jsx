import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function GlobalPagination({
  currentPage,
  recordsPage,
  dataLength,
  handlePagination,
}) {
  const totalPages = Math.ceil(dataLength / recordsPage);
  const lastIndex = currentPage * recordsPage;

  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = () => {
    if (totalPages <= 7) {
      return range(1, totalPages);
    }

    const pages = [];

    if (currentPage <= 4) {
      pages.push(...range(1, 5), "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...", ...range(totalPages - 4, totalPages));
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }

    return pages;
  };

  const pagesToRender = visiblePages();

  const handleClick = (page) => {
    if (page !== "..." && page !== currentPage) {
      handlePagination(Number(page));
    }
  };

  return (
    <div className="flex items-center justify-end md:justify-between flex-wrap px-2 py-2 w-full">
      {/* Left side: Showing X to Y of Z */}
      <div className="hidden md:block text-sm font-medium text-muted-foreground">
        Showing {dataLength === 0 ? 0 : lastIndex - recordsPage + 1} to{" "}
        {dataLength < lastIndex ? dataLength : lastIndex} of {dataLength}{" "}
        records
      </div>

      {/* Right side: Pagination controls */}
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePagination(currentPage - 1);
                }}
              />
            </PaginationItem>

            {pagesToRender.map((page, index) => (
              <PaginationItem key={index}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(page);
                    }}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages)
                    handlePagination(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default GlobalPagination;
