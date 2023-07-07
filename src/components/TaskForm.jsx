/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      titulo,
      descricao,
    });

    setTitulo("");
    setDescricao("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Adicione uma tarefa</h1>
        <input
          placeholder="Escreva uma tarefa"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descrição da tarefa"
          onChange={(e) => setDescricao(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={descricao}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Adicionar</button>
      </form>
    </div>
  );
}

export default TaskForm;
