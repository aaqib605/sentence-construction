interface StatBoxProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export default function StatBox({ label, value, icon }: StatBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-4 border-r last:border-r-0">
      <div className="text-sm font-medium text-gray-600">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
      {icon && <div className="mt-1">{icon}</div>}
    </div>
  );
}
