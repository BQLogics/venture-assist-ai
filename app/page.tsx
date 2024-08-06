import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { mainColor } from "@/Colors";

export default function HomePage() {  // Changed the function name to avoid conflict
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div  className="p-[6px] rounded-md">
        <QueryStatsIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span style={{ color: mainColor }} className="font-bold">Venture</span>
        <span className="text-slate-600">Assist.ai</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className='flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8'>
      <button
        style={{ backgroundColor: mainColor }}
        className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md">
        Explore
      </button>
      <button
        style={{ borderColor: mainColor, color: mainColor }}
        className="max-sm:w-full border text-sm text-mainColor hover:bg-mainColor hover:text-white p-[8px] px-6 rounded-md">
        Connect
      </button>
    </div>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Plan Your Business 
        <span style={{ color: mainColor }}> Efficiently</span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        Introducing Venture Assist.AI, a pioneering platform designed to transform business planning and decision-making. Utilizing the advanced Falcon 180B LLM, Venture Assist.AI provides accurate, actionable insights for both startups and established companies. Our platform simplifies the process of analyzing business ideas by generating comprehensive reports on market scope, financial requirements, legal compliance, and more. With cutting-edge AI technology at its core, Venture Assist.AI empowers users to make strategic, data-driven decisions, setting a new benchmark in business intelligence and innovation.
      </p>
      <button
        style={{ backgroundColor: mainColor }}
        className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md">
        Let's Dive
      </button>
    </div>
  );
}
