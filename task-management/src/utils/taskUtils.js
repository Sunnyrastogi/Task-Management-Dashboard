export const getPriorityColor = (priority, theme) => {
    switch (priority) {
      case 'high':
        return theme.palette.error.main;
      case 'medium':
        return theme.palette.warning.main;
      case 'low':
        return theme.palette.success.main;
      default:
        return theme.palette.text.secondary;
    }
  };
  
  export const calculateCompletionPercentage = (tasks) => {
    if (!tasks.length) return 0;
    return (tasks.filter(task => task.status === 'completed').length / tasks.length) * 100;
  };