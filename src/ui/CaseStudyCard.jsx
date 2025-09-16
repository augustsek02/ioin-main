export default function CaseStudyCard({ title, chips = [], desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full stack-sm">
      <h3 className="type-h3 font-semibold">{title}</h3>
      <p className="type-body text-slate-600">{desc}</p>
      <div className="flex flex-wrap gap-2 type-small">{chips.map((c,i)=>(
        <span key={i} className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">{c}</span>
      ))}</div>
    </div>
  );
}
