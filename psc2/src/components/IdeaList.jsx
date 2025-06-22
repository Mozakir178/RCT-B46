
import { deleteIdea } from "../firebase/ideasAPI";

const IdeaList = ({ currentIdeas, setEditIdea }) => {
  if (currentIdeas.length === 0) {
    return <p>No ideas match the selected filter.</p>;
  }

  return (
    <div className="idea-list">
      {currentIdeas.map((idea) => {
        const isAI = idea.title.toLowerCase().includes("ai");
        return (
          <div
            key={idea.id}
            className={`idea-card ${idea.urgency.toLowerCase()} ${isAI ? "ai-highlight" : ""}`}
          >
            <h3>{idea.title}</h3>
            <p>{idea.category} | {idea.urgency}</p>
            <div style={{ marginTop: "0.5rem" }}>
              <button onClick={() => setEditIdea(idea)}>Edit</button>{" "}
              <button onClick={() => deleteIdea(idea.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IdeaList;
