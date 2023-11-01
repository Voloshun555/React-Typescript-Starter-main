import React, { FC, useState } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AditPizzaForm from "../EditPizzaForm/EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const hendleToggleEdit = () => {
    setEdit(!edit);
  };

  const hendleDelete = () => {
    deletePizza(pizza.id);
  };
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={hendleToggleEdit} />
        <AiFillDelete onClick={hendleDelete} />
      </div>

      {edit ? (
        <AditPizzaForm
          hendleToggleEdit={hendleToggleEdit}
          updatePizza={updatePizza}
          data={pizza}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
