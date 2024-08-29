import ErrorBoundary from "../commons/ErrorBoundary/ErrorBoundary";
import s from "./App.module.scss";

function App() {
  return (
    <ErrorBoundary>
      <main className={s.main}>
        <h1 className={s.pageTitle}>todos</h1>
        <div className={s.appContainer}></div>
      </main>
    </ErrorBoundary>
  );
}

export default App;
