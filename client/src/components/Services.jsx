import { BsAlarmFill, BsShieldCheck, BsShieldFillCheck} from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineMilitaryTech } from "react-icons/md";
const ServiceCard = ({color, tittle, icon, subTittle}) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>  
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
         
            <h1 className="mt-2 text-white text-lg">{tittle}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subTittle}</p>
        </div>
    </div>
);


const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-20 px-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            Continue to improve
          </h1>
        </div>
      </div>

    <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard 
         color="bg-[#2952E3]"
         tittle="Security and Privacy Guaranteed"
         icon={<BsShieldFillCheck fontSize={21} className="text-white"/> }
         subTittle="We take your privacy seriously, and we will never sell your data."
        />
         <ServiceCard 
         color="bg-[#89845F8]"
         tittle="Best  exchange rates available"
         icon={<BsInfoCircle fontSize={21} className="text-white"/> }
         subTittle="You can pay less exchanges using our website. You are safe here."
        />
         <ServiceCard 
         color="bg-[#F84550]"
         tittle="Fatest Trasactions"
         icon={<MdOutlineMilitaryTech fontSize={21} className="text-white"/> }
         subTittle="We use the best technology to build this website. We are the best."
        />
    </div>

    </div>
  );
};

export default Services;
