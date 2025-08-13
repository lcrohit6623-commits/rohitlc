
export default function Illustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Analytics Illustration">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#8EC5FC" />
          <stop offset="100%" stopColor="#E0C3FC" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" rx="24" fill="url(#g1)" opacity="0.2" />
      <rect x="40" y="40" width="320" height="200" rx="16" fill="white" opacity="0.9"/>
      <rect x="60" y="70" width="120" height="14" rx="7" fill="#94a3b8"/>
      <rect x="60" y="95" width="80" height="10" rx="5" fill="#cbd5e1"/>
      <rect x="60" y="115" width="260" height="110" rx="10" fill="#f1f5f9"/>
      <polyline points="70,205 120,180 170,190 220,150 270,165 320,130" fill="none" stroke="#6366f1" strokeWidth="3"/>
      <rect x="240" y="70" width="100" height="14" rx="7" fill="#94a3b8"/>
      <rect x="260" y="95" width="60" height="10" rx="5" fill="#cbd5e1"/>
    </svg>
  );
}
