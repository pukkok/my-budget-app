// components/CategoryInput.jsx
import React from "react"

const CategoryInput = ({ value, onChange, onAdd }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="새 카테고리"
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        type="button"
        onClick={onAdd}
        className="px-3 py-2 bg-gray-200 rounded"
      >
        추가
      </button>
    </div>
  )
}

export default CategoryInput
