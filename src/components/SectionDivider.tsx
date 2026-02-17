interface SectionDividerProps {
  variant?: 'light' | 'dark';
}

export default function SectionDivider({ variant = 'light' }: SectionDividerProps) {
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'rgba(247, 193, 11, 0.3)' : 'rgba(13, 79, 74, 0.2)';
  const accentColor = isDark ? '#F7C10B' : '#0D4F4A';
  const bgColor = isDark ? 'bg-[#232021]' : 'bg-[#F8F4ED]';

  return (
    <div className={`${bgColor} py-4 overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Left decorative line with leaf */}
          <div className="flex-1 flex items-center justify-end gap-2">
            <svg
              className="w-6 h-6 opacity-40"
              style={{ color: accentColor }}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4C8 4 4 8 4 12C8 12 12 8 12 4Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M4 12C4 12 8 12 12 4"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            <div
              className="flex-1 max-w-32 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${lineColor})`,
              }}
            />
          </div>

          {/* Center ornament */}
          <div className="relative">
            <div
              className="w-3 h-3 rotate-45"
              style={{
                backgroundColor: isDark ? '#F7C10B' : '#0D4F4A',
                opacity: 0.5,
              }}
            />
            <div
              className="absolute inset-0 w-3 h-3 rotate-45 scale-50"
              style={{
                backgroundColor: isDark ? '#232021' : '#F8F4ED',
              }}
            />
          </div>

          {/* Right decorative line with leaf */}
          <div className="flex-1 flex items-center justify-start gap-2">
            <div
              className="flex-1 max-w-32 h-px"
              style={{
                background: `linear-gradient(90deg, ${lineColor}, transparent)`,
              }}
            />
            <svg
              className="w-6 h-6 opacity-40 scale-x-[-1]"
              style={{ color: accentColor }}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4C8 4 4 8 4 12C8 12 12 8 12 4Z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M4 12C4 12 8 12 12 4"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
