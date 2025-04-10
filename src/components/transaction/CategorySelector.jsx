// components/CategorySelector.jsx
import React, { useEffect, useRef, useState } from "react"

const CategorySelector = ({
  categories,
  selected,
  onSelect,
  onDelete,
  isExpanded,
  setIsExpanded,
  defaultCategories,
}) => {
  const containerRef = useRef(null)
  const [needsMore, setNeedsMore] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollHeight, clientHeight } = containerRef.current
        setNeedsMore(scrollHeight > clientHeight)
      }
    }
    checkOverflow()
  }, [categories])

  return (
    <>
      <div
        ref={containerRef}
        className={`flex flex-wrap gap-2 transition-all duration-300 ${
          isExpanded ? "max-h-[500px]" : "max-h-18 overflow-hidden"
        }`}
      >
        {categories.map((cat) => (
          <div key={cat} className="relative">
            <button
              type="button"
              onClick={() => onSelect(cat)}
              className={`px-3 py-1 rounded-full border text-sm ${
                selected === cat
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
            {!defaultCategories.includes(cat) && (
              <button
                type="button"
                onClick={() => onDelete(cat)}
                className="absolute -top-1 -right-1 text-xs text-red-500 bg-white rounded-full w-4 h-4 flex items-center justify-center shadow-sm"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {needsMore && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-xs text-blue-500 underline mt-1"
        >
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </>
  )
}

export default CategorySelector
