import { Spinner } from "../components/Spinner";

const SpinnerPage = () => {
  return (
    <div className="p-8 space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Spinner Component</h1>

        <p className="text-gray-500">
          A loading indicator component with different sizes, variants, and
          animation styles.
        </p>
      </div>

      {/* Basic */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>

        <Spinner />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>

        <div className="flex items-center gap-6">
          <Spinner size="xs" />

          <Spinner size="sm" />

          <Spinner size="md" />

          <Spinner size="lg" />

          <Spinner size="xl" />
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>

        <div className="flex items-center gap-6">
          <Spinner variant="primary" />

          <Spinner variant="secondary" />

          <Spinner variant="success" />

          <Spinner variant="warning" />

          <Spinner variant="error" />

          <Spinner variant="info" />
        </div>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Types</h2>

        <div className="flex items-center gap-8">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Border</p>

            <Spinner type="border" />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Dots</p>

            <Spinner type="dots" />
          </div>
        </div>
      </section>

      {/* Loading Text */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Loading Text</h2>

        <div className="flex items-center gap-3">
          <Spinner />

          <span className="text-gray-600">Loading data...</span>
        </div>
      </section>

      {/* Button Loading Example */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Button Loading State</h2>

        <button
          className="
            inline-flex
            items-center
            gap-2
            rounded-md
            bg-primary-base
            px-4
            py-2
            text-white
            disabled:opacity-70
          "
          disabled
        >
          <Spinner size="sm" variant="secondary" />
          Loading...
        </button>
      </section>

      {/* Combinations */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Combinations</h2>

        <div className="flex items-center gap-6">
          <Spinner size="lg" variant="success" />

          <Spinner size="md" variant="error" type="dots" />

          <Spinner size="xl" variant="info" />
        </div>
      </section>
    </div>
  );
};

export default SpinnerPage;
