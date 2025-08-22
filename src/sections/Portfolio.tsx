import { useMemo, useState } from "react";
import PortfolioTabs from "../components/PortfolioTabs";
import PortfolioCard from "../components/PortfolioCard";
import {
  filterProjects,
  Projects,
  type Project,
  type TabValue,
} from "../data/projects";

const Portfolio = () => {
  const [active, setActive] = useState<TabValue>("all");

  const filtered: Project[] = useMemo(
    () => filterProjects(Projects, active),
    [active]
  );
  return (
    <section id="work" className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">PORTFOLIO</h2>
          <p className="mt-2 text-[#4e4e4e] capitalize">My Projects</p>
          <div className="mx-auto mt-3 h-1 w-10 bg-[#0078ff]" />
        </div>
         <PortfolioTabs value={active} onChange={setActive} className="mb-6" />
         <ul className="flex flex-wrap gap-6 justify-center">
            {filtered && (
                filtered.map(project => (
                    <PortfolioCard
                        key={project.id}
                        project={project}
                        className="w-full sm:w-[300px] flex-shrink-0"
                    />
                ))
            )}
         </ul>
      </div>
    </section>
  );
};

export default Portfolio;
