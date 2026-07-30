import { useState } from "react";
import { RefreshCcw, Shield } from "lucide-react";
import { Alert, Button } from "../../components";

const AlertPage = () => {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className="p-8 space-y-8 max-w-5xl">
      <h1 className="text-2xl font-bold">Alert Showcase</h1>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="font-semibold">Variants</h2>

        <Alert
          variant="info"
          title="Information"
          description="This is an informational alert."
        />

        <Alert
          variant="success"
          title="Success"
          description="Operation completed successfully."
        />

        <Alert
          variant="warning"
          title="Warning"
          description="Please review your account settings."
        />

        <Alert
          variant="error"
          title="Error"
          description="Something went wrong."
        />
      </section>

      {/* Appearances */}
      <section className="space-y-4">
        <h2 className="font-semibold">Appearances</h2>

        <Alert
          appearance="soft"
          title="Soft Alert"
          description="This uses the soft appearance."
        />

        <Alert
          appearance="outline"
          title="Outline Alert"
          description="This uses the outline appearance."
        />

        <Alert
          appearance="solid"
          variant="success"
          title="Solid Alert"
          description="This uses the solid appearance."
        />
      </section>

      {/* Closable */}
      <section className="space-y-4">
        <h2 className="font-semibold">Closable Alert</h2>

        {showDismissible ? (
          <Alert
            closable
            variant="warning"
            title="Dismissible Alert"
            description="Click the close icon to dismiss this alert."
            onClose={() => setShowDismissible(false)}
          />
        ) : (
          <Button
            label="Show Alert Again"
            onClick={() => setShowDismissible(true)}
          />
        )}
      </section>

      {/* Custom Icon */}
      <section className="space-y-4">
        <h2 className="font-semibold">Custom Icon</h2>

        <Alert
          variant="success"
          icon={<Shield size={22} />}
          title="Protected"
          description="Your account is secure."
        />
      </section>

      {/* Action */}
      <section className="space-y-4">
        <h2 className="font-semibold">With Action</h2>

        <Alert
          variant="warning"
          title="Connection Lost"
          description="Unable to reach the server."
          action={
            <Button label="Retry" size="sm" icon={<RefreshCcw size={16} />} />
          }
        />
      </section>

      {/* Full Width */}
      <section className="space-y-4">
        <h2 className="font-semibold">Full Width</h2>

        <Alert
          fullWidth
          variant="info"
          title="Full Width Alert"
          description="This alert stretches across the available width."
        />
      </section>

      {/* Combined Example */}
      <section className="space-y-4">
        <h2 className="font-semibold">Combined Example</h2>

        <Alert
          variant="success"
          appearance="soft"
          closable
          icon={<Shield size={22} />}
          title="Deployment Successful"
          description="Your application has been deployed successfully."
          action={<Button label="View Details" size="sm" />}
        />
      </section>
    </div>
  );
};

export default AlertPage;
