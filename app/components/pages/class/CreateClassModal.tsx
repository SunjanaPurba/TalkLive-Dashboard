// components/modals/CreateClassModal.tsx
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CreateClassModal({ isOpen, onClose, onSuccess }: Props) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess?.();
    onClose();
  };

  const students = [
    "Abdullah Al Noman", "Shamim Hossain", "Meherab Hossain", "Foysal Alam",
    "Rifat Hossain", "Saiful Islam", "Shahadat Hossain", "Rahim Khan"
  ];

  return (
    <>
      {/* Blur + Light Overlay */}
      <div
        className="fixed inset-0 bg-white z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-5 text-white">
            <h2 className="text-2xl font-bold">Create a new class</h2>
          </div>

          {/* Body */}
          <div className="p-8 max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Class Type & Textbook */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class type</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option>Select</option>
                    <option>K-talk Live G-6</option>
                    <option>K-talk Live G-0</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Textbook</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option>Select</option>
                    <option>ILK Volume 1</option>
                    <option>ILK Volume 2</option>
                  </select>
                </div>
              </div>

              {/* Class Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class Number</label>
                <input
                  type="text"
                  placeholder="23-002"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Tutor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tutor</label>
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  <option>Select</option>
                  <option>Kim Hwan-hee</option>
                  <option>Lee Min-ho</option>
                  <option>Park Bo-young</option>
                </select>
              </div>

              {/* Students */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
                <select
                  multiple
                  value={selectedStudents}
                  onChange={(e) => setSelectedStudents(Array.from(e.target.selectedOptions, o => o.value))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 h-40 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  {students.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-2">Hold Ctrl (Windows) / Cmd (Mac) to select multiple</p>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ending Date (Optional)</label>
                  <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
              </div>

              {/* Day & Time */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Day</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option>Select</option>
                    <option>Tue, Thu, Sat</option>
                    <option>Mon, Wed, Fri</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input type="time" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Note (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Write a short description..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                />
              </div>

              {/* Zoom Link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zoom link</label>
                <input
                  type="url"
                  placeholder="Enter Zoom link"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-blue-600 transition transform hover:scale-105"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}