import { Label } from "../components/Label";

const LabelPage = () => {
  return (
    <div className="p-8 space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold">Label Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="flex flex-wrap gap-6">
          <Label>Default</Label>

          <Label variant="primary">Primary</Label>

          <Label variant="success">Success</Label>

          <Label variant="warning">Warning</Label>

          <Label variant="error">Error</Label>

          <Label variant="muted">Muted</Label>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="space-y-2">
          <Label size="xs">Extra Small</Label>
          <br />

          <Label size="sm">Small</Label>
          <br />

          <Label size="md">Medium</Label>
          <br />

          <Label size="lg">Large</Label>
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="space-y-4">
          <Label required>Email Address</Label>

          <Label optional>Phone Number</Label>
        </div>
      </section>

      {/* Form Example */}
      <section className="space-y-3">
        <h2 className="font-semibold">Form Example</h2>

        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name" required>
              Full Name
            </Label>

            <input id="name" className="w-full border rounded-lg px-3 py-2" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" optional>
              Company
            </Label>

            <input
              id="company"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabelPage;
