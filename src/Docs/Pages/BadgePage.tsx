import { useState } from "react";
import { Atom, CheckCircle, Tag } from "lucide-react";
import { Badge } from "../../components";

const BadgePage = () => {
  const [badges, setBadges] = useState(["React", "TypeScript", "Tailwind CSS"]);

  const removeBadge = (label: string) => {
    setBadges((prev) => prev.filter((item) => item !== label));
  };

  return (
    <div className="p-8 space-y-8 max-w-6xl">
      <h1 className="text-2xl font-bold">Badge Showcase</h1>

      <section className="space-y-3">
        <h2 className="font-semibold">Variants</h2>

        <div className="flex flex-wrap gap-4">
          <Badge label="Primary" variant="primary" />
          <Badge label="Secondary" variant="secondary" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Error" variant="error" />
          <Badge label="Info" variant="info" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Appearances</h2>

        <div className="flex flex-wrap gap-4">
          <Badge label="Solid" appearance="solid" />

          <Badge label="Outline" appearance="outline" />

          <Badge label="Soft" appearance="soft" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Sizes</h2>

        <div className="flex items-center gap-4 flex-wrap">
          <Badge label="XS" size="xs" />

          <Badge label="SM" size="sm" />

          <Badge label="MD" size="md" />

          <Badge label="LG" size="lg" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Rounded</h2>

        <div className="flex gap-4 flex-wrap">
          <Badge label="Small" rounded="sm" />

          <Badge label="Medium" rounded="md" />

          <Badge label="Full" rounded="full" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">With Icons</h2>

        <div className="flex flex-wrap gap-4">
          <Badge label="React" icon={<Atom size={14} />} />

          <Badge
            label="Verified"
            variant="success"
            icon={<CheckCircle size={14} />}
          />

          <Badge
            label="Tag"
            appearance="soft"
            variant="warning"
            icon={<Tag size={14} />}
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Status Badges</h2>

        <div className="flex flex-wrap gap-4">
          <Badge label="Online" dot variant="success" />

          <Badge label="Offline" dot variant="secondary" />

          <Badge label="Busy" dot variant="error" />

          <Badge label="Away" dot variant="warning" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Removable Badges</h2>

        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <Badge
              key={badge}
              label={badge}
              removable
              appearance="soft"
              variant="primary"
              onRemove={() => removeBadge(badge)}
            />
          ))}
        </div>

        {badges.length === 0 && (
          <p className="text-sm text-text-muted">All badges removed.</p>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold">Combined Examples</h2>

        <div className="flex flex-wrap gap-4">
          <Badge label="React" icon={<Atom size={14} />} appearance="solid" />

          <Badge label="Production" dot variant="success" appearance="soft" />

          <Badge label="Beta" appearance="outline" variant="warning" />

          <Badge label="Removable" removable variant="error" />

          <Badge
            label="Verified"
            icon={<CheckCircle size={14} />}
            dot
            variant="info"
            appearance="soft"
          />
        </div>
      </section>
    </div>
  );
};

export default BadgePage;
