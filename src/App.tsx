import { Button } from "./components/Button";

const App = () => {
  return (
    <>
      <div className="p-8 space-y-4">
        <Button variant="primary" label="Primary" />
        {/* <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button> */}
      </div>
    </>
  );
};

export default App;
