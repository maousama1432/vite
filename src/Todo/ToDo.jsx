import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("List")) || []);
  const [activity, setActivity] = useState("");
  const [id, setId] = useState(list[list.length - 1]?.id + 1 || 1);
  const [hp, setHp] = useState(0);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [energyRecharge, setEnergyRecharge] = useState(0);
  const [elementalMastery, setElementalMastery] = useState(0);
  const [elementBonus, setElementBonus] = useState(0);
  const [critRate, setCritRate] = useState(0);
  const [critDMG, setCritDMG] = useState(0);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);

  const calculateTotalDamageOutput = () => {
    // Calcule a saída de dano total com base nos atributos do personagem.
    // Esta fórmula pode ser personalizada para o seu jogo ou necessidades específicas.
    const totalDamageOutput =
      atk + def + energyRecharge + elementalMastery + elementBonus + critRate + critDMG;

    return totalDamageOutput;
  };

  const save = (e) => {
    e.preventDefault();
    setList([...list, { activity: activity, id: id }]);
    setId(id + 1);
    setActivity("");
  };

  const remove = (id) => {
    const auxList = [];
    list.map((item) => {
      if (item.id !== id) {
        auxList.push(item);
      }
    });
    setList(auxList);
  };

  const getTotalDamageOutputDisplay = () => {
    const totalDamageOutput = calculateTotalDamageOutput();
    return (
      <h1 style={{ color: "red" }}>{totalDamageOutput}</h1>
    );
  };

  return (
    <div className="container">
      <Link to="/">home</Link>
      <h1>Lista de Atividades</h1>
      <form onSubmit={save}>
  <input
    type="number"
    placeholder="HP"
    value={hp}
    onChange={(e) => {
      setHp(e.target.value);
    }}
  />
  <input
    type="number"
    placeholder="ATK"
    value={atk}
    onChange={(e) => {
      setAtk(e.target.value);
    }}
  />
  <input
    type="number"
    placeholder="DEF"
    value={def}
    onChange={(e) => {
      setDef(e.target.value);
    }}
  />
  <input
    type="number"
    placeholder="energyRecharge"
    value={energyRecharge}
    onChange={(e) => {
        setEnergyRecharge(e.target.value);
    }}
  />
<input
    type="number"
    placeholder="elementalMastery"
    value={elementalMastery}
    onChange={(e) => {
        setElementalMastery(e.target.value);
    }}
  />
<input
    type="number"
    placeholder="ElementBonus"
    value={elementBonus}
    onChange={(ElementBonus) => {
        setElementBonus(e.target.value);
    }}
  />
<input
    type="number"
    placeholder="critRate"
    value={critRate}
    onChange={(e) => {
        setCritRate(e.target.value);
    }}
  />
<input
    type="number"
    placeholder="critDMG"
    value={critDMG}
    onChange={(e) => {
        setCritDMG(e.target.value);
    }}
  />
  <button>Adicionar</button>
</form>
      {getTotalDamageOutputDisplay()}
      {list.map((active) => (
        <ul key={active.id}>
          <li>
            <p>{active.activity}</p>
            <button onClick={() => remove(active.id)}>Remover</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
