import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link className="blog-card" href={`/blog/${post.slug}`}>
      <span className="image-shell">
        <img src={post.coverImage} alt="" />
      </span>
      <span className="blog-card-copy">
        <span className="eyebrow">{formatDate(post.date)}</span>
        <span className="blog-title">{post.title}</span>
        <span className="muted">{post.preview}</span>
      </span>
    </Link>
  );
}
