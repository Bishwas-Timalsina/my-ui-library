import { Eye, Mail, Search, User } from "lucide-react";

import { Input } from "../../components";

const InputPage = () => {
  return (
    <div className="p-8 space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold">Input Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>

        <Input label="Default" placeholder="Default Input" />

        <Input label="Outline" variant="outline" placeholder="Outline Input" />

        <Input label="Filled" variant="filled" placeholder="Filled Input" />

        <Input label="Ghost" variant="ghost" placeholder="Ghost Input" />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>

        <Input label="Default" placeholder="Enter email" />

        <Input
          label="Success"
          state="success"
          helperText="Looks good!"
          placeholder="Success Input"
        />

        <Input
          label="Warning"
          state="warning"
          helperText="Check this field."
          placeholder="Warning Input"
        />

        <Input
          label="Error"
          state="error"
          error="Email is required"
          placeholder="Error Input"
        />

        <Input label="Disabled" disabled placeholder="Disabled" />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>

        <Input inputSize="sm" placeholder="Small" />

        <Input inputSize="md" placeholder="Medium" />

        <Input inputSize="lg" placeholder="Large" />
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Icons</h2>

        <Input placeholder="Search..." leftIcon={<Search size={18} />} />

        <Input placeholder="Email" leftIcon={<Mail size={18} />} />

        <Input placeholder="Username" leftIcon={<User size={18} />} />

        <Input
          type="password"
          placeholder="Password"
          rightIcon={<Eye size={18} />}
        />
      </section>

      {/* Helper Text */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Helper Text</h2>

        <Input label="Email" helperText="We'll never share your email." />
      </section>

      {/* Required */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Required</h2>

        <Input label="Full Name" required placeholder="John Doe" />
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rounded</h2>

        <Input rounded="md" placeholder="Default" />

        <Input rounded="full" placeholder="Pill Input" />
      </section>
    </div>
  );
};

export default InputPage;
