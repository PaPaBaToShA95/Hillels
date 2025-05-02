import ThemeToggle from "@/components/ThemeToggle";
import TodoPage from './pages/TodoPage';
import './index.css'; 

function App() {
  return (
   
    <div className="min-h-screen bg-gray-100">
      <ThemeToggle />
      <TodoPage />
    </div>
  );
}

export default App;