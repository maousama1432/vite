import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([...lista, {
      atividade: atividade,
      id: id
    }]);
    setId(id + 1);
    setAtividade("");
  };
  const remover = (id) => {
    const auxLista = [];
    lista.map((lista) => {
      if (lista.id !== id) {
        auxLista.push(lista);
      }
    });
    setLista(auxLista);
  };

  return (
    <div>
      <Link to="/">home</Link>
      <h1>Lista de Atividades</h1>
      <form onSubmit={salvar}>
        <input type="text" placeholder="Vida" value={atividade} onChange={(e) => { setAtividade(e.target.value) }} />
        <input type="text" placeholder="Ataque" />
        <input type="text" placeholder="Defesa" />
        <input type="text" placeholder="Proficiencia Elemental" />
        <input type="text" placeholder="Taxa Critica" />
        <input type="text" placeholder="Dano Critico" />
        <input type="text" placeholder="Recarga de Energia" />
        <button>ADICIONAR</button>
      </form>
      
      {lista.map((ativ) =>
        <ul key={ativ.id}>
          <li>
            <p>{ativ.atividade}</p>
            <button onClick={() => remover(ativ.id)}>Remover</button>
          </li>
        </ul>
      )}
    </div>
  );
}
