import React, { useState } from "react"
import CalendarGrid from "../components/calendar/CalendarGrid"
import CalendarHeader from "../components/calendar/CalendarHeader"
import TransactionFormModal from "../components/transaction/TransactionFormModal"
import TransactionList from "../components/transaction/TransactionList"
import FlexiDate from "../lib/Flexidate"

const CalendarPage = () => {
  const today = new FlexiDate()
  const [selectedDate, setSelectedDate] = useState(today)
  const [transactions, setTransactions] = useState({})
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, amount, category } = e.target.elements

    const newItem = {
      title: title.value,
      amount: parseInt(amount.value),
      category: category.value,
      date: selectedDate.format("YYYY-MM-DD"),
    }

    const dateKey = selectedDate.format("YYYY-MM-DD")
    setTransactions((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newItem],
    }))
    setIsFormOpen(false)
    e.target.reset()
  }

  const selectedKey = selectedDate.format("YYYY-MM-DD")
  const selectedItems = transactions[selectedKey] || []

  return (
    <div className="p-4 max-w-md mx-auto relative">
      <CalendarHeader
        year={selectedDate.year}
        month={selectedDate.month}
        onChange={(y, m) => setSelectedDate(new FlexiDate(y, m, 1))}
      />
      <CalendarGrid
        year={selectedDate.year}
        month={selectedDate.month}
        selected={selectedDate}
        onSelect={(d) => setSelectedDate(d)}
      />

      <TransactionList items={selectedItems} />

      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed flex justify-center items-center bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-md"
      >
        추가
      </button>

      <TransactionFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default CalendarPage
