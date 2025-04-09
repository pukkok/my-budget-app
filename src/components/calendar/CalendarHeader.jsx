const CalendarHeader = ({ year, month, onChange }) => {
  const handleMonthChange = (offset) => {
    const newMonth = month + offset
    const newDate = new Date(year, newMonth - 1) // JS는 0월부터 시작
    onChange(newDate.getFullYear(), newDate.getMonth() + 1)
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => handleMonthChange(-1)} className="text-xl px-2">◀</button>
      <h1 className="text-xl font-bold cursor-pointer">
        {year}년 {month}월
      </h1>
      <button onClick={() => handleMonthChange(1)} className="text-xl px-2">▶</button>
    </div>
  )
}

export default CalendarHeader