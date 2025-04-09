import FlexiDate from "../lib/Flexidate"

// 반환값: [{ date: number, type: "prev" | "current" | "next" }]
export const makeCalendarMatrix = (year, month) => {
  const current = new FlexiDate(year, month, 1)
  const startIdx = current.startWeekIndex
  const totalDays = current.totalMonthInDays

  // 이전 달 계산
  const prevMonthDate = new FlexiDate(year, month - 1, 1)
  const prevMonthTotal = prevMonthDate.totalMonthInDays

  const prevDates = Array(startIdx)
    .fill(0)
    .map((_, i) => ({
      date: prevMonthTotal - startIdx + i + 1,
      type: "prev",
    }))

  // 이번 달
  const currentDates = Array(totalDays)
    .fill(0)
    .map((_, i) => ({
      date: i + 1,
      type: "current",
    }))

  // 다음 달 계산
  const totalCells = prevDates.length + currentDates.length
  const nextCount = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7)

  const nextDates = Array(nextCount)
    .fill(0)
    .map((_, i) => ({
      date: i + 1,
      type: "next",
    }))

  const fullDates = [...prevDates, ...currentDates, ...nextDates]

  // 주 단위로 나누기
  const calendar = []
  for (let i = 0; i < fullDates.length; i += 7) {
    calendar.push(fullDates.slice(i, i + 7))
  }

  return calendar
}