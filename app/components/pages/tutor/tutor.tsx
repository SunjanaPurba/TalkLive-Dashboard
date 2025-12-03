import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";

const students = [
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
  {
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    status: "Active",
  },
];

const TutorManagement = () => {
  return (
    <div className="p-4 mt-6 lg:p-8">
      <h2 className="text-[#081E37] text-xl font-semibold mb-6 lg:text-2xl">
        Tutor Management
      </h2>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 lg:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Tutor"
                  className="w-full pl-10 pr-4 py-2.5 text-gray-400 ring ring-gray-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <select className="px-4 py-2 ring ring-gray-400 rounded-full bg-gray-50 text-gray-400 text-sm">
                <option>Date range</option>
              </select>
              <select className="px-4 py-2 ring ring-gray-400 rounded-full bg-gray-50 text-gray-400 text-sm">
                <option>Sort by</option>
              </select>
            </div>
            <button className="px-5 py-2 whitespace-nowrap bg-[#144B8A] text-white rounded-full flex items-center justify-center gap-2">
              + Add Tutor
            </button>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-4">Join Date</th>
                <th className="py-3 px-4">Full Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">{s.joinDate}</td>
                  <td className="py-3 px-4">{s.name}</td>
                  <td className="py-3 px-4">{s.email}</td>
                  <td className="py-3 px-4">{s.phone}</td>
                  <td className="py-3 px-4">
                    {s.status === "Active" ? (
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-500 rounded-lg text-sm">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 flex gap-3 text-lg">
                    <FiEye className="text-gray-600 cursor-pointer" />
                    <FaPenToSquare className="text-green-500 cursor-pointer" />
                    <FiTrash2 className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="block lg:hidden px-4 pb-6 space-y-4">
          {students.map((s, i) => (
            <div key={i} className="border rounded-lg p-5 bg-white">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <p className="text-gray-500">Join Date</p>
                  <p className="font-medium text-gray-900">{s.joinDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{s.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="text-gray-900 break-all">{s.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="text-gray-900">{s.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  {s.status === "Active" ? (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-500 rounded-lg text-sm">
                      Inactive
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-gray-500">Action</p>
                  <div className="flex gap-4 text-lg mt-1">
                    <FiEye className="text-gray-600 cursor-pointer" />
                    <FaPenToSquare className="text-green-500 cursor-pointer" />
                    <FiTrash2 className="text-red-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorManagement;
