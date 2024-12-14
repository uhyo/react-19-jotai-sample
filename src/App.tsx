import "./App.css";
import { Layout } from "./layout/Layout";
import { Checks } from "./ui/Checks";
import { Main } from "./ui/Main";

function App() {
  return (
    <Layout
      header={<h1>React 19 + Jotai v2 Sample</h1>}
      main={<Main />}
      checks={<Checks />}
    />
  );
}

export default App;
