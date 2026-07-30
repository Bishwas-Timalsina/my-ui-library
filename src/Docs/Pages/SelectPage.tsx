import { useState } from "react";

import { Select } from "../../components";

const options = [
  { label: "Nepal", value: "np" },
  { label: "India", value: "in" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
];

const SelectPage = () => {
  const [defaultValue, setDefaultValue] = useState<string | number>("");
  const [searchValue, setSearchValue] = useState<string | number>("");
  const [clearValue, setClearValue] = useState<string | number>("np");
  const [fullWidthValue, setFullWidthValue] = useState<string | number>("");

  return (
    <div className="p-8 space-y-6 max-w-5xl">
      <h1 className="text-2xl font-bold">Select Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Default"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            label="Outline"
            variant="outline"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            label="Filled"
            variant="filled"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            label="Ghost"
            variant="ghost"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="space-y-4 max-w-sm">
          <Select
            size="xs"
            label="XS"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            size="sm"
            label="SM"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            size="md"
            label="MD"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            size="lg"
            label="LG"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />

          <Select
            size="xl"
            label="XL"
            options={options}
            value={defaultValue}
            onChange={setDefaultValue}
          />
        </div>
      </section>

      {/* Searchable */}
      <section className="space-y-3">
        <h2 className="font-semibold">Searchable</h2>

        <Select
          label="Search Country"
          searchable
          options={options}
          value={searchValue}
          onChange={setSearchValue}
        />
      </section>

      {/* Clearable */}
      <section className="space-y-3">
        <h2 className="font-semibold">Clearable</h2>

        <Select
          label="Clear Selection"
          searchable
          clearable
          options={options}
          value={clearValue}
          onChange={setClearValue}
        />
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="grid grid-cols-2 gap-4">
          <Select label="Disabled" disabled options={options} />

          <Select
            label="Error"
            error="Please select a country."
            options={options}
          />

          <Select
            label="Helper Text"
            helperText="Choose your preferred country."
            options={options}
          />
        </div>
      </section>

      {/* Rounded */}
      <section className="space-y-3">
        <h2 className="font-semibold">Rounded</h2>

        <div className="space-y-4 max-w-sm">
          <Select rounded="none" label="None" options={options} />

          <Select rounded="sm" label="Small" options={options} />

          <Select rounded="md" label="Medium" options={options} />

          <Select rounded="full" label="Full" options={options} />
        </div>
      </section>

      {/* Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Width</h2>

        <div className="space-y-4">
          <Select
            label="Default Width"
            options={options}
            value={fullWidthValue}
            onChange={setFullWidthValue}
          />

          <Select
            label="Full Width"
            fullWidth
            options={options}
            value={fullWidthValue}
            onChange={setFullWidthValue}
          />
        </div>
      </section>
    </div>
  );
};

export default SelectPage;
