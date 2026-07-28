import { Mail, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";

import Text from "../components/Text";

const TextPage = () => {
  return (
    <div className="p-8 space-y-8 max-w-5xl">
      <h1 className="text-3xl font-bold">Text Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>

        <div className="space-y-2">
          <Text variant="heading" content="Heading Text" />
          <Text variant="subHeading" content="Sub Heading Text" />
          <Text variant="body" content="Body Text" />
          <Text variant="link" content="Link Text" />
          <Text variant="error" content="Error Text" />
          <Text
            variant="reverse"
            content="Reverse Text"
            className="bg-btn-primary p-2 rounded"
          />
          <Text variant="disabled" content="Disabled Text" />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>

        <div className="space-y-2">
          <Text size="2xs" content="2XS" />
          <Text size="xs" content="XS" />
          <Text size="sm" content="SM" />
          <Text size="md" content="MD" />
          <Text size="lg" content="LG" />
          <Text size="xl" content="XL" />
          <Text size="2xl" content="2XL" />
          <Text size="3xl" content="3XL" />
          <Text size="4xl" content="4XL" />
        </div>
      </section>

      {/* Weights */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Weights</h2>

        <div className="space-y-2">
          <Text weight="thin" content="Thin" />
          <Text weight="light" content="Light" />
          <Text weight="normal" content="Normal" />
          <Text weight="medium" content="Medium" />
          <Text weight="semibold" content="Semi Bold" />
          <Text weight="bold" content="Bold" />
          <Text weight="extrabold" content="Extra Bold" />
        </div>
      </section>

      {/* Alignment */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alignment</h2>

        <div className="border rounded-lg p-4 space-y-2">
          <Text align="left" content="Left Aligned" />
          <Text align="center" content="Center Aligned" />
          <Text align="right" content="Right Aligned" />
          <Text
            align="justify"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, nunc eget porta fermentum, metus elit gravida neque, nec consequat tortor lacus vitae justo."
          />
        </div>
      </section>

      {/* Decorations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Decorations</h2>

        <div className="space-y-2">
          <Text italic content="Italic Text" />
          <Text underline content="Underline Text" />
          <Text uppercase content="Uppercase Text" />
        </div>
      </section>

      {/* Truncate */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Truncate</h2>

        <div className="w-64 border p-2">
          <Text
            truncate
            content="This is a very long text that should be truncated with an ellipsis when it exceeds the container width."
          />
        </div>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Icons</h2>

        <div className="space-y-3">
          <Text icon={<Mail size={18} />} content="Mail" />

          <Text
            icon={<ExternalLink size={18} />}
            iconPosition="right"
            content="External Link"
          />

          <Text
            icon={<AlertCircle size={18} />}
            variant="error"
            content="Error Message"
          />

          <Text icon={<CheckCircle size={18} />} content="Success" />
        </div>
      </section>
    </div>
  );
};

export default TextPage;
