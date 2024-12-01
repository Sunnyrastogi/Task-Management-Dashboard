// src/hooks/useTaskManager.jsx
import { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Complete dashboard design', status: 'pending', priority: 'high', dueDate: '2024-12-01' },
  { id: 2, title: 'Implement search functionality', status: 'completed', priority: 'medium', dueDate: '2024-12-02' },
  { id: 3, title: 'Add responsive layouts', status: 'pending', priority: 'high', dueDate: '2024-12-03' },
  { id: 4, title: 'Write unit tests', status: 'pending', priority: 'low', dueDate: '2024-12-04' },
];

export const useTaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    priority: 'all',
  });

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const completionPercentage = (tasks.filter(task => task.status === 'completed').length / tasks.length) * 100;

  return {
    tasks: filteredTasks,
    addTask,
    setFilters,
    filters,
    completionPercentage,
  };
};