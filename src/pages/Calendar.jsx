import React, { useState } from "react"
import CalendarGrid from "../components/calendar/CalendarGrid"
import CalendarHeader from "../components/calendar/CalendarHeader"
import FlexiDate from "../lib/Flexidate"

const CalendarPage = () => {
  const today = new FlexiDate()
  const [selectedDate, setSelectedDate] = useState(today)

  return (
    <div className="p-4 max-w-md mx-auto">
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
    </div>
  )
}

export default CalendarPage
