"use client";

import { useState, useEffect } from "react";
import { Student, StudentStatus, Branch, BRANCH_LABEL } from "@/types/student";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (student: Student) => void;
  initialData?: Student | null;
}

export default function StudentModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const [form, setForm] = useState<Student>({
    id: "",
    name: "",
    instrument: "",
    schedule: "",
    rate: 0,
    status: "ACTIVE",
    branch: "SINCERE_SMB",
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "rate" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      ...form,
      id: form.id || crypto.randomUUID(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-lg font-bold">
          {initialData ? "Edit Student" : "Add Student"}
        </h2>

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Instrument</label>
          <input
            name="instrument"
            value={form.instrument}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Schedule</label>
          <input
            name="schedule"
            value={form.schedule}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Branch</label>
          <select
            name="branch"
            value={form.branch}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {(Object.keys(BRANCH_LABEL) as Branch[]).map((b) => (
              <option key={b} value={b}>
                {BRANCH_LABEL[b]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Rate</label>
          <input
            type="number"
            name="rate"
            value={form.rate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            {(["ACTIVE", "PAUSE", "STOP"] as StudentStatus[]).map(
              (s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-black text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
