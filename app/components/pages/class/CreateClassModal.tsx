import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CreateClassModal({
  isOpen,
  onClose,
  onSuccess,
}: Props) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess?.();
    onClose();
  };

  const students = [
    "Abdullah Al Noman",
    "Shamim Hossain",
    "Meherab Hossain",
    "Foysal Alam",
    "Rifat Hossain",
    "Saiful Islam",
    "Shahadat Hossain",
    "Rahim Khan",
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-blue-50/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="bg-white rounded-lg shadow-xl w-full max-w-md ring-2 ring-blue-600 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white px-4 sm:px-6 py-4 ring-b-2 ring-blue-600">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Create a new class
            </h2>
          </div>

          <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Class type
                  </label>
                  <select className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500 appearance-none">
                    <option>Select</option>
                    <option>K-talk Live G-6</option>
                    <option>K-talk Live G-0</option>
                  </select>
                </div>
                <div className="pt-1 sm:pt-6">
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center ring ring-gray-300 rounded-md text-gray-500 hover:bg-gray-50"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Textbook
                  </label>
                  <select className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500 appearance-none">
                    <option>Select</option>
                    <option>ILK Volume 1</option>
                    <option>ILK Volume 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Class Number
                  </label>
                  <input
                    type="text"
                    placeholder="23-002"
                    className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Tutor
                </label>
                <select className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500 appearance-none">
                  <option>Select</option>
                  <option>Kim Hwan-hee</option>
                  <option>Lee Min-ho</option>
                  <option>Park Bo-young</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Students
                </label>
                <select
                  multiple
                  value={selectedStudents}
                  onChange={(e) =>
                    setSelectedStudents(
                      Array.from(e.target.selectedOptions, (o) => o.value)
                    )
                  }
                  className="w-full ring ring-gray-300 rounded-md px-3 py-2 h-24 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                >
                  {students.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Starting Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select"
                      className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Ending Date (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select"
                      className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Day
                  </label>
                  <select className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500 appearance-none">
                    <option>Select</option>
                    <option>Tue, Thu, Sat</option>
                    <option>Mon, Wed, Fri</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Time
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select"
                      className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                    />
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Note (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Write a short description..."
                  className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Zoom link
                </label>
                <input
                  type="url"
                  placeholder="Enter Zoom link"
                  className="w-full ring ring-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-2.5 ring ring-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 bg-blue-700 text-white rounded-full text-sm font-semibold hover:bg-blue-800 shadow-md"
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
