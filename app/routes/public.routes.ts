import { route, index } from "@react-router/dev/routes";

export const publicRoutes = [
  index("components/pages/dashboard/dashboard.tsx"),

  route("students", "components/pages/studentpage/studentpage.tsx"),
  route("edit-student/:id", "components/pages/studentpage/editstudent.tsx"),
  route("student-updated/:id", "components/pages/studentpage/updatedStudent.tsx"),
  route("deleted-student/:id", "components/pages/studentpage/deletedStudent.tsx"),
  route("tutors", "components/pages/tutor/tutor.tsx"),
  route("classes", "components/pages/class/class.tsx"),
];


