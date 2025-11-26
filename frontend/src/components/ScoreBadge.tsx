const ScoreBadge: React.FC<{ score: number; level: string }> = ({
  score,
  level,
}) => {
  let colorClass = "text-red-600 bg-red-50 border-red-200";
  if (score >= 8) colorClass = "text-green-600 bg-green-50 border-green-200";
  else if (score >= 6.5)
    colorClass = "text-yellow-600 bg-yellow-50 border-yellow-200";

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 ${colorClass} w-full md:w-48`}
    >
      <span className="text-5xl font-extrabold">
        {score}
        <span className="text-2xl text-opacity-60">/10</span>
      </span>
      <span className="mt-2 font-semibold uppercase tracking-wider text-sm">
        {level}
      </span>
    </div>
  );
};

export default ScoreBadge;
