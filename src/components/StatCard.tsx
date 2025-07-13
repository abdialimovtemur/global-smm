// components/StatCard.tsx
import { Card } from "@/components/ui/card"

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
}

const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <Card className="flex-row items-center p-4 w-full rounded-3xl dark:bg-[#080d32] backdrop-blur-xl">
      <div className="p-5 rounded-3xl bg-gradient-primary sm:w-20 sm:h-20 w-16 h-16 justify-center items-center">
        <img src={icon} alt={label} className="w-full h-full"/>
      </div>
      <div>
        <p className="text-[#345178] sm:text-xl text-md">{label}</p>
        <h3 className="font-bold sm:text-2xl text-md">{value}</h3>
      </div>
    </Card>
  )
}

export default StatCard
