import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  return {
    props: {
      todos,
    },
  };
}

export default function todos({ todos }) {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Tarefas para fazer:</h1>
      <ul className="w-96 mx-auto my-1">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2 pb-2 border-b-2 border-white">
            {todo.id} - {todo.title} -{" "}
            {todo.completed ? (
              <span className="text-green-500">Concluído</span>
            ) : (
              <span className="text-red-500">Pendente</span>
            )}{" "}
            -{" "}
            <Link href={`/todos/${todo.id}`}>
              <a>Ver</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
