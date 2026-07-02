export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DemandFlowww"
    >
      {/* "D" — thick vertical bar + curved right side */}
      <path
        d="M7 5h5a6 6 0 016 6v10a6 6 0 01-6 6H7V5z"
        fill="none"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10h3a3.5 3.5 0 013.5 3.5v5a3.5 3.5 0 01-3.5 3.5h-3V10z"
        fill="#2563EB"
      />

      {/* "F" — top-right, shares vertical with D's right edge */}
      <path
        d="M17 10h8M17 16h5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
