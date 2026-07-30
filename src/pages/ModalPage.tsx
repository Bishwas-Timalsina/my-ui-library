import { useState } from "react";

import { Modal } from "../components/Modal";

import { Button } from "../components/Button";

const ModalPage = () => {
  const [basicOpen, setBasicOpen] = useState(false);

  const [footerOpen, setFooterOpen] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  const [dangerOpen, setDangerOpen] = useState(false);

  return (
    <div className="p-8 space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Modal Component</h1>

        <p className="text-gray-500">
          Modal component with sizes, variants and footer support.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic Modal</h2>

        <Button label="Open Modal" onClick={() => setBasicOpen(true)} />

        <Modal
          open={basicOpen}
          onClose={() => setBasicOpen(false)}
          title="Basic Modal"
        >
          This is a basic modal.
        </Modal>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Footer Modal</h2>

        <Button label="Open Footer Modal" onClick={() => setFooterOpen(true)} />

        <Modal
          open={footerOpen}
          onClose={() => setFooterOpen(false)}
          title="Confirm"
          footer={
            <>
              <Button
                label="Cancel"
                variant="outline"
                onClick={() => setFooterOpen(false)}
              />

              <Button label="Confirm" />
            </>
          }
        >
          Continue with this action?
        </Modal>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>

        <div className="flex gap-4">
          <Button
            label="Success"
            variant="success"
            onClick={() => setSuccessOpen(true)}
          />

          <Button
            label="Danger"
            variant="error"
            onClick={() => setDangerOpen(true)}
          />
        </div>

        <Modal
          open={successOpen}
          onClose={() => setSuccessOpen(false)}
          title="Success"
          variant="success"
        >
          Completed successfully.
        </Modal>

        <Modal
          open={dangerOpen}
          onClose={() => setDangerOpen(false)}
          title="Danger"
          variant="danger"
        >
          Something went wrong.
        </Modal>
      </section>
    </div>
  );
};

export default ModalPage;
