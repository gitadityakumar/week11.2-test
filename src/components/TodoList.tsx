import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="group flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:bg-white/70"
        >
          <button
            onClick={() => toggleTodo(todo.id)}
            className="flex-shrink-0 focus:outline-none"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 hover:text-indigo-600 transition-colors" />
            )}
          </button>
          
          <span
            className={`flex-grow text-gray-800 ${
              todo.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {todo.text}
          </span>
          
          <button
            onClick={() => deleteTodo(todo.id)}
            className="flex-shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity focus:outline-none"
          >
            <Trash2 className="w-5 h-5 text-red-500 hover:text-red-600 transition-colors" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;