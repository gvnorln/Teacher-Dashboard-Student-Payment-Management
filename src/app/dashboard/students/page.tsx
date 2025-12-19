"use client";

import { useState } from "react";
import StudentTable from "./studentTable";
import StudentModal from "./studentModal";
import { Student } from "@/types/student";
import { calculateTotalIncome } from "./utils";

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Andi",
    instrument: "Guitar",
    schedule: "Senin",
    rate: 150000,
    status: "ACTIVE",
    branch: "SINCERE_SMB",
  },
];

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Student | null>(null);
  const totalIncome = calculateTotalIncome(students);

  const handleSubmit = (student: Student) => {
    setStudents((prev) => {
      const exists = prev.find((s) => s.id === student.id);
      if (exists) {
        return prev.map((s) => (s.id === student.id ? student : s));
      }
      return [...prev, student];
    });
  };

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Students</h1>

        <button
          onClick={() => {
            setSelected(null);
            setModalOpen(true);
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Murid Aktif</p>
          <p className="text-2xl font-bold">
            {students.filter((s) => s.status === "ACTIVE").length}
          </p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Gaji / Bulan</p>
          <p className="text-2xl font-bold">
            Rp {totalIncome.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <StudentTable
        students={students}
        onEdit={(s) => {
          setSelected(s);
          setModalOpen(true);
        }}
      />

      <StudentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={selected}
      />
    </div>
  );
}
