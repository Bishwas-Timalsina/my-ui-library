import { Card } from "../../components";
import { Text } from "../../components/Text";

const CardPage = () => {
  return (
    <div className="p-8 space-y-6 max-w-6xl">
      <h1 className="text-2xl font-bold">Card Showcase</h1>

      {/* Variants */}
      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <Text content="Default Card" />
          </Card>

          <Card variant="outline">
            <Text content="Outline Card" />
          </Card>

          <Card variant="ghost">
            <Text content="Ghost Card" />
          </Card>

          <Card variant="primary">
            <Text content="Primary Card" />
          </Card>

          <Card variant="success">
            <Text content="Success Card" />
          </Card>

          <Card variant="warning">
            <Text content="Warning Card" />
          </Card>

          <Card variant="error">
            <Text content="Error Card" />
          </Card>
        </div>
      </section>

      {/* Padding */}
      <section className="space-y-3">
        <h2 className="font-semibold">Padding</h2>

        <div className="flex flex-wrap gap-4">
          <Card padding="none">
            <Text content="No Padding" />
          </Card>

          <Card padding="sm">
            <Text content="Small Padding" />
          </Card>

          <Card padding="md">
            <Text content="Medium Padding" />
          </Card>

          <Card padding="lg">
            <Text content="Large Padding" />
          </Card>
        </div>
      </section>

      {/* Shadows */}
      <section className="space-y-3">
        <h2 className="font-semibold">Shadows</h2>

        <div className="flex flex-wrap gap-4">
          <Card shadow="none">
            <Text content="No Shadow" />
          </Card>

          <Card shadow="sm">
            <Text content="Small Shadow" />
          </Card>

          <Card shadow="md">
            <Text content="Medium Shadow" />
          </Card>

          <Card shadow="lg">
            <Text content="Large Shadow" />
          </Card>
        </div>
      </section>

      {/* Rounded */}
      <section className="space-y-3">
        <h2 className="font-semibold">Rounded</h2>

        <div className="flex flex-wrap gap-4">
          <Card rounded="none">
            <Text content="None" />
          </Card>

          <Card rounded="sm">
            <Text content="Small" />
          </Card>

          <Card rounded="md">
            <Text content="Medium" />
          </Card>

          <Card rounded="full">
            <Text content="Full" />
          </Card>
        </div>
      </section>

      {/* Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Width</h2>

        <div className="space-y-4">
          <Card>
            <Text content="Auto Width Card" />
          </Card>

          <Card fullWidth>
            <Text content="Full Width Card" />
          </Card>
        </div>
      </section>

      {/* Example */}
      <section className="space-y-3">
        <h2 className="font-semibold">Example Card</h2>

        <Card shadow="md" padding="lg" rounded="md" className="max-w-md">
          <div className="space-y-3">
            <Text content="John Doe" weight="bold" size="lg" />

            <Text content="Frontend Developer passionate about building scalable design systems using React, TypeScript and Tailwind CSS." />
          </div>
        </Card>
      </section>
    </div>
  );
};

export default CardPage;
