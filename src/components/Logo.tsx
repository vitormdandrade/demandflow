export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight text-blue-600 ${className ?? ""}`}>
      DemandFlowww
    </span>
  );
}
