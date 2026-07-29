import { useState } from "react";
import { Radio } from "../components/Radio";

const RadioPage = () => {
  const [framework, setFramework] = useState("react");
  const [theme, setTheme] = useState("light");

  return (
    <div className="p-8 space-y-6 max-w-5xl">
      <h1 className="text-2xl font-bold">Radio Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="space-y-3">
          <Radio
            label="Primary"
            variant="primary"
            name="variants"
            defaultChecked
          />
          <Radio label="Secondary" variant="secondary" name="variants" />
          <Radio label="Success" variant="success" name="variants" />
          <Radio label="Warning" variant="warning" name="variants" />
          <Radio label="Error" variant="error" name="variants" />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="space-y-3">
          <Radio label="Small" size="sm" name="sizes" defaultChecked />

          <Radio label="Medium" size="md" name="sizes" />

          <Radio label="Large" size="lg" name="sizes" />
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="space-y-4">
          <Radio label="Disabled" disabled name="states" />

          <Radio
            label="With Helper Text"
            helperText="Select one option."
            name="states"
          />

          <Radio
            label="With Error"
            variant="error"
            error="Please select an option."
            name="states"
          />
        </div>
      </section>

      {/* Controlled Example */}
      <section className="space-y-3">
        <h2 className="font-semibold">Controlled Example</h2>

        <div className="space-y-3">
          <Radio
            label="React"
            name="framework"
            value="react"
            checked={framework === "react"}
            // onChange={() => setFramework("react")}
          />

          <Radio
            label="Vue"
            name="framework"
            value="vue"
            checked={framework === "vue"}
            // onChange={() => setFramework("vue")}
          />

          <Radio
            label="Angular"
            name="framework"
            value="angular"
            checked={framework === "angular"}
            // onChange={() => setFramework("angular")}
          />

          <Radio
            label="Svelte"
            name="framework"
            value="svelte"
            checked={framework === "svelte"}
            // onChange={() => setFramework("svelte")}
          />
        </div>

        <p className="text-sm text-text-muted">
          Selected: <strong>{framework}</strong>
        </p>
      </section>

      {/* Full Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Full Width</h2>

        <Radio
          fullWidth
          label="This radio occupies the full width."
          name="fullWidth"
        />
      </section>

      {/* Theme Selection */}
      <section className="space-y-3">
        <h2 className="font-semibold">Theme Selection</h2>

        <div className="space-y-3">
          <Radio
            label="Light Theme"
            name="theme"
            value="light"
            checked={theme === "light"}
            // onChange={() => setTheme("light")}
          />

          <Radio
            label="Dark Theme"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            // onChange={() => setTheme("dark")}
          />

          <Radio
            label="System Theme"
            name="theme"
            value="system"
            checked={theme === "system"}
            // onChange={() => setTheme("system")}
          />
        </div>

        <p className="text-sm text-text-muted">
          Current Theme: <strong>{theme}</strong>
        </p>
      </section>
    </div>
  );
};

export default RadioPage;
