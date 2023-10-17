import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

export default function Add({ handleSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleAdding = () => {
    handleSubmit({
      id: uuidv4(),
      title: title,
      description: description,
      rating: rating,
      posterURL: posterURL,
    });

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <div>
      <div className="form">
        <div className="Add">
          <h1>Add Movies</h1>
        </div>
        <div className="subtitle">Let's add new movies!</div>
        <div className="input-container ic1">
          <input
            id="Title"
            className="input"
            type="text"
            placeholder="Title of the movie"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button type="button" className="submit" onClick={handleAdding}>
          Submit
        </button>
      </div>
    </div>
  );
}
