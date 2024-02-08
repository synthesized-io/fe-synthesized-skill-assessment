import { useGetTasksQuery } from "@app/api";
import { Table } from "@ui/elements";
export const TasksTable = () => {
  const { data: tasks = [], isSuccess } = useGetTasksQuery();

  if (!isSuccess) return null;
  return (
    <Table.Body>
      <Table.Row>
        <Table.Header>id</Table.Header>
        <Table.Header>user name</Table.Header>
        <Table.Header>status</Table.Header>
        <Table.Header>created date</Table.Header>
      </Table.Row>
      {tasks.map((task, id) => (
        <Table.Row key={id}>
            <Table.Cell>{task?.id}</Table.Cell>
            <Table.Cell>{task?.user_name}</Table.Cell>
            <Table.Cell>{task?.status}</Table.Cell>
            <Table.Cell>{task?.created_date}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
