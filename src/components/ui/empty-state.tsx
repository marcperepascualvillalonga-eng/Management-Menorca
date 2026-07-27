import Link from "next/link";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="empty-state">
      <span aria-hidden="true">—</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? <Link className="text-link" href={action.href}>{action.label} <span>↗</span></Link> : null}
    </div>
  );
}
