const CalendarCell = ({ date, type, isToday, onClick }) => {
  const baseStyle = "aspect-square flex items-center justify-center rounded-lg cursor-pointer"
  const textColor =
    type === "prev" || type === "next"
      ? "text-gray-400"
      : isToday
        ? "text-white font-bold"
        : ""

  const bgColor = isToday ? "bg-blue-500" : "hover:bg-gray-100"

  return (
    <div
      className={`${baseStyle} ${textColor} ${bgColor}`}
      onClick={onClick}
    >
      {date}
    </div>
  )
}

export default CalendarCell