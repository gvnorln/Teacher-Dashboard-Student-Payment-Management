import { StudentStatus } from "@/types/student";

export default function StatusBadge({ status }: { status: StudentStatus }) {
  const colorMap: Record<StudentStatus, string> = {
    ACTIVE: "bg-green-100 text-green-700",
    PAUSE: "bg-yellow-100 text-yellow-700",
    STOP: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${colorMap[status]}`}
    >
      {status}
    </span>
  );
}
