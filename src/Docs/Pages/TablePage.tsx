import { Badge, Button, Table, type TableProps } from "../../components";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
};

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Teacher",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Student",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@example.com",
    role: "Student",
    status: "Active",
  },
];

const columns: TableProps<User>["columns"] = [
  {
    key: "id",
    title: "ID",
    width: 80,
    align: "center",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "role",
    title: "Role",
    align: "center",
  },
  {
    key: "status",
    title: "Status",
    align: "center",
    render: (value: any) => (
      <Badge
        label={String(value)}
        variant={value === "Active" ? "success" : "error"}
      />
    ),
  },
  {
    key: "action",
    title: "Action",
    align: "center",
    render: () => <Button size="sm" label="View" />,
  },
];

const TablePage = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl">
      <h1 className="text-2xl font-bold">Table Showcase</h1>

      <section className="space-y-4">
        <h2 className="font-semibold">Default</h2>

        <Table<User> columns={columns} data={users} rowKey="id" />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Bordered</h2>

        <Table<User>
          columns={columns}
          data={users}
          rowKey="id"
          variant="bordered"
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Minimal</h2>

        <Table<User>
          columns={columns}
          data={users}
          rowKey="id"
          variant="minimal"
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Striped Rows</h2>

        <Table<User> columns={columns} data={users} rowKey="id" striped />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Loading</h2>

        <Table<User> columns={columns} data={[]} rowKey="id" loading />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Empty State</h2>

        <Table<User>
          columns={columns}
          data={[]}
          rowKey="id"
          emptyText="No users found"
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Clickable Rows</h2>

        <Table<User>
          columns={columns}
          data={users}
          rowKey="id"
          onRowClick={(row: any) => alert(`Clicked ${row.name}`)}
        />
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Large Size</h2>

        <Table<User> columns={columns} data={users} rowKey="id" size="lg" />
      </section>
    </div>
  );
};

export default TablePage;
