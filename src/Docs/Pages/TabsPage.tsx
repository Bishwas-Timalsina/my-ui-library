import { useState } from "react";
import { Bell, Home, Settings, User } from "lucide-react";

import { Tabs } from "../../components";

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const basicTabs = [
    {
      label: "Home",
      value: "home",
      content: <div>🏠 Welcome to the Home page.</div>,
    },
    {
      label: "Profile",
      value: "profile",
      content: <div>👤 This is your profile.</div>,
    },
    {
      label: "Settings",
      value: "settings",
      content: <div>⚙️ Application settings.</div>,
    },
  ];

  const iconTabs = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: <Home size={16} />,
      content: <div>Dashboard Overview</div>,
    },
    {
      label: "Profile",
      value: "profile",
      icon: <User size={16} />,
      content: <div>Profile Information</div>,
    },
    {
      label: "Notifications",
      value: "notifications",
      icon: <Bell size={16} />,
      content: <div>Notification Center</div>,
    },
    {
      label: "Settings",
      value: "settings",
      icon: <Settings size={16} />,
      content: <div>Settings Panel</div>,
    },
  ];

  const disabledTabs = [
    {
      label: "Overview",
      value: "overview",
      content: <div>Overview Content</div>,
    },
    {
      label: "Analytics",
      value: "analytics",
      content: <div>Analytics Content</div>,
    },
    {
      label: "Billing",
      value: "billing",
      disabled: true,
      content: <div>Billing Content</div>,
    },
  ];

  return (
    <div className="p-8 space-y-10 max-w-6xl">
      <h1 className="text-2xl font-bold">Tabs Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="font-semibold">Variants</h2>

        <Tabs items={basicTabs} variant="solid" />

        <Tabs items={basicTabs} variant="soft" />

        <Tabs items={basicTabs} variant="outline" />

        <Tabs items={basicTabs} variant="underline" />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="font-semibold">Sizes</h2>

        <Tabs items={basicTabs} size="sm" />

        <Tabs items={basicTabs} size="md" />

        <Tabs items={basicTabs} size="lg" />
      </section>

      {/* Rounded */}
      <section className="space-y-4">
        <h2 className="font-semibold">Rounded</h2>

        <Tabs items={basicTabs} rounded="none" />

        <Tabs items={basicTabs} rounded="md" />

        <Tabs items={basicTabs} rounded="full" />
      </section>

      {/* With Icons */}
      <section className="space-y-4">
        <h2 className="font-semibold">With Icons</h2>

        <Tabs items={iconTabs} variant="outline" />
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="font-semibold">Full Width</h2>

        <Tabs items={basicTabs} fullWidth />
      </section>

      {/* Vertical */}
      <section className="space-y-4">
        <h2 className="font-semibold">Vertical Tabs</h2>

        <Tabs items={iconTabs} orientation="vertical" variant="soft" />
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h2 className="font-semibold">Disabled Tab</h2>

        <Tabs items={disabledTabs} />
      </section>

      {/* Controlled */}
      <section className="space-y-4">
        <h2 className="font-semibold">Controlled Tabs</h2>

        <Tabs
          items={iconTabs}
          value={activeTab}
          onValueChange={setActiveTab}
          variant="outline"
        />

        <p className="text-sm text-text-muted">
          Active Tab: <span className="font-semibold">{activeTab}</span>
        </p>
      </section>

      {/* Combined */}
      <section className="space-y-4">
        <h2 className="font-semibold">Combined Example</h2>

        <Tabs items={iconTabs} variant="outline" rounded="full" fullWidth />
      </section>
    </div>
  );
};

export default TabsPage;
