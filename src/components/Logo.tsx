export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DemandFlowww"
    >
      {/* Outer rounded square — document/envelope shape */}
      <rect
        x="1"
        y="2"
        width="30"
        height="28"
        rx="5"
        fill="#2563EB"
      />

      {/* Document fold — top-right corner */}
      <path
        d="M23 2V8C23 9.105 23.895 10 25 10H31"
        fill="#1D4ED8"
      />
      <path
        d="M23 2L31 10H25C23.895 10 23 9.105 23 8V2Z"
        fill="#93C5FD"
        opacity="0.6"
      />

      {/* Stylized "D" letterform — main mark */}
      <text
        x="7"
        y="24"
        fontFamily="Georgia, Times New Roman, serif"
        fontSize="21"
        fontWeight="bold"
        fill="white"
        fontStyle="italic"
      >
        D
      </text>

      {/* Small "F" companion */}
      <text
        x="17"
        y="24"
        fontFamily="Georgia, Times New Roman, serif"
        fontSize="11"
        fontWeight="bold"
        fill="white"
        opacity="0.9"
      >
        F
      </text>

      {/* Bottom rule — letterhead detail */}
      <line
        x1="6"
        y1="27"
        x2="26"
        y2="27"
        stroke="white"
        strokeWidth="0.8"
        opacity="0.35"
      />
    </svg>
  );
}
