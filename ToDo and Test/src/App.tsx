import ThemeToggle from "@/components/ThemeToggle";
import TodoPage from './pages/TodoPage';
import './index.css'; 

function App() {
  return (
   
    <div className="min-h-screen flex flex-col gap-28 items-center">
      <ThemeToggle />
      <TodoPage />
    </div>
  );
}

export default App;