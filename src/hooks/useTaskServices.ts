import { error } from "console";
import Task from "../types/task";

export default function useTaskServices() {
  const API_URL = "http://localhost:5000/tasks";

  async function getTasks(): Promise<Task[]> {
    const res = await fetch(API_URL);
    if (!res.ok) {
      console.error(error);
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
      console.error(error);
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
      console.error(error);
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
      console.error(error);
    }
    return await res.json();
  }

  async function removeTask(taskId: number): Promise<void> {
    const res = await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error(error);
    }
  }

  async function undoDelete(task: Task): Promise<Task> {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!res.ok) {
      console.error(error);
    }
    return await res.json();
  }

  return { addTask, removeTask, editTask, undoDelete, updateToggle, getTasks };
}
