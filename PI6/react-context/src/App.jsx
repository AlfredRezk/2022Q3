import LoginForm from "./components/LoginForm/LoginForm";
import MyComp from "./components/MyComp";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskProvider";
import ErrorBoundry from "./components/ErrorBoundry";

function App() {
  return (
    <TaskProvider>
    <main className="container my-5">
      <LoginForm/>

      <ErrorBoundry>
        <MyComp/>
      </ErrorBoundry>

      
      <TaskList/>
      </main>
    </TaskProvider>
  );
}

export default App;
