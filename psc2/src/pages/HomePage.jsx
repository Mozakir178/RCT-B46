
import { useEffect, useState } from "react";
import { useIdeas } from "../context/IdeaContext";
import { listenToIdeas } from "../firebase/ideasAPI";
import IdeaForm from "../components/IdeaForm";
import IdeaList from "../components/IdeaList";
import IdeaPagination from "../components/IdeaPagination";
import IdeaFilterSort from "../components/IdeaFilterSort";
import Loader from "../components/Loader";

const ITEMS_PER_PAGE = 8;

const HomePage = () => {
  const { ideas, setIdeas, loading, setLoading } = useIdeas();
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [editIdea, setEditIdea] = useState(null);

  useEffect(() => {
    const unsubscribe = listenToIdeas((data) => {
      setIdeas(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setIdeas, setLoading]);

  if (loading) return <Loader />;

  const filtered = ideas.filter((idea) => filter === "All" || idea.category === filter);
  const sorted = [...filtered].sort((a, b) => {
    if(sortBy === "nameAsc") return a.title.localeCompare(b.title);
    if (sortBy === "urgencyHigh") return b.urgency.localeCompare(a.urgency);
    if (sortBy === "urgencyLow") return a.urgency.localeCompare(b.urgency);
    if (sortBy === "newest") return b.createdAt - a.createdAt;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const currentIdeas = sorted.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      <IdeaForm editIdea={editIdea} setEditIdea={setEditIdea} />
      <IdeaFilterSort filter={filter} setFilter={setFilter} sortBy={sortBy} setSortBy={setSortBy} />

      {ideas.length === 0 ? (
        <p>No ideas yet. Start typing your genius thought above!</p>
      ) : (
        <>
          <IdeaList currentIdeas={currentIdeas} setEditIdea={setEditIdea} />
          <IdeaPagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </>
  );
};

export default HomePage;
