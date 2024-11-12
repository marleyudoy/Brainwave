import { companyLogos } from "../constants";

export default function CompanyLogo({className}){
    return (
        <div className={className}>
          <h5 className="tagline mb-6 text-center text-n-1/50">Helping people create beutiful content at</h5>
          <ul className="flex">
            {
              companyLogos.map((logo,index)=>(
                <li key={index} className=" items-center justify-center flex-1 h-[8.5rem]">
                  <img src={logo} width={134} height={28} alt="logo" />
                </li>
              ))
            }
          </ul>
        </div>
    );
}