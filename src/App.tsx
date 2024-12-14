import { Suspense } from "react";
import "./App.css";
import { Layout } from "./layout/Layout";
import { Checks } from "./ui/Checks";
import { Main } from "./ui/Main";
import { Loading } from "./ui/Loading";

function App() {
  return (
    <Layout
      header={<h1>React 19 + Jotai Sample</h1>}
      main={
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      }
      checks={
        <Suspense fallback={<Loading />}>
          <Checks />
        </Suspense>
      }
    />
  );
}

export default App;
