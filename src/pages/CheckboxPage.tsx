import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

const CheckboxPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-8 space-y-6 max-w-5xl">
      <h1 className="text-2xl font-bold">Checkbox Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="space-y-3">
          <Checkbox label="Primary" variant="primary" />
          <Checkbox label="Secondary" variant="secondary" />
          <Checkbox label="Success" variant="success" />
          <Checkbox label="Warning" variant="warning" />
          <Checkbox label="Error" variant="error" />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="space-y-3">
          <Checkbox label="Small" size="sm" />

          <Checkbox label="Medium" size="md" />

          <Checkbox label="Large" size="lg" />
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="space-y-4">
          <Checkbox
            label="Controlled Checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />

          <Checkbox label="Disabled" disabled />

          <Checkbox
            label="With Helper Text"
            helperText="You can update this anytime."
          />

          <Checkbox
            label="With Error"
            variant="error"
            error="Please accept the terms."
          />
        </div>
      </section>

      {/* Full Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Full Width</h2>

        <Checkbox
          fullWidth
          label="This checkbox spans the full width of its container."
        />
      </section>

      {/* Multiple Selection */}
      <section className="space-y-3">
        <h2 className="font-semibold">Multiple Options</h2>

        <div className="space-y-3">
          <Checkbox label="React" />

          <Checkbox label="Vue" />

          <Checkbox label="Angular" />

          <Checkbox label="Svelte" />
        </div>
      </section>
    </div>
  );
};

export default CheckboxPage;
