const TransactionList = ({ items = [] }) => {
  if (!items.length) {
    return <p className="text-center text-gray-400 mt-6">데이터가 없습니다.</p>
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between border-b pb-2">
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
          <p className={`font-bold ${item.amount < 0 ? "text-red-500" : "text-green-500"}`}>
            {item.amount.toLocaleString()}원
          </p>
        </li>
      ))}
    </ul>
  )
}

export default TransactionList
