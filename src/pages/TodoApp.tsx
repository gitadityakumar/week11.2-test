import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StickyNote, ArrowLeft, ListTodo, CheckCircle2 } from 'lucide-react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { Todo } from '../types';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Calculate stats
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const progress = totalTodos ? Math.round((completedTodos / totalTodos) * 100) : 0;

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos([...todos, {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Todo Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <StickyNote className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
            </div>

            {/* Stats Bar */}
            {totalTodos > 0 && (
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <ListTodo className="w-4 h-4" />
                  <span>Total: {totalTodos}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Completed: {completedTodos}</span>
                </div>
                <div className="flex-1 max-w-[200px]">
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Todo Content */}
          <div className="p-8">
            <TodoInput 
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              addTodo={addTodo}
            />

            <div className="mt-8">
              {todos.length > 0 ? (
                <TodoList 
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ) : (
                <div className="text-center py-12">
                  <div className="bg-gray-50 rounded-2xl p-8 max-w-sm mx-auto">
                    <ListTodo className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-gray-800 font-medium mb-2">No tasks yet</h3>
                    <p className="text-gray-500 text-sm">
                      Add your first task using the input above to get started!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Tip: Click a task to mark it as complete
        </div>
      </div>
    </div>
  );
};

export default TodoApp;