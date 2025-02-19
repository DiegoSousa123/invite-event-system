import Image from 'next/image';
import logo from "../../assets/logo.svg";
import { Radio } from "lucide-react";
import { UserForm } from "./user-form";

export default function Home() {
  return (
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        <div className=" flex flex-col items-center gap-8 md:items-start">
          <Image src={logo} alt="devstage logo" width={108.5} height={30} />
          <h1 className="text-4xl text-gray-100 leading-none text-center font-heading font-medium flex flex-col md:text-7xl md:text-start">
            <span className="text-blue">Codecraft</span>
            Summit 2025
          </h1>
        </div>

      <div className="flex flex-col items-stretch gap-5 md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-heading font-semibold text-gray-200">
              Sobre o evento
            </h2>
            <span className="flex items-center text-purple font-semibold text-xs gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
          <br></br><br></br>Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
          </p>
        </div>

        <UserForm/>
        
      </div>
      </div>
  );
}
