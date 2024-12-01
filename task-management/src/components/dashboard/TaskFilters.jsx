
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
export const TaskFilters = ({ filters, onFilterChange, onAddClick }) => {
  return (
    <Paper sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <TextField
        label="Search tasks"
        variant="outlined"
        size="small"
        // eslint-disable-next-line react/prop-types
        value={filters.search}
        onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
        sx={{ minWidth: 200 }}
      />
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Status</InputLabel>
        <Select
          // eslint-disable-next-line react/prop-types
          value={filters.status}
          label="Status"
          onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          // eslint-disable-next-line react/prop-types
          value={filters.priority}
          label="Priority"
          onChange={(e) => onFilterChange({ ...filters, priority: e.target.value })}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddClick}
      >
        Add Task
      </Button>
    </Paper>
  );
};