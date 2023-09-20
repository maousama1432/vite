import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [vida, setVida] = useState("");
  const [ataque, setAtaque] = useState("");
  const [Defesa, setDefesa] = useState("");
  const [Proficiencia, setProficiencia] = useState("");
  const [TaxaCritica, setTaxaCritica] = useState("");
  const [DanoCritico, setDanoCritico] = useState("");
  const [RecargadeEnergia, setRecargadeEnergia] = useState("");
  const [lista, setLista] = useState([]);
  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([...lista, {
      vida: vida,
      ataque: ataque,
      Defesa: Defesa,
      Proficiencia: Proficiencia,
      TaxaCritica: TaxaCritica,
      DanoCritico: DanoCritico,
      RecargadeEnergia: RecargadeEnergia,
      id: id
    }]);
    setId(id + 1);
    setVida("");
    setAtaque("");
    setDefesa("");
    setProficiencia("");
    setTaxaCritica("");
    setDanoCritico("");
    setRecargadeEnergia("");
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
        <input type="number" placeholder="Vida" value={vida} onChange={(e) => { setVida(e.target.value) }} />
        <input type="number" placeholder="Ataque" value={ataque} onChange={(e) => { setAtaque(e.target.value) }} />
        <input type="number" placeholder="Defesa" value={Defesa} onChange={(e) => { setDefesa(e.target.value) }}/>
        <input type="number" placeholder="Proficiencia" value={Proficiencia} onChange={(e) => { setProficiencia(e.target.value) }}/>
        <input type="number" placeholder="Taxa Critica" value={TaxaCritica} onChange={(e) => { setTaxaCritica(e.target.value) }}/>
        <input type="number" placeholder="Dano Critico" value={DanoCritico} onChange={(e) => { setDanoCritico(e.target.value) }}/>
        <input type="number" placeholder="Recarga de Energia" value={RecargadeEnergia} onChange={(e) => { setRecargadeEnergia(e.target.value) }}/>
        <button>ADICIONAR</button>
      </form>
      
      {lista.map((ativ) =>
        <ul key={ativ.id}>
          <li>
            <p>Vida: {ativ.vida}</p>
            <p>Ataque: {ativ.ataque}</p>
            <p>Defesa: {ativ.Defesa}</p>
            <p>Proficiencia: {ativ.Proficiencia}</p>
            <p>Taxa Critica: {ativ.TaxaCritica}</p>
            <p>Dano Critica: {ativ.DanoCritico}</p>
            <p>Recargade Energia: {ativ.RecargadeEnergia}</p>
            <button onClick={() => remover(ativ.id)}>Remover</button>
          </li>
        </ul>
      )}
    </div>
  );
}
