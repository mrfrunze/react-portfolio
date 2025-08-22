import type { SkillGroup as SkillGroupType } from "../data/skills";
import ProgressBar from "./ProgressBar";

export default function SkillGroup({ title, items }: SkillGroupType) {
  return (
    <div>
      <p className="font-semibold text-[1.1rem] text-[#1e1e1e] mb-3">{title}</p>
      {items.map((skill) => (
        <ProgressBar key={skill.name} label={skill.name} value={skill.value} />
      ))}
    </div>
  );
}