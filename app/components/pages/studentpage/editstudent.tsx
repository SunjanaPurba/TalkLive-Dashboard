import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "./studentContext";
import type { Student } from "./studentContext";
import img from "~/assets/logo/image.png";

const EditStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { students, updateStudent } = useStudents();

  const student = students.find((s) => s.id === id);
  const [formData, setFormData] = useState<Student | undefined>(student);

  if (!formData)
    return <p className="text-center py-10 text-gray-500">Student not found</p>;

  const handleUpdate = () => {
    updateStudent(formData);
    navigate(`/student-updated/${id}`);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
        Student Management
      </h2>
      <div className="bg-[#F5F7FB] mx-auto max-w-5xl rounded-lg shadow-sm border-2 border-blue-500 p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h3 className="text-base font-medium text-gray-700 mb-6">
            General Information
          </h3>

          <div className="mb-6 relative inline-block">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-800 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="text"
                value="2000/05/12"
                readOnly
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none cursor-not-allowed"
              />
              <svg
                className="w-4 h-4 absolute right-3 top-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nationality
            </label>
            <div className="relative">
              <select
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>South Korea</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Japan</option>
                <option>China</option>
              </select>
              <svg
                className="w-4 h-4 absolute right-3 top-3 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Join Date
            </label>
            <input
              type="text"
              value={formData.joinDate}
              onChange={(e) =>
                setFormData({ ...formData, joinDate: e.target.value })
              }
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="relative">
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as "Active" | "Inactive",
                  })
                }
                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <svg
                className="w-4 h-4 absolute right-3 top-3 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subscribed
            </label>
            <input
              type="text"
              value={formData.subscribed ? "Yes" : "No"}
              readOnly
              className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-md text-sm text-gray-600 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleUpdate}
            className="bg-[#144B8A] text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
