import { v4 as uuidv4 } from "uuid";

export async function getTasks() {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get task");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function addTask(values: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: uuidv4(), task: values, completed: false }),
    });

    if (!response.ok) {
      throw new Error("Не удалось добавить задачу");
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function changeStatusTask(id: string, completed: boolean) {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: completed }),
    });

    if (!response.ok) {
      throw new Error("Не удалось изменить статус задачи");
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function deleteTask(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось изменить статус задачи");
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return err;
  }
}
