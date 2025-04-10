// components/TransactionFormModal.jsx
import React, { useState } from "react"
import CategorySelector from "./CategorySelector"
import CategoryInput from "./CategoryInput"

const defaultCategories = ["월급", "식비", "교통비", "기타"]

const TransactionFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    type: "expense",
    title: "",
    amount: "",
    category: defaultCategories[0],
  })

  const [categories, setCategories] = useState(defaultCategories)
  const [newCategory, setNewCategory] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCategory = () => {
    if (!newCategory.trim() || categories.includes(newCategory)) return
    setCategories((prev) => [...prev, newCategory])
    setNewCategory("")
  }

  const handleDeleteCategory = (cat) => {
    if (defaultCategories.includes(cat)) return
    setCategories((prev) => prev.filter((c) => c !== cat))
    if (form.category === cat) {
      setForm((prev) => ({ ...prev, category: defaultCategories[0] }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...form,
      amount: Number(form.amount),
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[rgba(0,0,0,.1)]">
      <div className="bg-white w-full max-w-md p-4 rounded-t-2xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">가계부 항목 추가</h2>
          <button className="text-xs border rounded px-2 py-1 active:bg-blue-100 active:border-blue-300 active:text-blue-700">
            영수증 추가
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* 수입/지출 선택 */}
          <div className="flex gap-4">
            {["income", "expense"].map((type) => (
              <label key={type} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={form.type === type}
                  onChange={handleChange}
                />
                {type === "income" ? "수입" : "지출"}
              </label>
            ))}
          </div>

          {/* 상호명 / 수입명 */}
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="상호명 또는 수입명"
            className="w-full border rounded px-3 py-2"
            required
          />

          {/* 금액 */}
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="금액 (예: 30000)"
            className={`w-full border border-gray-800 rounded px-3 py-2 ${
              form.type === "income" ? "focus:text-green-500" : "focus:text-red-500"
            }`}
            required
          />

          {/* 카테고리 */}
          <CategorySelector
            categories={categories}
            selected={form.category}
            onSelect={(cat) => setForm((prev) => ({ ...prev, category: cat }))}
            onDelete={handleDeleteCategory}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            defaultCategories={defaultCategories}
          />

          <CategoryInput
            value={newCategory}
            onChange={setNewCategory}
            onAdd={handleAddCategory}
          />

          {/* 버튼 */}
          <div className="flex justify-between gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2 bg-gray-200 rounded"
            >
              취소
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 bg-blue-500 text-white rounded"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TransactionFormModal
