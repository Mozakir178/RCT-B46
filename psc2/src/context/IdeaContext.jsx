import { createContext, useContext, useState } from "react";

const IdeaContext = createContext();

export const IdeaProvider = ({ children }) => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <IdeaContext.Provider value={{ ideas, setIdeas, loading, setLoading }}>
      {children}
    </IdeaContext.Provider>
  );
};

export const useIdeas = () => useContext(IdeaContext);
