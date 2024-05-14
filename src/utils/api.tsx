import { v4 as uuidv4 } from "uuid";
import { Value } from "./interface";

// Функция для получения задач с сервера
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

// Функция для добавления задачи на сервер
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

// Функция с запросом на изменение статуса задачи
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

// Функция для удаления задач с сервера
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

// Функция для отправки данных пользователя на сервер
export async function registerUser(user: Value) {
  try {
    const response = await fetch(`${process.env.API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });

    if (!response.ok) {
      throw new Error("Не удалось отправить данные пользователя на сервер");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
