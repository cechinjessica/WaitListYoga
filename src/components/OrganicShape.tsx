interface OrganicShapeProps {
  className?: string;
  color?: string;
}

export function OrganicShape({ className = "", color = "#E9A6A6" }: OrganicShapeProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 60C20 35 35 20 60 20C85 20 100 35 100 60C100 75 95 85 80 90C65 95 55 85 45 80C35 75 20 70 20 60Z"
          fill={color}
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
}