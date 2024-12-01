/* eslint-disable react/prop-types */

import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';


export const TaskCard = ({ task }) => {
  const theme = useTheme();

  const getPriorityColor = (priority) => {
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

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {task.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'white',
              bgcolor: getPriorityColor(task.priority),
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {task.priority}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Due: {task.dueDate}
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{
            bgcolor: task.status === 'completed' ? 'success.light' : 'warning.light',
            px: 1,
            py: 0.5,
            borderRadius: 1,
          }}
        >
          {task.status}
        </Typography>
      </CardContent>
    </Card>
  );
};