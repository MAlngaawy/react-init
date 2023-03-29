import React, { useEffect } from "react";
import { useGetTodosQuery } from "../../App/Api/apiSlice";

type Props = {};

const Todos = (props: Props) => {
  const { data: todos } = useGetTodosQuery({});
  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);
  return (
    <div className="m-4">
      {todos?.map(({ completed, id, title, userId }) => {
        return (
          <h2
            className="my-2 text-sm"
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
            key={id}
          >
            {title}
          </h2>
        );
      })}
    </div>
  );
};

export default Todos;
