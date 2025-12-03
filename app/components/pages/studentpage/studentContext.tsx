import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export interface Student {
  id: string;
  joinDate: string;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  subscribed: boolean;
  status: string;
}

interface StudentContextType {
  students: Student[];
  updateStudent: (updatedStudent: Student) => void;
  deleteStudent: (id: string) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const initialStudents: Student[] = [
  {
    id: "1",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: true,
    status: "Active",
  },
  {
    id: "2",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: true,
    status: "Active",
  },
  {
    id: "3",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: false,
    status: "Active",
  },
  {
    id: "4",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: true,
    status: "Active",
  },
  {
    id: "5",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: false,
    status: "Inactive",
  },
  {
    id: "6",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: true,
    status: "Active",
  },
  {
    id: "7",
    joinDate: "2025-01-03",
    name: "Md Forhad Alam",
    email: "forhad@potentialai.com",
    phone: "+8201815790063",
    nationality: "S. Korea",
    subscribed: true,
    status: "Active",
  },
];

export const StudentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const updateStudent = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context)
    throw new Error("useStudents must be used within StudentProvider");
  return context;
};
