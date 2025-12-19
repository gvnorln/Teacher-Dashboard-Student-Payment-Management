import { Student } from "@/types/student";

export function calculateTotalIncome(students: Student[]): number {
  return students
    .filter((s) => s.status === "ACTIVE")
    .reduce((total, s) => total + s.rate, 0);
}
