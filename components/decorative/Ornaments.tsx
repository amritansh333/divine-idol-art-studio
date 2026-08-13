export function PeacockFeather({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 80 200"
      fill="none"
      aria-hidden
    >
      <path
        d="M40 200 C40 140 20 100 40 20 C60 100 40 140 40 200Z"
        fill="url(#featherGrad)"
        opacity="0.85"
      />
      <circle cx="40" cy="45" r="18" fill="#126C75" opacity="0.6" />
      <circle cx="40" cy="45" r="10" fill="#236B55" opacity="0.8" />
      <circle cx="40" cy="45" r="4" fill="#B88932" />
      <path
        d="M40 63 V180"
        stroke="#B88932"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="featherGrad" x1="20" y1="20" x2="60" y2="200">
          <stop offset="0%" stopColor="#126C75" />
          <stop offset="50%" stopColor="#236B55" />
          <stop offset="100%" stopColor="#64152D" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Lotus({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" aria-hidden>
      <path
        d="M50 55 C30 45 15 35 20 25 C25 15 35 20 50 30 C65 20 75 15 80 25 C85 35 70 45 50 55Z"
        fill="#B51F4B"
        opacity="0.4"
      />
      <path
        d="M50 50 C35 42 25 32 30 22 C35 12 42 18 50 28 C58 18 65 12 70 22 C75 32 65 42 50 50Z"
        fill="#D7B56D"
        opacity="0.5"
      />
      <ellipse cx="50" cy="28" rx="8" ry="12" fill="#FFF8ED" opacity="0.8" />
    </svg>
  );
}

export function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 20"
      fill="none"
      aria-hidden
    >
      <path d="M0 10 H120" stroke="#B88932" strokeWidth="0.75" />
      <path d="M180 10 H300" stroke="#B88932" strokeWidth="0.75" />
      <circle cx="150" cy="10" r="4" fill="none" stroke="#B88932" strokeWidth="0.75" />
      <path
        d="M150 6 L152 10 L150 14 L148 10 Z"
        fill="#B88932"
        opacity="0.6"
      />
    </svg>
  );
}

export function Diya({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 50" fill="none" aria-hidden>
      <ellipse cx="20" cy="38" rx="16" ry="8" fill="#B88932" opacity="0.6" />
      <path d="M8 38 Q20 20 32 38" fill="#64152D" opacity="0.5" />
      <ellipse cx="20" cy="22" rx="4" ry="8" fill="#D7B56D" opacity="0.8" />
      <ellipse cx="20" cy="18" rx="2" ry="4" fill="#FFF8ED" opacity="0.9" />
    </svg>
  );
}

export function Paisley({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" aria-hidden>
      <path
        d="M30 5 C10 25 5 50 30 75 C55 50 50 25 30 5Z"
        stroke="#B88932"
        strokeWidth="0.75"
        fill="#B88932"
        fillOpacity="0.08"
      />
      <circle cx="30" cy="35" r="6" fill="#B51F4B" opacity="0.2" />
    </svg>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke="#B88932" strokeWidth="0.75" opacity="0.5" />
      <path
        d="M24 38 C24 28 14 22 24 10 C34 22 24 28 24 38Z"
        fill="url(#brandFeather)"
        opacity="0.7"
      />
      <circle cx="24" cy="18" r="4" fill="#126C75" opacity="0.8" />
      <defs>
        <linearGradient id="brandFeather" x1="14" y1="10" x2="34" y2="38">
          <stop stopColor="#126C75" />
          <stop stopColor="#236B55" />
        </linearGradient>
      </defs>
    </svg>
  );
}
