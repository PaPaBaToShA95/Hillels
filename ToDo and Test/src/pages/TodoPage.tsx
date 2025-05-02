
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2 } from 'lucide-react';


interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const LOCAL_STORAGE_KEY = 'vite-react-todo-list';

const loadTodosFromLocalStorage = (): Todo[] => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState) as Todo[];
    } catch (error) {
        console.error("Error loading todos from localStorage:", error);
        return [];
    }
};

const saveTodosToLocalStorage = (todos: Todo[]) => {
    try {
        const serializedState = JSON.stringify(todos);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (error) {
        console.error("Error saving todos to localStorage:", error);
    }
};


const TodoPage: React.FC = () => {

    const [newTodoText, setNewTodoText] = useState<string>('');

    const [todos, setTodos] = useState<Todo[]>(() => loadTodosFromLocalStorage());

    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);


    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoText.trim()) {
            const newTodo: Todo = {
                id: uuidv4(),
                text: newTodoText.trim(),
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setNewTodoText('');
        }
    };

    const handleToggleTodo = (id: string) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container mx-auto py-8 px-4 max-w-md">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Список справ (TODO)</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
                        <Input
                            type="text"
                            placeholder="Додати нову справу..."
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit">Додати</Button>
                    </form>
                    {todos.length === 0 ? (
                        <p className="text-center text-gray-500">Список порожній. Додайте першу справу!</p>
                    ) : (
                        <ScrollArea className="h-[300px]">
                            <ul className="space-y-4">
                                {todos.map((todo) => (
                                    <li key={todo.id}>
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    id={`todo-${todo.id}`}
                                                    name='checkbox'
                                                    checked={todo.completed}
                                                    onCheckedChange={() => handleToggleTodo(todo.id)}
                                                />
                                                <Label
                                                    htmlFor={`todo-${todo.id}`}
                                                    className={`cursor-pointer text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}
                                                >
                                                    {todo.text}
                                                </Label>
                                            </div>
                                            <Button 
                                                type="delete"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleDeleteTodo(todo.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <Separator className="mt-4" />
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default TodoPage;