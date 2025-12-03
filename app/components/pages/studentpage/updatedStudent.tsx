import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "./studentContext";
import img from "~/assets/logo/image.png";

const UpdatedStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { students } = useStudents();

  const student = students.find((s) => s.id === id);
  if (!student) return <p>Student not found</p>;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Student Details
          </h1>

          <button
            onClick={() => navigate("/students")}
            className="bg-[#144B8A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors w-full md:w-auto"
          >
            Edit Student
          </button>
        </div>
        <div className="bg-white rounded-lg border-2 border-blue-500 shadow-sm p-4 md:p-8">
          <div className="bg-[#F5F7FB] p-4 rounded-lg">
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              General Information
            </h3>
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </p>
                  <p className="text-sm text-gray-600">{student.name}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </p>
                  <p className="text-sm text-gray-600">{student.email}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </p>
                  <p className="text-sm text-gray-600">{student.phone}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Date of Birth
                  </p>
                  <p className="text-sm text-gray-600">2000/05/12</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Nationality
                  </p>
                  <p className="text-sm text-gray-600">{student.nationality}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Class Number
                  </p>
                  <p className="text-sm text-gray-600">23-001</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Status
                  </p>
                  <p className="text-sm text-gray-600">{student.status}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Subscribed
                  </p>
                  <p className="text-sm text-gray-600">
                    {student.subscribed ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Joining Date
                </p>
                <p className="text-sm text-gray-600">{student.joinDate}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate("/students")}
              className="bg-[#144B8A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Back to Main Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedStudent;
