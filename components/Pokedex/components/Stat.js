export default function Stat({ children }) {
  return (
    <>
      <div className="text-left font-mono text-xs text-slate-400">
        <small>{children[0]}</small>
      </div>
      <div className="h-1 w-full rounded-full bg-transparent">
        <div
          className={`${children[1]} h-1 rounded-full`}
          style={{
            width: `${children[2]}%`,
          }}
        ></div>
      </div>
    </>
  );
}
