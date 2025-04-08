// src/components/SummaryCard.jsx
export default function SummaryCard({ title, amount, color }) {
  const colorMap = {
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className={`text-2xl font-bold ${colorMap[color] || ''}`}>
        ₩{amount.toLocaleString()}
      </div>
    </div>
  )
}
