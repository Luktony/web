import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { api } from "../../lib/axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NewTaskForm() {
  const [title, setTitle] = useState("");

  async function createNewTask(event: FormEvent) {
    event.preventDefault();

    if (!title) {
      return toast.error("Erro na criação da tarefa.");
    }

    try {
      await api.post("todo", {
        title,
      });
      setTitle("");
      toast.success("Tarefa criado com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar tarefa");
    }
  }

  return (
 
    <div className="max-w-lg w-11/12">
      
      <form onSubmit={createNewTask} className="flex flex-1 justify-between">
        <input
          type="text"
          className="w-[70%] md:w-[80%] p-2 bg-gray-500 rounded-lg"
          placeholder="Adicione nova Tarefa"
          autoFocus
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-button px-4 rounded-lg"
        >
          Criar
          <PlusCircle />
        </button>
      </form>
    </div>
   
  );
}
