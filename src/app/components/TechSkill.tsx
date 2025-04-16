import { FC } from 'react';

const TechSkill: FC = () => {
  const skills = ["JS", "TS", "React", "Tailwindcss", "Premierepro"];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">Tech Skill</h2>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 bg-gray-50 border rounded-md text-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkill; 