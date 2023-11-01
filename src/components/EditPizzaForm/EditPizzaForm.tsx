import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import "../../components/styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  hendleToggleEdit: () => void
}


const AditPizzaForm: FC<EditPizzaProps> = ({
  data,
  updatePizza,
  hendleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
        updatePizza(editPizza);
        hendleToggleEdit()
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="img"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">save</button>
    </form>
  );
};

export default AditPizzaForm;
