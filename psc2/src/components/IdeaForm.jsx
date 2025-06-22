
import { useState, useEffect } from "react";
import { addIdea, updateIdea } from "../firebase/ideasAPI";

const IdeaForm = ({ editIdea, setEditIdea }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Tech");
  const [urgency, setUrgency] = useState("Low");

  useEffect(() => {
    if (editIdea) {
      setTitle(editIdea.title);
      setCategory(editIdea.category);
      setUrgency(editIdea.urgency);
    }
  }, [editIdea]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim().length < 5) return;

    if (editIdea) {
      await updateIdea(editIdea.id, { title, category, urgency });
      setEditIdea(null); // reset edit
    } else {
      await addIdea({ title, category, urgency });
    }

    setTitle("");
    setCategory("Tech");
    setUrgency("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Idea title" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Tech</option>
        <option>Art</option>
        <option>Philosophy</option>
        <option>Random</option>
      </select>
      <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{editIdea ? "Update Idea" : "Add Idea"}</button>
    </form>
  );
};

export default IdeaForm;
