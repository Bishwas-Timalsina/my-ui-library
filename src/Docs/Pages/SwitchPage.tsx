import { useState } from "react";

import { Switch } from "../../components";

const SwitchPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-8 space-y-6 max-w-5xl">
      <h1 className="text-2xl font-bold">Switch Showcase</h1>

      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="space-y-3">
          <Switch label="Primary" variant="primary" defaultChecked />
          <Switch label="Secondary" variant="secondary" defaultChecked />
          <Switch label="Success" variant="success" defaultChecked />
          <Switch label="Warning" variant="warning" defaultChecked />
          <Switch label="Error" variant="error" defaultChecked />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="space-y-4">
          <Switch label="Small" size="sm" defaultChecked />

          <Switch label="Medium" size="md" defaultChecked />

          <Switch label="Large" size="lg" defaultChecked />
        </div>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="font-semibold">States</h2>

        <div className="space-y-4">
          <Switch label="Disabled" disabled defaultChecked />

          <Switch
            label="Helper Text"
            helperText="Receive email notifications."
            defaultChecked
          />

          <Switch
            label="Error"
            variant="error"
            error="Unable to update preference."
          />
        </div>
      </section>

      {/* Controlled */}
      <section className="space-y-3">
        <h2 className="font-semibold">Controlled Example</h2>

        <Switch
          label="Enable Notifications"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />

        <p className="text-sm text-text-muted">
          Notifications:{" "}
          <strong>{notifications ? "Enabled" : "Disabled"}</strong>
        </p>
      </section>

      {/* Another Controlled */}
      <section className="space-y-3">
        <h2 className="font-semibold">Theme</h2>

        <Switch
          label="Dark Mode"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />

        <p className="text-sm text-text-muted">
          Theme: <strong>{darkMode ? "Dark" : "Light"}</strong>
        </p>
      </section>

      {/* Full Width */}
      <section className="space-y-3">
        <h2 className="font-semibold">Full Width</h2>

        <Switch label="Full Width Switch" fullWidth defaultChecked />
      </section>
    </div>
  );
};

export default SwitchPage;
