"use client";

import { useState } from "react";
import { Settings, RotateCcw, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Component() {
  const [showModal, setShowModal] = useState(false);
  const [showAbsentDrawer, setShowAbsentDrawer] = useState(false);
  const [showAttendance, setShowAttedance] = useState(false);

  const handleRefresh = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* Header */}
      <div className="bg-white px-4 py-2 flex justify-between items-center">
        <div className="w-5 h-4 flex flex-col">
          <div className="w-full flex-1 bg-[#20a4d3]"></div>
          <div className="w-full flex-1"></div>
          <div className="w-full flex-1 bg-[#20a4d3]"></div>
          <div className="w-full flex-1"></div>
          <div className="w-full flex-1 bg-[#20a4d3]"></div>
        </div>
        <h1 className="text-lg font-medium text-[#20a4d3]">Smart Check</h1>
        <Settings className="w-6 h-6 text-[#20a4d3]" />
      </div>

      {/* Main Content */}
      <div className="space-y-4 flex flex-col flex-1">
        {/* Student Info Card */}
        <div className="p-6 pb-2">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-[#20a4d3] text-white text-center py-1">
              <h2 className="font-medium">학생정보</h2>
            </div>
            <CardContent className="px-8 py-6 pt-4 pr-0">
              <div className="flex items-center gap-4">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Profile photo"
                  width={96}
                  height={96}
                  unoptimized
                  className="object-cover"
                />
                <div className="flex-1 pl-6 text-sm font-semibold">
                  <h3 className="text-md font-bold text-gray-500 mb-1">
                    KLOTZBUCHER SILVIA
                  </h3>
                  <p className="text-gray-500">7701649</p>
                  <p className="text-gray-500">Exchange Student</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Steps Counter */}
        <div className="flex justify-between items-center bg-white py-3 px-4">
          <span className="text-gray-600 font-medium">메뉴</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#c3e1ed] rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#20a4d3]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1.3-3.9-3.1l-.8-2.3c-.4-1.1-1.3-1.6-2.3-1.6s-1.9.5-2.3 1.6L9.8 8.9z" />
              </svg>
            </div>
            <span className="text-[#20a4d3] font-medium">
              <span className="font-semibold">8987</span> 걸음
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="w-full flex-1 overflow-y-auto">
          <div className="grid grid-cols-3 gap-4 px-2">
            {/* Schedule */}
            <Card
              className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden"
              onClick={handleRefresh}
            >
              <Image
                src="/schedule.jpg"
                alt="Schedule Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>

            {/* Attendance Status */}
            <Card className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden"
              onClick={() => setShowAttedance(true)}
            >
              <Image
                src="/attendanceStatus.jpg"
                alt="Attendance Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>

            {/* Absent Status */}
            <Card
              className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden"
              onClick={() => setShowAbsentDrawer(true)}
            >
              <Image
                src="/absentStatus.jpg"
                alt="Absent Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>

            {/* Help */}
            <Card
              className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden"
              onClick={() =>
                window.open(
                  "https://attendweb.kmu.ac.kr/help/clientindex.html",
                  "_blank"
                )
              }
            >
              <Image
                src="/help.jpg"
                alt="Help Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>

            {/* Q&A */}
            <Card className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden">
              <Image
                src="/qa.jpg"
                alt="Q&A Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>

            {/* Homepage */}
            <Card
              className="text-center flex flex-col items-center justify-between border-0 shadow-lg p-0 overflow-hidden"
              onClick={() => window.open("https://www.kmu.ac.kr", "_blank")}
            >
              <Image
                src="/homepage.jpg"
                alt="Homepage Icon"
                width={48}
                height={48}
                unoptimized
                className="w-full"
              />
            </Card>
          </div>
        </div>

        {/* University Logo */}
        <div className="flex justify-center items-center py-6 bg-white">
          <Image
            src="/kmu.png"
            alt="University Logo"
            width={80}
            height={80}
            unoptimized
            className="object-contain"
          />
        </div>
      </div>

      {/* Floating Refresh Button */}
      <Button
        size="icon"
        onClick={handleRefresh}
        className="fixed bottom-12 right-6 w-10 h-10 rounded-full bg-[#20a4d3] hover:bg-[#1a8bb8] shadow-xl"
      >
        <RotateCcw className="w-6 h-6" />
      </Button>

      {/* Bottom Home Indicator */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full mb-2"></div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#00000033] flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white rounded-lg px-6 py-4 shadow-lg text-center text-black font-medium text-sm w-68">
              Please wait.
            </div>
          </motion.div>
        </div>
      )}

      {/* Drawer */}
      <AnimatePresence>
        {showAbsentDrawer && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 bg-white z-40 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4 text-md font-semibold text-[#20a4d3] p-1 px-5 border-b">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowAbsentDrawer(false)}
                className="text-lg gap-0"
              >
                <ChevronLeft className="!w-8 !h-8" /> Back
              </Button>
              <h2 className="">Absences Status</h2>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleRefresh}
                className="text-md"
              >
                새로고침
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Image
                src="/FakeAbs.jpg"
                alt="Absent Status"
                width={400}
                height={400}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Drawer */}
      <AnimatePresence>
        {showAttendance && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 bg-white z-40 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4 text-md font-semibold text-[#20a4d3] p-1 px-5 border-b">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowAttedance(false)}
                className="text-lg gap-0"
              >
                <ChevronLeft className="!w-8 !h-8" /> Back
              </Button>
              <h2 className="">Responsible subject</h2>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleRefresh}
                className="text-md"
              >
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Image
                src="/FakeAttendance.jpg"
                alt="Absent Status"
                width={400}
                height={400}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
