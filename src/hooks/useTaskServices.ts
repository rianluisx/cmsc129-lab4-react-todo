import Task from "../types/task";

export default function useTaskServices() {
  const API_URL = "http://localhost:5000/tasks";

  async function getTasks(): Promise<Task[]> {
    const res = await fetch(API_URL);
    if (!res.ok) {
      console.error("Failed to fetch tasks");
    }

    return await res.json();
  }

  async function addTask(task: Omit<Task, "id">): Promise<Task> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) {
      console.error("Failed to add tasks");
    }
    return await res.json();
  }

  async function updateToggle(task: Task): Promise<Task> {
    const res = await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) {
      console.error("Failed to udpate toggle");
    }
    return await res.json();
  }

  async function editTask(task: Task): Promise<Task> {
    const res = await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) {
      console.error("Failed to fetch edit task");
    }
    return await res.json();
  }

  async function removeTask(taskId: number): Promise<void> {
    const res = await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("Failed to remove task");
    }
  }

  async function undoDelete(task: Task): Promise<Task> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) {
      console.log("Failed to undo delete");
    }
    return await res.json();
  }

  return { addTask, removeTask, editTask, undoDelete, updateToggle, getTasks };
}
