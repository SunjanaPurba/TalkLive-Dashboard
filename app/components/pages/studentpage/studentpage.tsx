import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useStudents } from "./studentContext";

const StudentManagement: React.FC = () => {
  const navigate = useNavigate();
  const { students } = useStudents();

  const handleEdit = (id: string) => navigate(`/edit-student/${id}`);
  const handleView = (id: string) => navigate(`/student-updated/${id}`);
  const handleDelete = (id: string) => navigate(`/deleted-student/${id}`);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Student Management</h2>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Course"
                    className="w-full sm:w-64 pl-10 pr-4 py-2.5 ring ring-gray-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <select className="px-4 py-2.5 ring ring-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option>Date range</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>

                <select className="px-4 py-2.5 ring ring-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option>Sort by</option>
                  <option>Name (A-Z)</option>
                  <option>Date (Newest)</option>
                </select>
              </div>

              <button className="bg-[#144B8A] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
                <span className="text-xl font-bold">+</span>
                Add Student
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#ECECEC]">
                <tr>
                  {["Join Date", "Full Name", "Email", "Phone", "Nationality", "Subscribed", "Status", "Action"].map((header) => (
                    <th key={header} className="px-6 py-4 font-semibold text-[#081E37] text-xs border-b border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">{student.joinDate}</td>
                    <td className="px-6 py-4 text-[#535862] font-medium whitespace-nowrap">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.email}</td>
                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{student.phone}</td>
                    <td className="px-6 py-4 text-gray-600">{student.nationality}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.subscribed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {student.subscribed ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button onClick={() => handleView(student.id)} className="text-gray-500 hover:text-gray-700"><FiEye className="w-5 h-5" /></button>
                        <button onClick={() => handleEdit(student.id)} className="text-green-600 hover:text-green-800"><FaPenToSquare className="w-5 h-5" /></button>
                        <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-800"><FiTrash2 className="w-5 h-5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden">
            {students.map((student) => (
              <div key={student.id} className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-[#535862] text-base">{student.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{student.joinDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleView(student.id)} className="text-gray-500"><FiEye className="w-5 h-5" /></button>
                    <button onClick={() => handleEdit(student.id)} className="text-green-600"><FaPenToSquare className="w-5 h-5" /></button>
                    <button onClick={() => handleDelete(student.id)} className="text-red-600"><FiTrash2 className="w-5 h-5" /></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <p className="text-gray-700 truncate">{student.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <p className="text-gray-700">{student.phone}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Nationality:</span>
                    <p className="text-gray-700">{student.nationality}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${student.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {student.status}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-gray-500 text-sm">Subscribed:</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${student.subscribed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {student.subscribed ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;