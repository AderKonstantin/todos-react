import { Link } from "react-router-dom";

export default function TodoList(props) {
  return (
    <section>
      <h1>Tasks</h1>
      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {props.list.map((item) => (
            <tr key={item.key}>
              <td>
                <Link to={`/${item.key}`}>
                  {item.done && <del>{item.title}</del>}
                  {!item.done && item.title}
                </Link>
              </td>
              <td>
                <button
                  className="button is-success"
                  title="Done"
                  disabled={item.done}
                  onClick={(e) => props.setDone(item.key)}
                >
                  &#9745;
                </button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title="Delete"
                  onClick={(e) => props.delete(item.key)}
                >
                  &#9746;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
