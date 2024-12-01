export const TASK_PRIORITIES = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low',
  };
  
  export const TASK_STATUSES = {
    PENDING: 'pending',
    COMPLETED: 'completed',
  };
  
  export const INITIAL_TASKS = [
    { id: 1, title: 'Complete dashboard design', status: 'pending', priority: 'high', dueDate: '2024-12-01' },
    { id: 2, title: 'Implement search functionality', status: 'completed', priority: 'medium', dueDate: '2024-12-02' },
    { id: 3, title: 'Add responsive layouts', status: 'pending', priority: 'high', dueDate: '2024-12-03' },
    { id: 4, title: 'Write unit tests', status: 'pending', priority: 'low', dueDate: '2024-12-04' },
  ];