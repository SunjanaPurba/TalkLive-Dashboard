import React from "react";
import { FiUsers, FiDollarSign, FiBookOpen } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiArrowLineUpRight } from "react-icons/pi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import EarningsChart from "./EarningsChart"; // Your chart component

const classes = [
  {
    startDate: "18-02-2025",
    times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
    classNumber: "23-002",
    classType: "K-talk Live G-6",
    tutor: "Kim Hwan-hee",
    level: "ILK Volume 1, Lesson 6, Page 1",
    members: [
      "Abdullah Al Noman",
      "Shamim Hossain",
      "Meherab Hossain",
      "Foysal Alam",
      "Rifat Hossain",
      "Saiful Islam",
    ],
  },
  {
    startDate: "05-02-2025",
    times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
    classNumber: "24-114",
    classType: "K-Junior",
    tutor: "Kim Monjur kim",
    level: "Beginner Volume 5, Lesson 10 , Page 145",
    members: [
      "Abdullah Al Noman",
      "Shamim Hossain",
      "Meherab Hossain",
      "Foysal Alam",
      "Rifat Hossain",
      "Saiful Islam",
    ],
  },
  {
    startDate: "10-01-2025",
    times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
    classNumber: "25-220",
    classType: "Privet Class",
    tutor: "Hwan kee",
    level: "Advance Korean Book, Vol 8, Lesson 5 , Page 178",
    members: [
      "Abdullah Al Noman",
      "Shamim Hossain",
      "Meherab Hossain",
      "Foysal Alam",
      "Rifat Hossain",
      "Saiful Islam",
    ],
  },
  {
    startDate: "10-01-2025",
    times: ["Tue : 11:00", "Thu : 11:00", "Sat : 11:00"],
    classNumber: "25-220",
    classType: "Privet Class",
    tutor: "Hwan kee",
    level: "Advance Korean Book, Vol 8, Lesson 5 , Page 178",
    members: [
      "Abdullah Al Noman",
      "Shamim Hossain",
      "Meherab Hossain",
      "Foysal Alam",
      "Rifat Hossain",
      "Saiful Islam",
    ],
  },
];

