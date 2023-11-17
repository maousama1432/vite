import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("List")) || []);
    const [activity, setActivity] = useState("");
    const [id, setId] = useState(list[list.length - 1]?.id + 1 || 1);

    useEffect(() => { localStorage.setItem("List", JSON.stringify(list)) }, [list]);

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
    }
    return (
        <div class="container">
            <Link to="/">home</Link>
            <h1>List of Activities</h1>
            <form onSubmit={save}>
                <input type="text"
                    value={activity}
                    onChange={(e) => { setActivity(e.target.value) }} />
                <button>ADD</button>
            </form>
            {list.map((active) =>
                <ul key={active.id}>
                    <li>
                        <p>{active.activity}</p>
                        <button onClick={() => remove(active.id)}>Remove</button>
                    </li>
                </ul>
            )}
        </div>
    );
}