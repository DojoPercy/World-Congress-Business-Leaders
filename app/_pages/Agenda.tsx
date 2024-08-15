"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

interface AgendaItem {
  time: string;
  title: string;
  details: string[];
}

interface AgendaData {
  [key: string]: AgendaItem[];
}

const Agenda: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("Day 1");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const days: string[] = ["Day 1", "Day 2"];
  const agenda: AgendaData = {
    "Day 1": [
      {
        time: "8:00 AM – 9:00 AM",
        title: "Registration & Networking Breakfast",
        details: [
          "Welcome reception and check-in",
          "Networking opportunities over breakfast",
        ],
      },
      {
        time: "9:00 AM – 9:30 AM",
        title: "Opening Ceremony",
        details: [
          "Welcome Address by Congress Chairperson",
          "Keynote Speech by a Distinguished Global Leader",
        ],
      },
      {
        time: "9:30 AM – 10:30 AM",
        title: "Plenary Session: AI-Powered Leadership",
        details: [
          "Exploring the impact of AI on global leadership",
          "Panel discussion with industry experts and business leaders",
        ],
      },
      {
        time: "10:30 AM – 11:00 AM",
        title: "Coffee Break & Networking",
        details: ["Refreshments and informal networking"],
      },
      {
        time: "11:00 AM – 12:30 PM",
        title: "Conference Session 1: Innovation & Business Transformation",
        details: [
          "Case studies on AI-driven innovation",
          "Discussions on transforming traditional business models with AI",
        ],
      },
      {
        time: "12:30 PM – 2:00 PM",
        title: "Networking Lunch",
        details: ["Buffet lunch with themed networking tables"],
      },
      {
        time: "2:00 PM – 3:30 PM",
        title:
          "Conference Session 2: Board Governance and Leadership for Business Growth & Profitability",
        details: [
          "Strategies for effective board governance",
          "Discussions on leadership practices that drive business growth and profitability",
          "Expert panel on governance frameworks and their impact on financial performance",
        ],
      },
      {
        time: "3:30 PM – 4:00 PM",
        title: "Day 1 Wrap-Up & Key Takeaways",
        details: ["Summary of the day's discussions", "Announcements for Day 2"],
      },
      {
        time: "4:00 PM – 6:00 PM",
        title: "Awards Ceremony: Business Excellence Awards",
        details: [
          "Recognition of outstanding leadership, innovation, and achievements",
          "Presentation of awards in various categories",
          "Photo sessions and celebratory networking",
        ],
      },
      {
        time: "6:00 PM",
        title: "Adjournment of Day 1",
        details: ["End of formal sessions", "Optional evening networking opportunities"],
      },
    ],
    "Day 2": [
      {
        time: "8:30 AM – 9:30 AM",
        title: "Networking Breakfast",
        details: ["Informal networking over breakfast"],
      },
      {
        time: "9:30 AM – 11:00 AM",
        title: "Industry Tour: AI and Innovation Hubs in Dubai",
        details: [
          "Visits to leading AI research centers and innovation hubs",
          "Guided tour of key facilities showcasing cutting-edge technologies",
        ],
      },
      {
        time: "11:00 AM – 11:30 AM",
        title: "Travel to Next Location",
        details: ["Transfer to a different industry site"],
      },
      {
        time: "11:30 AM – 1:00 PM",
        title: "Industry Tour: Dubai's Sustainable Business Models",
        details: [
          "Exploration of businesses leading in sustainability",
          "Insights into the integration of AI for sustainable practices",
        ],
      },
      {
        time: "1:00 PM – 2:30 PM",
        title: "Lunch Break",
        details: ["Lunch at a prominent business center with networking opportunities"],
      },
      {
        time: "2:30 PM – 4:00 PM",
        title: "Conference Session 3: Future Trends in Global Business Leadership",
        details: [
          "Predictive discussions on emerging trends",
          "Expert panel on future-proofing leadership strategies",
        ],
      },
      {
        time: "4:00 PM – 5:00 PM",
        title: "Closing Ceremony & Final Remarks",
        details: [
          "Closing address by Congress Chairperson",
          "Reflections on the key outcomes and future directions",
        ],
      },
      {
        time: "5:00 PM",
        title: "Departure & Farewell Networking",
        details: ["Informal networking and goodbyes as the event concludes"],
      },
    ],
  };

  return (
    <div className="font-montserrat text-black">
      {/* Mobile Dropdown */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex justify-between items-center w-full bg-gray-200 p-3 rounded-md"
        >
          <span>{selectedDay}</span>
          <FaChevronDown />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 bg-white border rounded-md shadow-lg">
            {days.map((day) => (
              <div
                key={day}
                onClick={() => {
                  setSelectedDay(day);
                  setIsDropdownOpen(false);
                }}
                className={`p-3 cursor-pointer ${
                  day === selectedDay ? "bg-gray-100" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Large Screen Tabs */}
      <div className="hidden md:flex justify-center bg-gray-100 p-4">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 m-2 rounded-md text-lg font-semibold ${
              day === selectedDay ? "bg-goldTheme text-white" : "bg-white"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Agenda Content */}
      <div className="p-4">
        <Transition
          show={true}
          appear={true}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            {agenda[selectedDay].map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-4 text-center md:text-left"
              >
                <h3 className="text-xl font-semibold">{item.time}</h3>
                <h4 className="text-lg font-medium">{item.title}</h4>
                <ul className="list-disc list-inside mt-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Agenda;
