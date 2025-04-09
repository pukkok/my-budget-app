import CalendarCell from "./CalendarCell"
import weeks from "../../datas/weeks"
import FlexiDate from "../../lib/Flexidate"
import { makeCalendarMatrix } from "../../utils/date.util"

const CalendarGrid = ({ year, month, selected, onSelect }) => {
  const today = new FlexiDate()
  const calendarMatrix = makeCalendarMatrix(year, month)

  return (
    <>
      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
        {weeks["ko"].map((day, idx) => (
          <div key={idx} className={idx === 0 ? "text-red-500" : idx === 6 ? "text-blue-500" : ""}>
            {day}
          </div>
        ))}
      </div>

      {/* 날짜 셀 */}
      <div className="grid grid-cols-7 gap-1 text-sm text-center">
        {calendarMatrix.flat().map(({ date, type }, idx) => {
          const isToday =
            type === "current" &&
            date === today.date &&
            month === today.month &&
            year === today.year

          const cellDate =
            type === "current"
              ? new FlexiDate(year, month, date)
              : type === "prev"
                ? new FlexiDate(year, month - 1, date)
                : new FlexiDate(year, month + 1, date)

          return (
            <CalendarCell
              key={idx}
              date={date}
              type={type}
              isToday={isToday}
              onClick={() => onSelect(cellDate)}
            />
          )
        })}
      </div>
    </>
  )
}

export default CalendarGrid