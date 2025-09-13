"use client";

import Image from "next/image";
import {
  AiOutlineAppstore
} from "react-icons/ai";
import {
  BsViewList, BsGear, BsFire, BsThreeDots, BsBookmark, BsBezier2
} from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { TbLocation } from "react-icons/tb";
import { PiFolderPlus, PiWaveformLight } from "react-icons/pi";
import { FaPauseCircle, FaMicrophone } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import {
  MdOutlineNotificationsActive, MdKeyboardArrowDown
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";

//
// -----------------------------
// Task Components
// -----------------------------
type TaskCardProps = {
  label: string;
  labelColor: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  avatars?: string[];
  comments?: number;
  files?: number;
  progress?: string;
};

function TaskCard({
  label,
  labelColor,
  title,
  description,
  date,
  image,
  avatars,
  comments,
  files,
  progress,
}: TaskCardProps) {
  return (
    <div className="flex flex-col w-full max-w-64 bg-white rounded-xl p-4 space-y-2">
      {/* Label */}
      <span className={`inline-block w-fit rounded-sm px-3 py-1 text-xs font-medium text-white ${labelColor}`}>
        {label}
      </span>

      {/* Optional image */}
      {image && (
        <div className="relative w-full h-28 md:h-36 bg-gray-100 rounded-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}

      {/* Title + description */}
      <h3 className="text-xs font-bold text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>

      {/* Date */}
      <span className="w-fit mt-1 rounded-sm border border-gray-300 px-2 py-0 text-[10px] font-bold">
        {date}
      </span>

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between">
        {/* Avatars */}
        {avatars && (
          <div className="flex -space-x-2">
            {avatars.map((url, i) => (
              <Image
                key={i}
                src={url}
                alt={`avatar-${i}`}
                width={18}
                height={18}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
        )}
        {/* Comments */}
        {comments !== undefined && (
          <div className="flex items-center space-x-1 text-gray-600 text-xs">
            <BsBookmark size={12} />
            <p>{comments} comments</p>
          </div>
        )}
        {/* Files */}
        {files !== undefined && (
          <div className="flex items-center space-x-1 text-gray-600 text-xs">
            <BsBezier2 size={12} />
            <p>{files} files</p>
          </div>
        )}
        {/* Progress */}
        {progress && (
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <FaRegCircleCheck size={14} />
            <span>{progress}</span>
          </div>
        )}
      </div>
    </div>
  );
}

type TaskColumnProps = {
  title: string;
  cards: TaskCardProps[];
};

function TaskColumn({ title, cards }: TaskColumnProps) {
  return (
    <div>
      <div className="flex justify-between items-center font-semibold mb-2 bg-white rounded-lg p-3 text-gray-600 text-sm">
        <span>{title}</span>
        <div className="flex items-center gap-2">
          <BsThreeDots size={14} />
          <button className="px-2 rounded bg-gray-100 text-blue-600">+</button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {cards.map((card, i) => (
          <TaskCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
}

//
// -----------------------------
// Chat Components
// -----------------------------
type ChatMessageProps = {
  sender: "me" | "other";
  type: "text" | "audio";
  avatar: string;
  content: string;
  time: string;
};

function ChatMessage({ sender, type, avatar, content, time }: ChatMessageProps) {
  if (sender === "other") {
    return (
      <div className="flex items-start space-x-2 w-fit">
        <Image src={avatar} alt="user" width={24} height={24} className="rounded-full border-2 border-white" />
        <div className="flex-1">
          <div
            className={`rounded-lg px-2 py-1 text-xs ${
              type === "text" ? "bg-gray-100 text-gray-700" : "bg-gray-100 flex items-center space-x-1"
            }`}
          >
            {type === "text" ? (
              content
            ) : (
              <>
                <FaPauseCircle className="text-blue-600" size={20} />
                <PiWaveformLight className="text-blue-600" size={20} />
                <PiWaveformLight size={20} />
                <p className="text-xs text-gray-600">{content}</p>
              </>
            )}
          </div>
          <div className="text-gray-400 px-1 mt-1 text-[10px]">{time}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex justify-end space-x-2">
        <div className="bg-blue-500 text-white rounded-lg px-2 py-1 text-xs">{content}</div>
        <Image src={avatar} alt="me" width={24} height={24} className="rounded-full border-2 border-white" />
      </div>
      <div className="flex justify-end text-gray-400 px-1 mt-1 mr-8 text-[10px]">{time}</div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="flex items-center space-x-2 p-4 border-t">
      <div className="flex w-full items-center bg-gray-100 rounded-lg px-3">
        <input
          type="text"
          placeholder="write here..."
          className="w-full bg-transparent py-2 text-xs font-semibold text-gray-400 outline-none"
        />
      </div>
      <FaMicrophone className="text-gray-400" size={16} />
      <BsThreeDots className="text-gray-400" size={24} />
    </div>
  );
}

function ChatPanel() {
  const messages: ChatMessageProps[] = [
    { sender: "other", type: "text", avatar: "https://i.pravatar.cc/30?img=1", content: "Hello 👋", time: "00:00 pm" },
    { sender: "me", type: "text", avatar: "https://i.pravatar.cc/30?img=2", content: "Hi Everyone 🙌", time: "00:00 pm" },
    { sender: "other", type: "text", avatar: "https://i.pravatar.cc/30?img=3", content: "How are you, what did you do Everyone", time: "00:01 pm" },
    { sender: "other", type: "text", avatar: "https://i.pravatar.cc/30?img=4", content: "Good 👌", time: "00:01 pm" },
    { sender: "other", type: "audio", avatar: "https://i.pravatar.cc/30?img=5", content: "1:25", time: "00:01 pm" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-gray-50">
      {/* Header */}
      <div className="flex justify-end items-center w-full h-14  space-x-8 text-gray-500 pl-4 pr-3">
        <MdOutlineNotificationsActive size={20} />
        <div className="flex w-fit items-center space-x-1">
          <Image src="/quack.svg" alt="user" width={32} height={32} className="rounded-full bg-purple-200 p-1" />
          <MdKeyboardArrowDown className="text-blue-600" size={24} />
        </div>
      </div>

      {/* Member list */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-sm font-bold text-gray-900">Member (25)</h2>
        <button className="text-gray-500 font-semibold text-xs">View All</button>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto px-4">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <Image key={id} src={`https://i.pravatar.cc/30?img=${id}`} alt={`user${id}`} width={24} height={24} className="rounded-full" />
        ))}
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
        {messages.map((msg, i) => (
          <ChatMessage key={i} {...msg} />
        ))}
      </div>

      <ChatInput />
    </aside>
  );
}

const navItems = [
  { icon: <AiOutlineAppstore size={22} />, label: "Dashboard", href: "#" },
  { icon: <BsViewList size={22} />, label: "Tasks", href: "#" },
  { icon: <GiOpenBook size={22} />, label: "Docs", href: "#" },
  { icon: <BsGear size={22} />, label: "Settings", href: "#" },
];


//
// -----------------------------
// PlatformPreview utama
// -----------------------------
export default function PlatformPreview() {
  return (
    <section id="platform" className="px-4 md:px-10 py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Platform yang Dirancang untuk Tim Modern
      </h2>
      <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-center">
        Lihat bagaimana ProductivityPro mengintegrasikan semua kebutuhan tim Anda dalam satu interface.
      </p>

      <div className="flex flex-col lg:flex-row h-auto w-full bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col w-16 md:w-20 bg-gray-50 items-center py-4 space-y-20">
          <div className="flex flex-col justify-center items-center">
            <Image src="/mircrosoft.svg" alt="logo" width={28} height={28} />
            <p className="text-blue-950 text-xs md:text-sm font-semibold">PPRO</p>
          </div>
          <div className="space-y-4">
            {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center justify-center lg:justify-start gap-3 px-4 py-2rounded-md"
            >
              {item.icon} 
            </a>
          ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <nav className="flex items-center justify-center w-full h-14 bg-gray-50 border-b border-gray-100 px-4">
            <div className="relative w-full max-w-xs md:max-w-md">
              <input placeholder="Search anything..." className="w-full rounded-lg bg-gray-100 py-2 pl-4 pr-10 text-sm text-gray-600 outline-none" />
              <CiSearch className="absolute inset-y-2 right-3 text-gray-500" size={20} />
            </div>
          </nav>

          {/* Task Board */}
          <div className="flex-1 p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <BsFire className="text-orange-400" size={24} />
                <h1 className="text-xl md:text-2xl font-bold">Task</h1>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((id) => (
                    <Image key={id} src={`https://i.pravatar.cc/30?img=${id}`} alt={`user${id}`} width={28} height={28} className="rounded-full border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">+6</p>
                <p className="text-sm font-medium px-2 py-0 rounded-full border border-gray-400 text-blue-600">+</p>
              </div>
            </div>

            {/* 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TaskColumn
                title="Backlog"
                cards={[
                  {
                    label: "Design",
                    labelColor: "bg-blue-800",
                    title: "Update support documentation",
                    description: "Create content for Peceland App",
                    date: "Aug 16, 2025",
                    image: "https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=600",
                    avatars: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2"],
                    progress: "0/8",
                  },
                  {
                    label: "Research",
                    labelColor: "bg-blue-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                  {
                    label: "Planning",
                    labelColor: "bg-orange-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                ]}
              />
              <TaskColumn
                title="To Do"
                cards={[
                  {
                    label: "Design",
                    labelColor: "bg-blue-800",
                    title: "Update support documentation",
                    description: "Create content for Peceland App",
                    date: "Aug 16, 2025",
                    image: "https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=600",
                    avatars: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2"],
                    progress: "0/8",
                  },
                  {
                    label: "Research",
                    labelColor: "bg-blue-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                  {
                    label: "Planning",
                    labelColor: "bg-orange-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                ]}
              />
              <TaskColumn
                title="In Progress"
                cards={[
                   {
                    label: "Design",
                    labelColor: "bg-blue-800",
                    title: "Update support documentation",
                    description: "Create content for Peceland App",
                    date: "Aug 16, 2025",
                    image: "https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=600",
                    avatars: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2"],
                    progress: "0/8",
                  },
                  {
                    label: "Research",
                    labelColor: "bg-blue-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                  {
                    label: "Planning",
                    labelColor: "bg-orange-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                ]}
              />
              <TaskColumn
                title="Reviewx"
                cards={[
                   {
                    label: "Design",
                    labelColor: "bg-blue-800",
                    title: "Update support documentation",
                    description: "Create content for Peceland App",
                    date: "Aug 16, 2025",
                    image: "https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=600",
                    avatars: ["https://i.pravatar.cc/30?img=1", "https://i.pravatar.cc/30?img=2"],
                    progress: "0/8",
                  },
                  {
                    label: "Planning",
                    labelColor: "bg-orange-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },  
                  {
                    label: "Research",
                    labelColor: "bg-blue-500",
                    title: "Competitor analysis",
                    description: "Research features from competitors",
                    date: "Aug 17, 2025",
                    avatars: ["https://i.pravatar.cc/30?img=3"],
                    progress: "1/5",
                  },
                  
                ]}
              />
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <ChatPanel />
      </div>
    </section>
  );
}
