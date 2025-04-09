import { useNavigate } from 'react-router-dom'
import SummaryCard from '../components/SummaryCard'

const Home = () => {
  const navigate = useNavigate()

  const income = 500000
  const expense = 230000

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={() => navigate('/calendar')}
        className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg shadow"
      >
        등록하기 📅
      </button>

      <SummaryCard title="이번달 수입" amount={income} color="green" />
      <SummaryCard title="이번달 지출" amount={expense} color="red" />
      <SummaryCard title="이번달 차액" amount={income - expense} color="" />
      <SummaryCard title="연간 누적 지출" amount={3200000} color="red" />
    </div>
  )
}

export default Home