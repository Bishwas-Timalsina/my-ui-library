import { Edit, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "../../components";

const ButtonPage = () => {
  return (
    <div className="p-8 space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold">Button Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="flex flex-wrap gap-4">
          <Button label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="ghost" label="Ghost" />
          <Button variant="outline" label="Outline" />
          <Button variant="error" label="Delete" />
          <Button variant="link" label="Link" />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="flex items-center gap-4 flex-wrap">
          <Button size="xs" label="XS" />
          <Button size="sm" label="SM" />
          <Button size="md" label="MD" />
          <Button size="lg" label="LG" />
          <Button size="xl" label="XL" />
        </div>
      </section>

      {/* Icons */}
      <section className="space-y-3">
        <h2 className="font-semibold">Icons</h2>

        <div className="flex gap-4 flex-wrap">
          <Button label="Add" icon={<Plus size={18} />} />

          <Button label="Search" icon={<Search size={18} />} invert />

          <Button icon={<Edit size={18} />} aria-label="Edit" />

          <Button
            icon={<Trash2 size={18} />}
            variant="error"
            aria-label="Delete"
          />
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="flex gap-4 flex-wrap">
          <Button label="Loading" isLoading />
          <Button label="Disabled" disabled />
          <Button label="Error" variant="warning" />
          <Button label="Error" variant="error" />
        </div>
      </section>

      {/* Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Width</h2>

        <Button label="Full Width Button" fullWidth />
      </section>

      {/* Rounded */}
      <section className="space-y-3">
        <h2 className="font-semibold">Rounded</h2>

        <div className="flex gap-4">
          <Button label="Default" rounded="md" />

          <Button label="Pill" rounded="full" />
        </div>
      </section>
    </div>
  );
};

export default ButtonPage;
