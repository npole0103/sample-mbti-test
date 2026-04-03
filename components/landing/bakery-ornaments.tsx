"use client";

type OrnamentProps = {
  className?: string;
};

function BaseSvg({
  className,
  children,
  viewBox = "0 0 48 48"
}: OrnamentProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function CroissantOrnament({ className }: OrnamentProps) {
  return (
    <BaseSvg className={className}>
      <path
        d="M10 30C10 20 17 14 24 14C31 14 38 20 38 30C34 31 31 34 29 38C26 36 22 36 19 38C17 34 14 31 10 30Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M16 28C18 26 20 25 24 25C28 25 30 26 32 28" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M22 14C20 11 17 9 13 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M26 14C28 11 31 9 35 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </BaseSvg>
  );
}

export function CookieOrnament({ className }: OrnamentProps) {
  return (
    <BaseSvg className={className}>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="1.8" fill="currentColor" />
      <circle cx="29" cy="18" r="1.8" fill="currentColor" />
      <circle cx="20" cy="28" r="1.8" fill="currentColor" />
      <circle cx="29" cy="27" r="1.8" fill="currentColor" />
      <circle cx="24" cy="22.5" r="1.8" fill="currentColor" />
    </BaseSvg>
  );
}

export function CakeSliceOrnament({ className }: OrnamentProps) {
  return (
    <BaseSvg className={className}>
      <path
        d="M11 32H37L31 19H17L11 32Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M17 19C17 16 19 13 24 13C29 13 31 16 31 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M20 24H28" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M24 10V6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <circle cx="24" cy="5" r="1.6" fill="currentColor" />
    </BaseSvg>
  );
}

export function CoffeeOrnament({ className }: OrnamentProps) {
  return (
    <BaseSvg className={className}>
      <path d="M14 19H30V30C30 33.3 27.3 36 24 36H20C16.7 36 14 33.3 14 30V19Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M30 21H33C35.2 21 37 22.8 37 25C37 27.2 35.2 29 33 29H30" stroke="currentColor" strokeWidth="1.8" />
      <path d="M17 13C17 11.3 18 10 19 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M23 13C23 11.1 24 9.8 25 8.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M29 13C29 11.6 29.8 10.4 30.7 9.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </BaseSvg>
  );
}

export function HeartOrnament({ className }: OrnamentProps) {
  return (
    <BaseSvg className={className}>
      <path
        d="M24 38C22.8 37 10 28.8 10 19.5C10 14.8 13.6 11 18.1 11C20.7 11 23.1 12.3 24 14.3C24.9 12.3 27.3 11 29.9 11C34.4 11 38 14.8 38 19.5C38 28.8 25.2 37 24 38Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </BaseSvg>
  );
}
