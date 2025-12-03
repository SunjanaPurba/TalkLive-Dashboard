import React, { useState } from "react";
import { Search, Calendar, ChevronDown } from "lucide-react";

interface ClassMember {
  name: string;
  avatar: string;
}

interface ClassData {
  startDate: string;
  times: string[];
  classNumber: string;
  classType: string;
  tutor: string;
  level: string;
  progress: string;
  members: ClassMember[];
}

interface CreateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newClass: ClassData) => void;
}

const CreateClassModal: React.FC<CreateClassModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    classType: "",
    textbook: "",
    classNumber: "",
    tutor: "",
    selectedStudents: [] as string[],
    startDate: "",
    endDate: "",
    selectedDays: [] as string[],
    time: "",
    note: "",
    zoomLink: "",
  });

  const studentsList = [
    "Abdullah Al Noman",
    "Shamim Hossain",
    "Meherab Hossain",
    "Foysal Alam",
    "Rifat Hossain",
    "Saiful Islam",
    "Rahim Khan",
    "Karim Ahmed",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, selectedStudents: selected });
  };

  const handleDayToggle = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedDays: prev.selectedDays.includes(day)
        ? prev.selectedDays.filter((d) => d !== day)
        : [...prev.selectedDays, day],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newClass: ClassData = {
      startDate: formData.startDate || "18-02-2025",
      times:
        formData.selectedDays.length > 0 && formData.time
          ? formData.selectedDays.map((day) => `${day} : ${formData.time}`)
          : ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: formData.classNumber || "23-002",
      classType: formData.classType || "K-talk Live G-6",
      tutor: formData.tutor || "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "0/6",
      members:
        formData.selectedStudents.length > 0
          ? formData.selectedStudents.map((name, i) => ({
              name,
              avatar: `https://i.pravatar.cc/40?u=${name.replace(" ", "").toLowerCase()}${i}`,
            }))
          : [
              {
                name: "No students yet",
                avatar: "https://i.pravatar.cc/40?u=empty",
              },
            ],
    };

    onSuccess(newClass);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-sm z-50 bg-opacity-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Create a new class</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Class Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.classType}
                    onChange={(e) =>
                      setFormData({ ...formData, classType: e.target.value })
                    }
                    required
                  >
                    <option value="">Select</option>
                    <option>K-talk Live G-6</option>
                    <option>K-talk Live G-0</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Textbook
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    onChange={(e) =>
                      setFormData({ ...formData, textbook: e.target.value })
                    }
                    required
                  >
                    <option value="">Select</option>
                    <option>ILK Volume 1</option>
                    <option>ILK Volume 2</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Class Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="23-002"
                    value={formData.classNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, classNumber: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tutor
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.tutor}
                    onChange={(e) =>
                      setFormData({ ...formData, tutor: e.target.value })
                    }
                    required
                  >
                    <option value="">Select</option>
                    <option>Kim Hwan-hee</option>
                    <option>Lee Min-ho</option>
                    <option>Park Ji-sung</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Students (Hold Ctrl/Cmd to select multiple)
                </label>
                <select
                  multiple
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.selectedStudents}
                  onChange={handleStudentChange}
                >
                  {studentsList.map((student) => (
                    <option key={student} value={student}>
                      {student}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Starting Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ending Date (Optional)
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Class Days
                </label>
                <div className="flex flex-wrap gap-3">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`px-4 py-2 rounded-lg border ${
                        formData.selectedDays.includes(day)
                          ? "bg-blue-900 text-white border-blue-900"
                          : "bg-white border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Class Time
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Note (Optional)
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  rows={3}
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Zoom Link
                </label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="https://zoom.us/..."
                  value={formData.zoomLink}
                  onChange={(e) =>
                    setFormData({ ...formData, zoomLink: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-medium"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ClassManagement() {
  const [classesData, setClassesData] = useState<ClassData[]>([
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
    {
      startDate: "18-02-2025",
      times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      progress: "4/6",
      members: [
        {
          name: "Abdullah Al Noman",
          avatar: "https://i.pravatar.cc/40?u=male1",
        },
        { name: "Shamim Hossain", avatar: "https://i.pravatar.cc/40?u=male2" },
        {
          name: "Meherab Hossain",
          avatar: "https://i.pravatar.cc/40?u=male21",
        },
        { name: "Foysal Alam", avatar: "https://i.pravatar.cc/40?u=male22" },
        { name: "Rifat Hossain", avatar: "https://i.pravatar.cc/40?u=male23" },
        { name: "Saiful Islam", avatar: "https://i.pravatar.cc/40?u=male24" },
      ],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateSuccess = (newClass: ClassData) => {
    setClassesData((prev) => [...prev, newClass]);
    alert("Class created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Class Management
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-[#144B8A] text-white rounded-full hover:bg-blue-800 font-medium transition text-center"
          >
            + Create New Class
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm border mb-6 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:flex-1">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Course"
                  className="w-full pl-10 pr-4 py-2 ring ring-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                <button className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 ring ring-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap w-full sm:w-auto">
                  <Calendar className="w-4 h-4" />
                  <span>Date range</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 ring ring-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap w-full sm:w-auto">
                  Sort by
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {classesData.map((cls, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-5 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs sm:text-sm text-gray-600">
                  Start: {cls.startDate}
                </span>
                <div className="flex gap-1.5 sm:gap-2">
                  <button className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600"
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
                  <button className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center hover:bg-red-200 transition">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {cls.times.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-1 text-sm text-[#535862] mb-3 flex-1">
                <p className=" text-[#535862">Class Number:{cls.classNumber}</p>
                <p className="text-[#535862">Class Type:{cls.classType}</p>
                <p className="text-xs sm:text-sm">Tutor: {cls.tutor}</p>
              </div>

              <h3 className="font-semibold text-gray-900 text-sm mb-3">
                Level: {cls.level}
              </h3>

              <div className="space-y-2 mb-4 flex-1">
                {cls.members.slice(0, 5).map((m, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-700 truncate">
                      {m.name}
                    </span>
                  </div>
                ))}
                {cls.members.length > 5 && (
                  <p className="text-xs text-gray-500">
                    + {cls.members.length - 5} more
                  </p>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>{cls.progress}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-900 h-2 rounded-full transition-all duration-500"
                    style={{ width: cls.progress === "4/6" ? "66.67%" : "0%" }}
                  />
                </div>
              </div>

              <button className="w-full py-2.5 ring ring-[#144B8A] text-[#144B8A] rounded-full hover:bg-blue-50 font-medium text-sm transition mt-auto">
                View Details
              </button>
            </div>
          ))}
        </div>

        <CreateClassModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleCreateSuccess}
        />
      </div>
    </div>
  );
}
