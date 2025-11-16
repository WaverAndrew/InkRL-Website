'use client'

interface InkLogoProps {
  className?: string
}

export default function InkLogo({ className }: InkLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
      <path
        d="M 30 50 Q 50 30, 70 50 Q 50 70, 30 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      {/* Ink splash */}
      <path
        d="M 50 50 L 55 45 L 60 50 L 55 55 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="52" cy="48" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="48" cy="52" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

