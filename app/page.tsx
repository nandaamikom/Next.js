import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

import { FaRegCircleCheck, FaChartLine, FaStar, FaTwitter  } from "react-icons/fa6";
import {
  BsPeople,
  BsShieldCheck,
  BsViewList,
  BsGear,
  BsFire,
  BsThreeDots,
  BsBookmark,
  BsPersonCircle,
  BsBezier2,
  BsCheck2Circle,
} from "react-icons/bs";
import { PiLightning, PiFolderPlus, PiWaveformLight } from "react-icons/pi";
import { FaRegChartBar, FaPauseCircle, FaMicrophone, FaFacebookF  } from "react-icons/fa";
import { LiaUserPlusSolid } from "react-icons/lia";
import { AiOutlineAppstore } from "react-icons/ai";
import { GiOpenBook } from "react-icons/gi";
import { TbLocation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineNotificationsActive,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <nav className="flex flex-row w-full justify-between items-center px-30 py-12 border-b border-gray-200 text-2xl">
        <a
          href=""
          className="font-extrabold text-3xl text-blue-800 border-none"
        >
          ProductivityPro
        </a>
        <a href="" className="font-medium hover:underline">
          Home
        </a>
        <a href="" className="font-medium hover:underline">
          Features
        </a>
        <a href="" className="font-medium hover:underline">
          How It Works
        </a>
        <a href="" className="font-medium hover:underline">
          Pricing
        </a>
        <a href="" className="font-medium hover:underline">
          Testimonials
        </a>
        <a href="" className="font-medium hover:underline">
          Contact
        </a>
        <a
          href=""
          className="px-10 py-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-3xl text-gray-100"
        >
          Get started
        </a>
      </nav>
      {/* main content */}
      <div className="flex flex-row px-30 py-35 justify-between w-full space-x-40 ">
        <div className="flex flex-col w-500 justify-between py-8">
          <div className="text-left text-4xl md:text-6xl font-bold tracking-normal leading-normal">
            <p>Kelola Proyek</p>
            <p>& Tim Lebih</p>
            <p>Mudah dalam</p>
            <p>Satu Platform</p>
          </div>
          <p className="w-full text-gray-800 text-3xl">
            Kolaborasi tanpa batas, integrasi cerdas, dan produktivitas
            meningkat 3x lipat.
          </p>
          <div className="flex flex-row space-x-8">
            <button className="px-12 py-3 bg-blue-700 hover:bg-blue-800 font-medium rounded-3xl text-gray-100 border-none text-2xl">
              Coba Gratis
            </button>
            <button className="px-12 py-3 border rounded-3xl text-2xl hover:bg-gray-800 hover:text-white">
              Lihat Demo
            </button>
          </div>
        </div>
        <div
          className="p-20 w-full bg-blue-50  rounded-4xl"
          style={{ boxShadow: "8px 8px 40px rgba(0,0,0,0.2)" }}
        >
          <div
            className="flex flex-col w-full h-full bg-gray-50 rounded-4xl p-10"
            style={{ boxShadow: "8px 8px 30px rgba(0,0,0,0.2)" }}
          >
            <span className="inline-block w-fit mb-6 rounded-xl bg-blue-700 px-10 py-2 text-lg font-medium text-gray-100">
              Content
            </span>
            <div className="relative w-full h-50 bg-gray-100 rounded-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1705028011814-f4df6ad7ecca?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="colorful abstract holographic"
                width={600}
                height={200}
                className="mb-4 h-full w-full rounded-xl object-cover"
              />
            </div>
            {/* Title & Description */}
            <h3 className="text-xl mt-6 font-semibold text-gray-900">
              Update support documentation
            </h3>
            <p className="text-lg font-medium mt-2 text-gray-500">
              Create content for peceland App
            </p>
            <span className="w-fit mt-3 rounded-md border px-4 py-1 text-sm font-medium">
              Aug 16, 2025
            </span>
            <div className="mt-4 flex items-center justify-between w-full">
              <div className="flex items-center">
                {/* Avatars */}
                <div className="flex -space-x-2">
                  <Image
                    className="h-6 w-6 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/30?img=1"
                    alt="user1"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="h-6 w-6 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/30?img=2"
                    alt="user2"
                    width={24}
                    height={24}
                  />
                  <Image
                    className="h-6 w-6 rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/30?img=3"
                    alt="user3"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 w-fit">
                <FaRegCircleCheck className="text-lg" size={20} />
                <span className="text-lg font-semibold">0/8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center bg-gray-50 space-y-20 px-40 py-20">
        <p className="text-2xl text-gray-700">
          Dipercaya oleh perusahaan global dan startup inovatif
        </p>
        <div className="flex w-full justify-between items-center">
          <Image
            className="w-20"
            src="/mircrosoft.svg"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-16"
            src="/google.svg"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-21"
            src="/linkedin.svg"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-18"
            src="/amazon.svg"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-32"
            src="/adobe.png"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-18"
            src="/node.svg"
            alt="user1"
            width={100}
            height={100}
          />
          <Image
            className="w-17"
            src="/laravel.svg"
            alt="user1"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-center px-30 py-35 mt-6 space-y-6">
        <p className="text-5xl font-bold">
          Fitur yang Membuat Tim Anda Lebih Produktif
        </p>
        <p className="text-2xl font-medium w-220 text-center mb-24  px-0 tracking-wide">
          Semua yang Anda butuhkan untuk mengelola proyek dan tim dalam satu
          platform yang powerfull dan mudah digunakan.
        </p>
        <div className="grid grid-cols-2 gap-20 w-full px-0">
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl">
            <div className="items-start">
              <BsPeople
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-2"
                size={55}
              />
            </div>
            <p className="text-4xl font-semibold">Kolaborasi Real-time</p>
            <p className="text-2xl font-medium">
              Edit bersama tim dalam waktu nyata. Lihat perubahan langsung dan
              berkomunikasi tanpa hambatan.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl">
            <div className="items-start">
              <PiLightning
                className="bg-gradient-to-br from-purple-700 to-pink-500 rounded-xl text-white p-2"
                size={55}
              />
            </div>
            <p className="text-4xl font-semibold">Integrasi Lengkap</p>
            <p className="text-2xl font-medium">
              Terhubung dengan Google Drive, Slack, Zoom, dan 100+ aplikasi
              lainnya dalam satu platform.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl">
            <div className="items-start">
              <FaRegChartBar
                className="bg-gradient-to-br from-green-800 to-green-400 rounded-xl text-white p-2"
                size={55}
              />
            </div>
            <p className="text-4xl font-semibold">Analitik & Laporan</p>
            <p className="text-2xl font-medium">
              Dashboard progress real-time dengan insights mendalaman untuk
              mengoptimalkan produktivitas tim.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl">
            <div className="items-start">
              <BsShieldCheck
                className="bg-gradient-to-br from-red-800 to-red-400 rounded-xl text-white p-2"
                size={55}
              />
            </div>
            <p className="text-4xl font-semibold">Keamanan Data</p>
            <p className="text-2xl font-medium">
              Enkripsi end-to-end dan role-based access control untuk melindungi
              data perusahaan Anda.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-30 py-8 space-y-6">
        <p className="text-5xl font-bold">Cara Kerja dalam 3 Langkah Mudah</p>
        <p className="text-2xl font-medium w-220 text-center mb-24  px-0 tracking-wide">
          Mulai meningkatkan produktivitas tim Anda hanya dalam beberapa menit
          dengan proses setup yang sederhana
        </p>
        <div className="grid grid-cols-3 gap-20 w-full px-0 justify-center items-center">
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <PiFolderPlus
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Buat Proyek</p>
            <p className="text-lg text-center font-medium px-10">
              Mulai dengan membuat workspace baru untuk proyek Anda. Setup dalam
              hitungan menit.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <LiaUserPlusSolid
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Tambah Tim</p>
            <p className="text-lg text-center font-medium px-12">
              Undang anggota tim dan atur role sesuai kebutuhan. Kolaborasi
              dimulai dari sini.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <FaChartLine
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Pantau Proges</p>
            <p className="text-lg text-center font-medium px-10">
              List Dashboard interaktif dengan real-time updates dan analytics
              yang mendalam.
            </p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-900 to-blue-500 font-medium tracking-wide text-white text-lg rounded-xl px-12 py-4 mt-12 ">
          Mulai Sekarang - Gratis
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-60 py-8 space-y-6 mt">
        <p className="text-5xl font-bold">
          Platform yang Dirancang untuk Tim Modern
        </p>
        <p className="text-2xl font-medium w-220 text-center mb-24 px-0 tracking-wide">
          Lihat bagaimana ProductivityPro mengintegrasikan semua kebutuhan tim
          Anda dalam satu interface yang intuitif dan powerful.
        </p>

        <div className="flex h-250 w-full bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          {/* Sidebar */}
          <div className="flex flex-col w-20 bg-gray-50 rounded-bl-xl items-center py-4 space-y-40">
            <div className="flex flex-col justify-center items-center">
              <Image
                className=""
                src="/mircrosoft.svg"
                alt="user1"
                width={30}
                height={30}
              />
              <p className="text-blue-950 text-sm font-semibold">PPRO</p>
            </div>
            <div className="space-y-4">
              <AiOutlineAppstore className="p-2" size={34} />
              <BsViewList className="p-2" size={34} />
              <GiOpenBook
                className="px-2 py-1 rounded-xl bg-blue-600 text-white"
                size={34}
              />
              <BsGear className="p-2" size={34} />
              <TbLocation className="p-2" size={34} />
              <PiFolderPlus className="p-2" size={34} />
            </div>
          </div>

          {/* Main Section */}
          <div className="flex flex-col flex-1">
            {/* Navbar */}
            <nav className="flex items-center justify-center w-full h-16 bg-gray-50 border-b border-gray-100 px-4 py-3">
              {/* Search */}
              <div className="relative w-66 max-w-md justify-center">
                <p className="w-full rounded-lg bg-gray-100 py-2 pl-4 pr-10 text-sm text-gray-300 ">
                  Search anything...
                </p>
                <CiSearch
                  className="absolute inset-y-2 right-3 flex items-center text-gray-500"
                  size={20}
                />
              </div>
            </nav>

            {/* Main Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center space-x-2">
                  <BsFire className="text-orange-400" size={30} />
                  <h1 className="text-3xl font-bold">Task</h1>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    <Image
                      className="rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/30?img=1"
                      alt="user1"
                      width={32}
                      height={32}
                    />
                    <Image
                      className=" rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/30?img=2"
                      alt="user2"
                      width={32}
                      height={32}
                    />
                    <Image
                      className=" rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/30?img=3"
                      alt="user3"
                      width={32}
                      height={32}
                    />
                    <Image
                      className=" rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/30?img=2"
                      alt="user2"
                      width={32}
                      height={32}
                    />
                    <Image
                      className=" rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/30?img=3"
                      alt="user3"
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="text-2xl text-gray-500">+6</p>
                  <p className="text-lg font-medium px-2 py-0 rounded-full border border-gray-400 text-blue-600">
                    +
                  </p>
                </div>
              </div>
              {/* 
              <div className="flex flex-row justify-between space-x-3 items-center"></div> */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                <div className="">
                  <div className="flex flex-row justify-between items-center font-semibold mb-4 w-full bg-white rounded-lg p-4 text-sm text-gray-600">
                    <div className="">Backlog</div>
                    <div className="flex flex-row space-x-2 items-center">
                      <BsThreeDots size={16} />
                      <p className="text-lg font-medium px-2 py-0 rounded-lg bg-gray-100 text-blue-600">
                        +
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col w-full max-w-64 h-full max-h-80 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-800 px-4 py-1 text-xs font-medium text-gray-100">
                        Design
                      </span>
                      <div className="relative w-full h-36 bg-gray-100 rounded-xl">
                        <Image
                          src="https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=1611&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="colorful abstract holographic"
                          width={600}
                          height={200}
                          className="mb-4 h-full w-full rounded-xl object-cover"
                        />
                      </div>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-4 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=3"
                              alt="user3"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Research
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-orange-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Planning
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-5 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex space-x-1 text-gray-600">
                            <BsBookmark size={12} />
                            <p className="text-xs font-semibold">4 comment</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-1 w-fit">
                          <BsBezier2 className="text-gray-600" size={9} />
                          <span className="text-[10px] font-semibold text-gray-600">
                            11 file
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row justify-between items-center font-semibold mb-4 w-full bg-white rounded-lg p-4 text-sm text-gray-600">
                    <div className="">To do</div>
                    <div className="flex flex-row space-x-2 items-center">
                      <BsThreeDots size={16} />
                      <p className="text-lg font-medium px-2 py-0 rounded-lg bg-gray-100 text-blue-600">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Research
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-80 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-800 px-4 py-1 text-xs font-medium text-gray-100">
                        Design
                      </span>
                      <div className="relative w-full h-36 bg-gray-100 rounded-xl">
                        <Image
                          src="https://plus.unsplash.com/premium_photo-1683121918361-ab405208b54f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="colorful abstract holographic"
                          width={600}
                          height={200}
                          className="mb-4 h-full w-full rounded-xl object-cover"
                        />
                      </div>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-4 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=3"
                              alt="user3"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Research
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row justify-between items-center font-semibold mb-4 w-full bg-white rounded-lg p-4 text-sm text-gray-600">
                    <div className="">On Progress</div>
                    <div className="flex flex-row space-x-2 items-center">
                      <BsThreeDots size={16} />
                      <p className="text-lg font-medium px-2 py-0 rounded-lg bg-gray-100 text-blue-600">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Research
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-orange-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Planning
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-5 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex space-x-1 text-gray-600">
                            <BsBookmark size={12} />
                            <p className="text-xs font-semibold">4 comment</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-1 w-fit">
                          <BsBezier2 className="text-gray-600" size={9} />
                          <span className="text-[10px] font-semibold text-gray-600">
                            11 file
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-80 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-800 px-4 py-1 text-xs font-medium text-gray-100">
                        Design
                      </span>
                      <div className="relative w-full h-36 bg-gray-100 rounded-xl">
                        <Image
                          src="https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="colorful abstract holographic"
                          width={600}
                          height={200}
                          className="mb-4 h-full w-full rounded-xl object-cover"
                        />
                      </div>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-4 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=3"
                              alt="user3"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row justify-between items-center font-semibold mb-4 w-full bg-white rounded-lg p-4 text-sm text-gray-600">
                    <div className="">Review</div>
                    <div className="flex flex-row space-x-2 items-center">
                      <BsThreeDots size={16} />
                      <p className="text-lg font-medium px-2 py-0 rounded-lg bg-gray-100 text-blue-600">
                        +
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col w-full max-w-64 h-full max-h-80 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-800 px-4 py-1 text-xs font-medium text-gray-100">
                        Design
                      </span>
                      <div className="relative w-full h-36 bg-gray-100 rounded-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1552963686-a597448ee447?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="colorful abstract holographic"
                          width={600}
                          height={200}
                          className="mb-4 h-full w-full rounded-xl object-cover"
                        />
                      </div>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-4 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=3"
                              alt="user3"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-blue-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Research
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-3 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex -space-x-2">
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=1"
                              alt="user1"
                              width={18}
                              height={18}
                            />
                            <Image
                              className="rounded-full border-2 border-white"
                              src="https://i.pravatar.cc/30?img=2"
                              alt="user2"
                              width={18}
                              height={18}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                          <FaRegCircleCheck
                            className="text-gray-600"
                            size={14}
                          />
                          <span className="text-xs font-semibold text-gray-600">
                            0/8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-64 h-full max-h-60 bg-white rounded-xl p-4">
                      <span className="inline-block w-fit mb-4 rounded-sm bg-orange-500 px-4 py-1 text-xs font-medium text-gray-100">
                        Planning
                      </span>
                      {/* Title & Description */}
                      <h3 className="text-xs mt-2 font-bold text-gray-900">
                        Update support documentation
                      </h3>
                      <p className="text-xs font-medium mt-1 text-gray-500">
                        Create content for peceland App
                      </p>
                      <span className="w-fit mt-3 rounded-sm border border-gray-600 px-2 py-0 text-[10px] font-bold">
                        Aug 16, 2025
                      </span>
                      <div className="mt-5 flex items-center justify-between w-full">
                        <div className="flex items-center">
                          {/* Avatars */}
                          <div className="flex space-x-1 text-gray-600">
                            <BsBookmark size={12} />
                            <p className="text-xs font-semibold">4 comment</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-1 w-fit">
                          <BsBezier2 className="text-gray-600" size={9} />
                          <span className="text-[10px] font-semibold text-gray-600">
                            11 file
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 bg-gray-50 flex flex-col">
            {/* Header Chat */}
            <div className="flex justify-end items-center w-full h-16 space-x-8 text-gray-500 pl-4 py-4 pr-3">
              <MdOutlineNotificationsActive size={20} />
              <div className="flex w-fit items-center space-x-1">
                <Image
                  src="/quack.svg"
                  alt="user"
                  width={32}
                  height={32}
                  className="rounded-full bg-purple-200 p-1"
                />
                <MdKeyboardArrowDown className="text-blue-600" size={24} />
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <h2 className="text-sm font-bold text-gray-900">Member (25)</h2>
              <button className="text-gray-500 font-semibold  text-xs">
                View All
              </button>
            </div>

            {/* Member list */}
            <div className="flex items-center justify-between w-full overflow-x-auto p-4">
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=1"
                alt="user1"
                width={24}
                height={24}
              />
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=2"
                alt="user2"
                width={24}
                height={24}
              />
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=3"
                alt="user3"
                width={24}
                height={24}
              />
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=2"
                alt="user2"
                width={24}
                height={24}
              />
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=3"
                alt="user3"
                width={24}
                height={24}
              />
              <Image
                className="rounded-full"
                src="https://i.pravatar.cc/30?img=3"
                alt="user3"
                width={24}
                height={24}
              />
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              <div className="flex items-start space-x-2 w-fit">
                <Image
                  className="rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/30?img=1"
                  alt="user1"
                  width={24}
                  height={24}
                />
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg px-2 py-1  text-xs">
                    Hello 👋
                  </div>
                  <div className="text-gray-400 px-1 mt-1 text-[10px]">
                    00:00 pm
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-end space-x-2">
                  <div className="bg-blue-500 text-white rounded-lg px-2 py-1 text-xs">
                    Hi Everyone 🙌
                  </div>
                  <Image
                    className="rounded-full border-2 border-white"
                    src="https://i.pravatar.cc/30?img=1"
                    alt="user1"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex justify-end text-gray-400 px-1 mt-1 mr-8 text-[10px]">
                  00:00 pm
                </div>
              </div>
              <div className="flex items-start space-x-2 w-fit">
                <Image
                  className="rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/30?img=1"
                  alt="user1"
                  width={24}
                  height={24}
                />
                <div className="flex-1 w-fit max-w-34">
                  <div className="bg-gray-100 rounded-lg px-2 py-1  text-xs">
                    How are you, what did you do Everyone
                  </div>
                  <div className="text-gray-400 px-1 mt-1 text-[10px]">
                    00:01 pm
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-2 w-fit">
                <Image
                  className="rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/30?img=1"
                  alt="user1"
                  width={24}
                  height={24}
                />
                <div className="flex-1 w-fit max-w-34">
                  <div className="bg-gray-100 rounded-lg px-2 py-1  text-xs">
                    Good 👌
                  </div>
                  <div className="text-gray-400 px-1 mt-1 text-[10px]">
                    00:01 pm
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2 w-fit">
                <Image
                  className="rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/30?img=1"
                  alt="user1"
                  width={24}
                  height={24}
                />
                <div className="flex-1 w-fit max-w-34">
                  <div className="flex flex-row bg-gray-100 rounded-lg px-2 py-1 text-xs items-center">
                    <FaPauseCircle className="text-blue-600 mr-1" size={24} />
                    <PiWaveformLight className="text-blue-600" size={24} />
                    <PiWaveformLight className="" size={24} />
                    <p className="text-xs text-gray-600">1:25</p>
                  </div>
                  <div className="text-gray-400 px-1 mt-1 text-[10px]">
                    00:01 pm
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center space-x-2 p-4">
              <div className="flex w-full items-center bg-gray-100 rounded-lg px-3">
                <p className="w-full bg-transparent py-2 text-xs font-semibold text-gray-400">
                  write here...
                </p>
              </div>
              <FaMicrophone className="text-gray-400" size={16} />
              <BsThreeDots className="text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-30 py-24 space-y-6">
        <p className="text-5xl font-bold">
          Mengapa Tim Memilih ProductivityPro?
        </p>
        <p className="text-2xl font-medium w-220 text-center mb-24  px-0 tracking-wide">
          Lebih dari sekadar tool manajemen proyek. Kami memberikan solusi
          komprehensif untuk meningkatkan efisiensi dan kolaborasi tim.
        </p>
        <div className="grid grid-cols-3 gap-20 w-full px-0 justify-center items-center">
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <PiFolderPlus
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Hemat Waktu</p>
            <p className="text-lg text-center font-medium px-4">
              Otomatisasi tugas berulang dan workflow yang cerdas menghemat
              hingga 5 jam per minggu untuk setiap anggota tim.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <LiaUserPlusSolid
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Lebih Produktif</p>
            <p className="text-lg text-center font-medium px-12">
              Semua data terorganisir dalam satu tempat. Tidak ada lagi file
              yang hilang atau informasi yang tersebar.
            </p>
          </div>
          <div className="flex flex-col space-y-8 bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center">
            <div className="">
              <FaChartLine
                className="bg-gradient-to-br from-blue-900 to-blue-300 rounded-xl text-white p-3"
                size={90}
              />
            </div>
            <p className="text-4xl font-semibold">Fleksibel</p>
            <p className="text-lg text-center font-medium px-10">
              Akses penuh melalui web dan mobile app. Bekerja dari mana saja,
              kapan saja dengan sinkronisasi real-time.
            </p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-900 to-blue-500 font-medium tracking-wide text-white text-lg rounded-xl px-12 py-4 mt-12 ">
          Coba Gratis 14 Hari
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-30 py-24 space-y-6">
        <p className="text-5xl font-bold">Apa Kata Pengguna Kami</p>
        <p className="text-2xl font-medium w-220 text-center mb-24  px-0 tracking-wide">
          Bergabunglah dengan ribuan tim yang telah merasakan peningkatan
          produktivitas dengan ProductivityPro.
        </p>
        <div className="grid grid-cols-4 gap-20 w-full px-0 justify-center items-center">
          <div className="flex flex-col bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-start space-x-2">
                <BsPersonCircle className="text-blue-900" size={22} />
                <p className="text-md font-semibold">Eka Ferdiansyah</p>
              </div>
              <div className="flex flex-row items-center space-x-1 text-yellow-400">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
              </div>
            </div>
            <p className="w-full text-sm text-start">
              Simple, fast, and boosts my productivity!
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-start space-x-2">
                <BsPersonCircle className="text-blue-900" size={22} />
                <p className="text-md font-semibold">John Prayer</p>
              </div>
              <div className="flex flex-row items-center space-x-1 text-yellow-400">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
              </div>
            </div>
            <p className="w-full text-sm text-start">
              Best tool to manage my time and tasks.
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-start space-x-2">
                <BsPersonCircle className="text-blue-900" size={22} />
                <p className="text-md font-semibold">Emma Warner</p>
              </div>
              <div className="flex flex-row items-center space-x-1 text-yellow-400">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
              </div>
            </div>
            <p className="w-full text-sm text-start">
              Simple, fast, and boosts my productivity!
            </p>
          </div>
          <div className="flex flex-col bg-gray-100 w-full rounded-2xl p-12 shadow-xl justify-center items-center space-y-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-start space-x-2">
                <BsPersonCircle className="text-blue-900" size={22} />
                <p className="text-md font-semibold">Mike Chen</p>
              </div>
              <div className="flex flex-row items-center space-x-1 text-yellow-400">
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
                <FaStar size={12} />
              </div>
            </div>
            <p className="w-full text-sm text-start">
              Simple, fast, and boosts my productivity!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-30 py-24 space-y-6">
        <p className="text-5xl font-bold">
          Paket Harga yang Sesuai Kebutuhan Anda
        </p>
        <p className="text-2xl font-medium w-220 text-center mb-24  px-0 tracking-wide">
          Pilih paket yang tepat untuk tim Anda. Upgrade atau downgrade kapan
          saja tanpa komitmen jangka panjang.
        </p>
        <div className="grid grid-cols-3 gap-20 w-full h-200 px-60 justify-start items-center">
          <div className="flex flex-col space-y-10 bg-gray-50 w-full h-full rounded-2xl p-12 shadow-xl ">
            <div className="w-full">
              <p className="w-full text-blue-800 text-start text-4xl font-bold">
                Free
              </p>
              <p className="w-full text-start text-lg text-gray-400 ">
                Sempurna untuk tim kecil yang baru memulai
              </p>
              <div className="w-full flex flex-row items-end mt-4">
                <p className="text-5xl text-blue-800 text-start font-bold">
                  Rp.0
                </p>
                <p className="text-lg text-blue-800 text-start font-medium mb-1">
                  /Selamanya
                </p>
              </div>
            </div>
            <button className="bg-blue-800 font-medium tracking-wide text-white text-lg rounded-xl w-full py-4">
              Mulai Gratis
            </button>
            <div className="w-full space-y-3">
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Maksimal 3 pengguna
                </p>
              </div>
              <div className="flex flex-row space-x-4 items -center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  5 proyek aktif
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Storage 1GB
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Basic task management
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Email support
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 bg-gray-50 w-full h-full rounded-2xl p-12 shadow-xl ">
            <div className="w-full">
              <p className="w-full text-blue-800 text-start text-4xl font-bold">
                Pro
              </p>
              <p className="w-full text-start text-lg text-gray-400 ">
                Untuk tim yang ingin meningkatkan produktivitas
              </p>
              <div className="w-full flex flex-row items-end mt-4">
                <p className="text-5xl text-blue-800 text-start font-bold">
                  Rp.99k
                </p>
                <p className="text-lg text-blue-600 text-start font-medium mb-1">
                  /Bulan
                </p>
              </div>
            </div>
            <button className="bg-blue-800 font-medium tracking-wide text-white text-lg rounded-xl w-full py-4">
              Pilih Paket Pro
            </button>
            <div className="w-full space-y-3">
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Unlimited pengguna
                </p>
              </div>
              <div className="flex flex-row space-x-4 items -center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Unlimited proyek
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Storage 100GB
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Advanced analytics
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Semua integrasi
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Real-time collaboration
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Priority support
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Custom workflows
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 bg-gray-50 w-full h-full rounded-2xl p-12 shadow-xl ">
            <div className="w-full">
              <p className="w-full text-blue-800 text-start text-4xl font-bold">
                Enterprise
              </p>
              <p className="w-full text-start text-lg text-gray-400 ">
                Solusi enterprise dengan fitur advanced
              </p>
              <div className="w-full flex flex-row items-end mt-4">
                <p className="text-5xl text-blue-800 text-start font-bold">
                  Custom
                </p>
              </div>
            </div>
            <button className="bg-blue-800 font-medium tracking-wide text-white text-lg rounded-xl w-full py-4">
              Hubungi Sales
            </button>
            <div className="w-full space-y-3">
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Semua fitur Pro
                </p>
              </div>
              <div className="flex flex-row space-x-4 items -center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Unlimited storage
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Advanced security
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  SSO integration
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Custom integrations
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  24/7 phone support
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  SLA guarantee
                </p>
              </div>
              <div className="flex flex-row space-x-4 item-center ">
                <BsCheck2Circle className="text-green-500" size={23} />
                <p className="text-lg text-start text-blue-800 font-medium">
                  Dedicated account manager
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-2xl text-gray-500 w-full mt-24 mb-36">
          Semua paket termasuk free trial 14 hari. Tidak ada biaya setup atau
          kontrak jangka panjang
        </p>
      </div>
      <div className="flex flex-col w-full h-180 bg-blue-800 px-60 py-24 text-white">
        <div className="grid grid-cols-4 gap-auto w-full">
          <div className="w-fit">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="text-lg space-y-4">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shift planner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Recruiting
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="w-fit">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="text-lg space-y-4">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-fit">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lift Media
                </a>
              </li>
            </ul>
          </div>
          <div className="relative w-auto h-auto bg-blue-600 text-white p-12  space-y-4 mb-10 ">
            <p className="text-xl">Subscribe</p>
            <div className="flex flex-row w-full">
              <div className="flex-1 p-4 bg-white text-gray-500 rounded-l-xl">
                Email address
              </div>
              <IoArrowForward
                className="p-4 bg-blue-500 text-white rounded-r-lg"
                size={56}
              />
            </div>
            <p className="text-start">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>

        <div className="flex flex-row w-full border-t border-white py-20 items-center justify-between">
          <p className="text-2xl font-bold">
            ProductivityPro
          </p>
          <div className="flex flex-row space-x-6">
            <a href="#" className="hover:underline">
              Terms
            </a>

            <a href="#" className="hover:underline">
              Privacy
            </a>

            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
          <div className="flex flex-row space-x-6">
           <TiSocialLinkedin className="border-2 rounded-full p-1" size={30}/>
           <FaFacebookF className="border-2 rounded-full p-1" size={30} />
           <FaTwitter className="border-2 rounded-full p-1" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
