import { CompetenceCard } from "@/components/cards";
import {ContactCard} from "@/components/contactCards";
import { Header } from "@/components/header";
import { InspiCard } from "@/components/inspi-cards";
import { ProjectCard, WorkCard } from "@/components/projectList";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  

  return (
    <main className="w-full ">
      <Header />
      <Section>

        <div className="flex flex-col p-10 max-md:p-4 w-full justify-center gap-10 my-20 items-center">
          <div className="flex max-sm:flex-col justify-center items-center gap-5">
            <Image src='/photo-profile.jpg' width={200} height={200} alt="photo de profil" 
            className='rounded-full' />

              <div>
                <h1 className="text-4xl font-bold max-sm:text-xl"> KALY DIALLO </h1>
                <p className="text-secondary-foreground text-xl max-sm:text-md">Développeur React</p>
              </div>
              
          </div>

            <div className="bg-secondary p-4 shadow-md rounded-md font-semibold text-lg flex justify-center items-center max-w-xl">
              <p> Salut , etant un passionné de code et de graphisme, j aime créer des applications et participer 
              à des peojets de grands envergures.
              </p>
            </div>
        </div>

      </Section>
       
      <Section>
        <h1 className="text-xl text-center font-semibold px-5 mb-10">A propos de </h1>
        <div className="flex justify-center items-center max-lg:flex-col max-md:px-5 mb-20 gap-20 ">
          <div className="h-full flex max-sm:flex-col gap-3">
            <div className="border h-full max-w-lg bg-primary-foreground p-5 flex flex-col gap-2 rounded-md shadow-sm">
              <h1 className="text-xl font-semibold">Mes projets </h1>
              <ProjectCard />
            </div>
            <div className="border h-full max-w-lg bg-primary-foreground p-5 flex flex-col gap-2 rounded-md shadow-sm">
              <h1 className="text-xl font-semibold">Mes experiences </h1>
              <WorkCard />
            </div>
          </div>
          
          <CompetenceCard />
        </div>
      </Section>

      <Section> 
        <div className="flex my-20 justify-center items-center gap-10 max-md:flex-col">
          <InspiCard />
          <ContactCard />
        </div>
      </Section>

    </main>
  );
}
