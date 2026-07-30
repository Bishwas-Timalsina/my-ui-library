import { useState } from "react";
import { Pagination } from "../../components";

const PaginationPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="p-8 space-y-8 max-w-6xl">
      <h1 className="text-2xl font-bold">Pagination Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="font-semibold">Variants</h2>

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          variant="solid"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          variant="outline"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          variant="ghost"
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="font-semibold">Sizes</h2>

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          size="sm"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          size="md"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          size="lg"
        />
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="font-semibold">Rounded</h2>

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          rounded="none"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          rounded="md"
        />

        <Pagination
          page={page}
          totalPages={10}
          onPageChange={setPage}
          rounded="full"
        />
      </section>

      {/* Many Pages */}
      <section className="space-y-4">
        <h2 className="font-semibold">Many Pages</h2>

        <Pagination page={page} totalPages={100} onPageChange={setPage} />
      </section>

      {/* Without First / Last */}
      <section className="space-y-4">
        <h2 className="font-semibold">Without First / Last</h2>

        <Pagination
          page={page}
          totalPages={20}
          onPageChange={setPage}
          showFirstLast={false}
        />
      </section>

      {/* Without Prev / Next */}
      <section className="space-y-4">
        <h2 className="font-semibold">Without Previous / Next</h2>

        <Pagination
          page={page}
          totalPages={20}
          onPageChange={setPage}
          showPrevNext={false}
        />
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="font-semibold">Full Width</h2>

        <Pagination
          page={page}
          totalPages={20}
          onPageChange={setPage}
          fullWidth
        />
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 className="font-semibold">Disabled</h2>

        <Pagination
          page={page}
          totalPages={20}
          onPageChange={setPage}
          disabled
        />
      </section>

      {/* Controlled Example */}
      <section className="space-y-4">
        <h2 className="font-semibold">Controlled Pagination</h2>

        <Pagination page={page} totalPages={25} onPageChange={setPage} />

        <p className="text-sm text-text-muted">
          Current Page:
          <span className="ml-2 font-semibold">{page}</span>
        </p>
      </section>
    </div>
  );
};

export default PaginationPage;
