import React from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  addTodo: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white/50 backdrop-blur-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <PlusCircle className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;