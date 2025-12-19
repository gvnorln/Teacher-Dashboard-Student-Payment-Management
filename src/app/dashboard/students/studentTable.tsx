"use client";

import { Student } from "@/types/student";
import StatusBadge from "@/components/StatusBadge";

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
}

export default function StudentTable({ students, onEdit }: Props) {
  if (students.length === 0) {
    return (
      <div className="border rounded-lg p-8 text-center text-gray-500">
        Belum ada murid.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white border rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Nama</th>
            <th className="px-4 py-3 text-left">Instrumen</th>
            <th className="px-4 py-3 text-left">Jadwal</th>
            <th className="px-4 py-3 text-left">Cabang</th>
            <th className="px-4 py-3 text-right">Rate</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="px-4 py-3 font-medium">{s.name}</td>
              <td className="px-4 py-3">{s.instrument}</td>
              <td className="px-4 py-3">{s.schedule}</td>
              <td className="px-4 py-3">{s.branch}</td>
              <td className="px-4 py-3 text-right">
                Rp {s.rate.toLocaleString("id-ID")}
              </td>
              <td className="px-4 py-3 text-center">
                <StatusBadge status={s.status} />
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  onClick={() => onEdit(s)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