const StatCard = ({ value, label, icon, color }: any) => (
  <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4 w-full">
    <div
      className={`w-20 h-20 flex items-center justify-center rounded-xl ${color}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="w-full p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-semibold">Good Morning, Rana!</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          value="450"
          label="Total Students"
          icon={<SlGraduation size={30} className="text-[#F79009]" />}
          color="bg-[#F790091F]"
        />
        <StatCard
          value="55"
          label="Total Teachers"
          icon={<FiUsers size={30} className="text-[#2563EB]" />}
          color="bg-[#E9F3FF]"
        />
        <StatCard
          value="15"
          label="Total Course"
          icon={<FiBookOpen size={30} className="text-[#7C3AED]" />}
          color="bg-[#F1EDFA]"
        />
        <StatCard
          value="$95,250"
          label="Total Earning"
          icon={<FiDollarSign size={30} className="text-[#16A34A]" />}
          color="bg-[#DCFAE6]"
        />
      </div>

      {/* Earnings & Forum */}
      <div className="min-h-screen bg-gray-50 p-6 space-y-6">
        {/* Top Grid - Earnings and Forum */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">
          {/* Earnings */}
          <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-200 flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-base font-semibold text-gray-800">
                  Total Earnings
                </h2>
                <p className="text-2xl font-bold mt-2 flex items-center gap-2">
                  $75,745
                  <span className="text-[#17B26A] text-sm flex items-center gap-1">
                    <PiArrowLineUpRight className="w-4 h-4" /> 16%
                  </span>
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 text-gray-700 rounded-lg bg-white shadow-sm mt-4 sm:mt-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-gray-600"
                >
                  <rect
                    x="3"
                    y="4"
                    width="10"
                    height="9"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M3 7h10M6 3v2M10 3v2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                Monthly
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 6L8 11L3 6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 w-full">
              <EarningsChart />
            </div>
          </div>

          {/* Recent School Forum */}
          <div className="bg-white rounded-2xl border-2 border-blue-600 p-5">
            <div className="border-2  border-gray-300 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-bold text-gray-900">
                  Recent School Forum
                </h2>
                <button className="px-4 py-1.5 bg-[#144B8A] text-white rounded-full text-sm font-medium hover:bg-[#0f3a6b]">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="py-2 px-3 text-left font-semibold text-gray-700 text-xs">
                        Date
                      </th>
                      <th className="py-2 px-3 text-left font-semibold text-gray-700 text-xs">
                        Subject
                      </th>
                      <th className="py-2 px-3 text-left font-semibold text-gray-700 text-xs">
                        Description
                      </th>
                      <th className="py-2 px-3 text-center font-semibold text-gray-700 text-xs">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-3 text-gray-800 text-xs">
                          2025-01-03
                        </td>
                        <td className="py-3 px-3 text-gray-800 text-xs leading-tight">
                          Beginner's
                          <br />
                          Corner
                        </td>
                        <td className="py-3 px-3 text-gray-600 text-xs leading-tight">
                          A welcoming space for
                          <br />
                          beginners to share their..
                        </td>
                        <td className="py-3 px-3 text-center">
                          <button className="bg-gray-200 hover:bg-gray-300 p-1.5 rounded-lg inline-flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Our All Class Header */}
      <div className="bg-[#F8FAFC] px-6 py-5 rounded-t-2xl border-b border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        {/* Left Side: Title + Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
          <h2 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
            Our All Class
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search Course"
                className="w-full pl-10 pr-4 py-2.5 ring ring-gray-200 rounded-full bg-gray-50 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </div>

            {/* Date Range */}
            <select className="px-5 py-2.5 ring ring-gray-200 rounded-full bg-gray-50 text-sm text-gray-600 focus:outline-none">
              <option>Date range</option>
            </select>

            {/* Sort By */}
            <select className="px-5 py-2.5 ring ring-gray-200 rounded-full bg-gray-50 text-sm text-gray-600 focus:outline-none">
              <option>Sort by</option>
            </select>
          </div>
        </div>

        {/* Right Side: View All + Arrows */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-[#144B8A] text-white text-sm font-medium rounded-full hover:bg-[#0F172A] transition-colors whitespace-nowrap">
            View All
          </button>
          <div className="flex gap-2">
            <button className="p-2.5 ring ring-[#144B8A] rounded-full bg-white hover:bg-gray-50 transition-colors">
              <FaArrowLeft className="text-[#144B8A] text-sm" />
            </button>
            <button className="p-2.5 border border-gray-200 rounded-full bg-[#144B8A] hover:bg-gray-50 transition-colors">
              <FaArrowRight className="text-white text-sm" />
            </button>
          </div>
        </div>

      </div>
    </div>
        {/* Classes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl p-5 border border-gray-200 w-full flex flex-col"
            >
              <div className="bg-[#EEF6FF] text-[#144B8A] text-xs px-3 py-1.5 rounded-lg inline-block mb-3 font-medium">
                Start Date : {item.startDate}
              </div>
              <div className="flex gap-2 mb-3 flex-wrap text-[#144B8A]">
                {item.times.map((t, idx) => (
                  <div
                    key={idx}
                    className="text-xs bg-[#EEF6FF] px-2.5 py-1 rounded-lg font-medium"
                  >
                    {t}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mb-1">
                Class Number : {item.classNumber}
              </p>
              <p className="text-xs text-gray-600 mb-1">
                Class Type : {item.classType}
              </p>
              <p className="text-xs text-gray-600 mb-3">Tutor: {item.tutor}</p>
              <h3 className="font-bold text-sm leading-5 mb-4">
                Level: {item.level}
              </h3>
              <div className="space-y-1.5 mb-4">
                {item.members.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={`https://i.pravatar.cc/32?u=male${idx}`}
                      alt={m}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs text-gray-700">{m}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 ring ring-[#144B8A] text-[#144B8A] rounded-full bg-white font-medium text-sm hover:bg-blue-50">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Tables */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Recent Students */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold mb-3">
              Recent Registered Student
            </h2>
            <button className="bg-[#144B8A] text-white px-4 py-2 border rounded-full text-sm">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-500 bg-gray-100 font-semibold">
                <tr>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Class Type</th>
                  <th className="pb-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">2025-02-0{i}</td>
                    <td>Ferdal Afam</td>
                    <td>Korean Course 1-A</td>
                    <td className="flex justify-center">
                      <button className="bg-[#E9EAEB] shadow-sm hover:bg-gray-300 p-1.5 rounded-xl">
                        <MdOutlineRemoveRedEye className="text-gray-700" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Class Forum */}
        <div className="bg-white shadow rounded-xl p-6">
          <div className="flex justify-between mb-3">
            <h2 className="text-lg font-semibold mb-3">Recent Class Forum</h2>
            <button className="bg-[#144B8A] text-white px-4 py-2 border rounded-full text-sm">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-500 bg-gray-100 font-semibold">
                <tr>
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Course Name</th>
                  <th className="pb-2">Subject</th>
                  <th className="pb-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">2025-03-0{i}</td>
                    <td>Korean Course K-{i}</td>
                    <td>Beginner’s Corner</td>
                    <td className="flex justify-center">
                      <button className="bg-[#E9EAEB] shadow-sm hover:bg-gray-300 p-1.5 rounded-xl">
                        <MdOutlineRemoveRedEye className="text-gray-700" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
