import { Avatar } from "../components/Avatar";

const AvatarPage = () => {
  return (
    <div className="p-8 space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Avatar Component</h1>

        <p className="text-gray-500">
          Avatar component with image, fallback, sizes, rounded styles, and
          status.
        </p>
      </div>

      {/* Basic */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>

        <div className="flex gap-4 items-center">
          <Avatar />

          <Avatar name="John Doe" />

          <Avatar name="Tai Lung" />
        </div>
      </section>

      {/* Image */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Image</h2>

        <div className="flex gap-4">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User avatar" />

          <Avatar src="https://i.pravatar.cc/150?img=5" alt="User avatar" />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>

        <div className="flex gap-4 items-center">
          <Avatar name="XS" size="xs" />

          <Avatar name="SM" size="sm" />

          <Avatar name="MD" size="md" />

          <Avatar name="LG" size="lg" />

          <Avatar name="XL" size="xl" />
        </div>
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Rounded</h2>

        <div className="flex gap-4 items-center">
          <Avatar name="None" rounded="none" />

          <Avatar name="Small" rounded="sm" />

          <Avatar name="Medium" rounded="md" />

          <Avatar name="Circle" rounded="full" />
        </div>
      </section>

      {/* Background */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Background</h2>

        <div className="flex gap-4">
          <Avatar name="PR" background="primary" />

          <Avatar name="SC" background="secondary" />

          <Avatar name="SU" background="success" />

          <Avatar name="ER" background="error" />
        </div>
      </section>

      {/* Status */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Status</h2>

        <div className="flex gap-6">
          <Avatar name="ON" status="online" />

          <Avatar name="AW" status="away" />

          <Avatar name="OF" status="offline" />

          <Avatar name="BU" status="busy" />
        </div>
      </section>

      {/* Border */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Border</h2>

        <div className="flex gap-4">
          <Avatar name="Border" border />

          <Avatar src="https://i.pravatar.cc/150?img=12" border />
        </div>
      </section>

      {/* Group */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Avatar Group</h2>

        <div className="flex -space-x-3">
          <Avatar src="https://i.pravatar.cc/150?img=10" rounded="full" />

          <Avatar src="https://i.pravatar.cc/150?img=11" rounded="full" />

          <Avatar src="https://i.pravatar.cc/150?img=12" rounded="full" />

          <Avatar name="+5" rounded="full" />
        </div>
      </section>
    </div>
  );
};

export default AvatarPage;
