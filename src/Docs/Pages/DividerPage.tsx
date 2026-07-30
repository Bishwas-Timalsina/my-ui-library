import { Divider } from "../../components";

const DividerPage = () => {
  return (
    <div className="p-8 space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Divider Component</h1>

        <p className="text-gray-500">
          A flexible divider component supporting orientation, styles, sizes,
          colors, and labels.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>

        <Divider />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Label</h2>

        <Divider label="OR" />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>

        <div className="space-y-6">
          <Divider variant="solid" />

          <Divider variant="dashed" />

          <Divider variant="dotted" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>

        <div>
          <Divider size="sm" />

          <Divider size="md" />

          <Divider size="lg" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Colors</h2>

        <div className="space-y-6">
          <Divider color="primary" />

          <Divider color="secondary" />

          <Divider color="success" />

          <Divider color="warning" />

          <Divider color="error" />

          <Divider color="info" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Vertical</h2>

        <div className="flex h-20 items-center">
          <span>Left</span>

          <Divider orientation="vertical" size="md" />

          <span>Right</span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Combination</h2>

        <Divider label="Continue" variant="dashed" color="primary" size="lg" />
      </section>
    </div>
  );
};

export default DividerPage;
