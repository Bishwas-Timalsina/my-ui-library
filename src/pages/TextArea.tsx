import { Mail, MessageSquare, Search } from "lucide-react";

import TextArea from "../components/TextArea";

const TextAreaPage = () => {
  return (
    <div className="p-8 space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">TextArea Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>

        <TextArea label="Default" placeholder="Default TextArea" />

        <TextArea
          label="Outline"
          variant="outline"
          placeholder="Outline TextArea"
        />

        <TextArea
          label="Filled"
          variant="filled"
          placeholder="Filled TextArea"
        />

        <TextArea label="Ghost" variant="ghost" placeholder="Ghost TextArea" />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>

        <TextArea label="Default" placeholder="Write something..." />

        <TextArea
          label="Success"
          state="success"
          helperText="Looks good!"
          placeholder="Success state"
        />

        <TextArea
          label="Warning"
          state="warning"
          helperText="Please review your content."
          placeholder="Warning state"
        />

        <TextArea
          label="Error"
          state="error"
          error="Description is required."
          placeholder="Error state"
        />

        <TextArea label="Disabled" disabled placeholder="Disabled textarea" />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>

        <TextArea size="sm" label="Small" placeholder="Small textarea" />

        <TextArea size="md" label="Medium" placeholder="Medium textarea" />

        <TextArea size="lg" label="Large" placeholder="Large textarea" />
      </section>

      {/* Rows */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rows</h2>

        <TextArea rows={3} label="3 Rows" />

        <TextArea rows={6} label="6 Rows" />

        <TextArea rows={10} label="10 Rows" />
      </section>

      {/* Resize */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Resize</h2>

        <TextArea
          resize="none"
          label="No Resize"
          placeholder="Resize disabled"
        />

        <TextArea resize="vertical" label="Vertical Resize" />

        <TextArea resize="horizontal" label="Horizontal Resize" />

        <TextArea resize="both" label="Both Directions" />
      </section>

      {/* Adornments */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Adornments</h2>

        <TextArea
          label="Start Adornment"
          placeholder="Search..."
          startAdornment={<Search size={18} />}
        />

        <TextArea
          label="End Adornment"
          placeholder="Email..."
          endAdornment={<Mail size={18} />}
        />

        <TextArea
          label="Both Adornments"
          placeholder="Message..."
          startAdornment={<MessageSquare size={18} />}
          endAdornment={<Mail size={18} />}
        />
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rounded</h2>

        <TextArea rounded="none" label="None" />

        <TextArea rounded="sm" label="Small" />

        <TextArea rounded="md" label="Medium" />

        <TextArea rounded="lg" label="Large" />

        <TextArea rounded="full" label="Full" />
      </section>

      {/* Helper Text */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Helper Text</h2>

        <TextArea
          label="Description"
          helperText="Maximum 500 characters."
          placeholder="Write here..."
        />
      </section>

      {/* Required */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Required</h2>

        <TextArea label="Description" required placeholder="Required field" />
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Width</h2>

        <TextArea
          label="Full Width"
          fullWidth
          placeholder="This textarea spans the available width."
        />
      </section>
    </div>
  );
};

export default TextAreaPage;
