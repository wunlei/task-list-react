import ErrorBoundary from "@/components/commons/ErrorBoundary/ErrorBoundary";
import TaskList from "@/components/TaskList/TaskList";
import TaskListHeader from "@/components/TaskListHeader/TaskListHeader";
import s from "./App.module.scss";

function App() {
  return (
    <ErrorBoundary>
      <main className={s.main}>
        <h1 className={s.pageTitle}>todos</h1>
        <div className={s.appContainer}>
          <TaskListHeader />
          <TaskList />
        </div>
      </main>
    </ErrorBoundary>
  );
}

export default App;
