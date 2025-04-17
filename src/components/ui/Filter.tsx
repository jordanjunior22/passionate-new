import React from "react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterProps {
  options: FilterOption[];
  selectedId?: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Filter({
  options,
  selectedId,
  onChange,
  className = "",
}: FilterProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`
            py-1 
            px-3 
            rounded-full 
            text-tag-small 
            font-medium 
            transition-colors 
            duration-200
            ${
              selectedId === option.id
                ? "bg-fruit-salad text-neutral-white"
                : "bg-neutral-lighter text-neutral-dark hover:bg-neutral-light"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
