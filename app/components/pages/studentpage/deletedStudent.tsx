import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStudents } from "./studentContext";
import { AlertTriangle } from "lucide-react";

const DeleteStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { students, deleteStudent } = useStudents();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Student not found
        </h2>
        <button
          onClick={() => navigate("/students")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleConfirmDelete = () => {
    deleteStudent(id!);
    navigate("/students");
  };

  const handleCancel = () => {
    navigate("/students");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 p-4">
      <div className="bg-white w-full max-w-md md:max-w-lg lg:w-[572px] rounded-[16px] shadow-lg overflow-hidden">
        <div className="flex items-start md:items-center gap-4 p-4 md:p-6">
          <div className="w-12 h-12 bg-[#FCE9E9] rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-[#F04438]" />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#081E37] mb-1">
              Delete
            </h2>
            <p className="text-sm md:text-base text-[#535862]">
              Are you sure you want to delete this student? This action cannot
              be undone.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3 bg-[#F9FAFB] p-4 md:p-6 rounded-b-[16px]">
          <button
            className="px-6 py-2 rounded-full ring-1 ring-gray-400 bg-white text-[#535862] text-sm md:text-base w-full sm:w-[110px]"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 rounded-full bg-[#F04438] text-white font-semibold text-sm md:text-base w-full sm:w-[110px]"
            onClick={handleConfirmDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudent;
