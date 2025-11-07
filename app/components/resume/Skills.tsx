import React from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiPhp, SiC, SiHtml5, SiCss3, SiGnubash ,
  SiNodedotjs, SiExpress, SiNestjs, SiReact, SiLaravel, SiJquery, SiBootstrap, SiNextdotjs,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiAmazondynamodb, SiSqlite,
  SiAmazon, SiDocker, SiKubernetes, SiJenkins, SiRender,
  SiPostman, SiGit, SiLinux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


const SkillCard = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md transition hover:bg-white/20 hover:-translate-y-1 shadow-sm border border-white/20">
    <Icon className="text-3xl mb-2" />
    <p className="text-sm font-medium">{label}</p>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mt-8">
    <h2 className="text-2xl font-bold">Skills</h2>

      {/* Languages */}
      <div>
        <h3 className="text-xl font-semibold pt-8 mb-4">Languages</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <SkillCard icon={SiPython} label="Python" />
          <SkillCard icon={SiJavascript} label="JavaScript" />
          <SkillCard icon={SiTypescript} label="TypeScript" />
          <SkillCard icon={SiPhp} label="PHP" />
          <SkillCard icon={FaJava} label="Java" />
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <SkillCard icon={SiNodedotjs} label="Node.js" />
          <SkillCard icon={SiExpress} label="Express.js" />
          <SkillCard icon={SiReact} label="React" />
          <SkillCard icon={SiLaravel} label="Laravel" />
          <SkillCard icon={SiNextdotjs} label="Next.js" />
        </div>
      </div>

      {/* Databases */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Databases</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <SkillCard icon={SiMysql} label="MySQL" />
          <SkillCard icon={SiPostgresql} label="PostgreSQL" />
          <SkillCard icon={SiMongodb} label="MongoDB" />
          <SkillCard icon={SiFirebase} label="Firebase" />
          <SkillCard icon={SiAmazondynamodb} label="DynamoDB" />
        </div>
      </div>

      {/* Cloud / DevOps */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <SkillCard icon={SiAmazon} label="AWS" />
          <SkillCard icon={SiDocker} label="Docker" />
          <SkillCard icon={SiKubernetes} label="Kubernetes" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
