import  { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import { TaskFilters } from './components/dashboard/TaskFilters';
import { ProgressBar } from './components/dashboard/ProgressBar';
import { TaskCard } from './components/dashboard/TaskCard';
import { AddTaskModal } from './components/dashboard/AddTaskModal';
import { useTaskManager } from './hooks/useTaskManager';


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { tasks, addTask, setFilters, filters, completionPercentage } = useTaskManager();

  return (
    <ThemeProvider>
      <MainLayout>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TaskFilters
                filters={filters}
                onFilterChange={setFilters}
                onAddClick={() => setModalOpen(true)}
              />
            </Grid>

            <Grid item xs={12}>
              <ProgressBar percentage={completionPercentage} />
            </Grid>

            {tasks.map((task) => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <TaskCard task={task} />
              </Grid>
            ))}
          </Grid>

          <AddTaskModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onAdd={addTask}
          />
        </Container>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;