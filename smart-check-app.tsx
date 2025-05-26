"use client"

import { Menu, Settings, Calendar, Users, UserX, HelpCircle, MessageSquare, Building, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Status Bar */}
      <div className="bg-gray-300 px-4 py-2 flex justify-between items-center text-black text-sm font-medium">
        <div className="flex items-center gap-1">
          <span>19:29</span>
          <div className="w-4 h-4 bg-[#20a4d3] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">📧</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-black rounded-sm"></div>
            <div className="w-1 h-3 bg-gray-500 rounded-sm"></div>
          </div>
          <span className="ml-1">5G</span>
          <div className="bg-yellow-400 text-black px-1 rounded text-xs font-bold ml-2">62</div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-4 py-4 flex justify-between items-center">
        <Menu className="w-6 h-6 text-[#20a4d3]" />
        <h1 className="text-xl font-medium text-[#20a4d3]">Smart Check</h1>
        <Settings className="w-6 h-6 text-[#20a4d3]" />
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {/* Student Info Card */}
        <div className="p-6 pb-0">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-[#20a4d3] text-white text-center pt-1">
              <h2 className="font-medium">학생정보</h2>
            </div>
            <CardContent className="p-8 pt-6 pr-2">
              <div className="flex items-center gap-4">
                <div className="w-24 overflow-hidden bg-gray-200 flex-shrink-0">
                  <img src="/profile-photo.jpeg" alt="Profile photo" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 pl-6 text-sm font-medium">
                  <h3 className="text-md font-medium text-gray-500 mb-1">KLOTZBUCHER SILVIA</h3>
                  <p className="text-gray-500">7701649</p>
                  <p className="text-gray-500">Exchange Student</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Steps Counter */}
        <div className="flex justify-between items-center bg-white p-3">
          <span className="text-gray-600 font-medium">메뉴</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#c3e1ed] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-[#20a4d3]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1.3-3.9-3.1l-.8-2.3c-.4-1.1-1.3-1.6-2.3-1.6s-1.9.5-2.3 1.6L9.8 8.9z" />
              </svg>
            </div>
            <span className="text-[#20a4d3] font-medium">8987 걸음</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-3 gap-4 px-2">
          {/* Schedule */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-gray-700 font-medium">Schedule</p>
          </Card>

          {/* Attendance Status */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <div className="relative">
                <Users className="w-6 h-6 text-purple-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Attendance</p>
              <p className="text-gray-700 font-medium">Status</p>
            </div>
          </Card>

          {/* Absent Status */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <UserX className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-gray-700 font-medium">Absent</p>
            <p className="text-gray-700 font-medium">Status</p>
          </Card>

          {/* Help */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-gray-700 font-medium">Help</p>
          </Card>

          {/* Q&A */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-gray-700 font-medium">Q&A</p>
          </Card>

          {/* Homepage */}
          <Card className="p-4 text-center flex flex-col items-center justify-between border-0 shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <Building className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-gray-700 font-medium">Homepage</p>
          </Card>
        </div>

        {/* University Logo */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#20a4d3] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-gray-600 font-medium">계명대학교</span>
          </div>
        </div>
      </div>

      {/* Floating Refresh Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#20a4d3] hover:bg-[#1a8bb8] shadow-xl"
      >
        <RotateCcw className="w-6 h-6" />
      </Button>

      {/* Bottom Home Indicator */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full mb-2"></div>
    </div>
  )
}
