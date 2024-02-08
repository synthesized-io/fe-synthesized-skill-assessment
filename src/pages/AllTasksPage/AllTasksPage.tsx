import { TasksTable } from "@app/widgets"
import { Stack } from "@ui/design-system/jsx"

export const AllTasksPage = () => {
    return (
        <Stack>
            <h1>All Tasks Page</h1>
            <TasksTable />            
        </Stack>
    );
}