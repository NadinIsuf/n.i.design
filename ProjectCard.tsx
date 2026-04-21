import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link className={large ? "project-card project-card-large" : "project-card"} href={`/projects/${project.slug}`}>
      <span className="image-shell">
        <img src={project.coverImage} alt="" />
      </span>
      <span className="project-overlay">
        <span className="project-meta">
          {project.category} · {project.location}
        </span>
        <span className="project-title">{project.title}</span>
        <span className="project-description">{project.shortDescription}</span>
      </span>
    </Link>
  );
}
