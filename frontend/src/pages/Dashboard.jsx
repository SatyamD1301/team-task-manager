const tasks = [
  {
    title: "Build Login Page",
    assignedTo: "Satyam",
    status: "Pending",
    dueDate: "15 May 2026"
  },
  {
    title: "Create Dashboard",
    assignedTo: "Satyam",
    status: "Completed",
    dueDate: "10 May 2026"
  }
];

export default function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh"
      }}
    >
      <h1 style={{
        marginBottom: "10px"
      }}>
        Team Task Manager Dashboard
      </h1>

      <h2 style={{
        color: "#555"
      }}>
        Role: {role}
      </h2>

      {role === "admin" && (
        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + Create New Task
        </button>
      )}

      <h2 style={{
        marginTop: "30px"
      }}>
        Task List
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px"
      }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
            }}
          >
            <h3>{task.title}</h3>
            <p><strong>Assigned To:</strong> {task.assignedTo}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}