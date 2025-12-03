// import { index, route } from "@react-router/dev/routes";

// export const publicRoutes = [
//   // index("pages/public/Home.tsx"),
//   // route("about", "pages/public/About.tsx"),

//   index("components/pages/dashboard/dashboard.tsx"),
//   route("students", "components/pages/studentpage/studentpage.tsx"),
//   route("tutors", "components/pages/tutor/tutor.tsx"),
// ];

// import { index, route } from "@react-router/dev/routes";

// export const publicRoutes = [
//   index("components/pages/dashboard/dashboard.tsx"),
//   route("students", "components/pages/studentpage/Studentpage.tsx"),
//   route("edit-student/:id", "components/pages/studentpage/EditStudent.tsx"),
//   route("tutors", "components/pages/tutor/tutor.tsx"),
// ];

// routes/public.routes.ts







import { route, index } from "@react-router/dev/routes";

export const publicRoutes = [
  index("components/pages/dashboard/Dashboard.tsx"),

  route("students", "components/pages/studentpage/Studentpage.tsx"),
  route("edit-student/:id", "components/pages/studentpage/EditStudent.tsx"),
  route("student-updated/:id", "components/pages/studentpage/updatedStudent.tsx"),
  route("deleted-student/:id", "components/pages/studentpage/deletedStudent.tsx"),
  route("tutors", "components/pages/tutor/Tutor.tsx"),
  route("classes", "components/pages/class/Class.tsx"),

];
