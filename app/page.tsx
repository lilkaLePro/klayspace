import Section from "@/components/section";

interface CompCard {
  name : string,
  descip : string
}

const compCard : CompCard[] = [
  {
    name : 'React', descip : 'React. est mon framework principale et j aime travailler avec '
  },{
    name : 'Typescript', descip : 'trés pratique avec le typage pour faire des app trés robuste '
  },{
    name : 'Design', descip : "Figma me permet de nourir ma soife de bien representer les choses dans l'APP "
  },
]

const icone = {
}

export default function Home() {
  return (
    <main className="w-full ">
      
      <Section>
        <div className="flex justify-between p-2 border-b">
        <h1 className="text-xl ">kaly diallo</h1>

          <div className="flex gap-3">
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
            <div className="w-6 h-6 border rounded-full"></div>
          </div>
        </div>
      </Section>
      <Section>

        <div className="flex p-10 w-full justify-center gap-10 mt-10">
          <div className="border w-40 h-40 rounded-lg ">

          </div>
          <div className="flex flex-col gap-3 ">
            <div>
              <h1 className="text-2xl font-bold"> KALY DIALLO </h1>
              <p className="text-primary">Developpeur React</p>
            </div>
            <div className=" font-semibold">
            </div>
          </div>
        </div>

      </Section>
      <Section>
        <div className="mt-10">
          mes skills
          <div className="grid grid-cols-3 gap-5 " >
            {/*  */}
            {compCard.map((e , index) => (
              <div key={index} className="bg-background max-w-lg border p-4 rounded-2xl ">
              <div className="flex flex-col flex-start ">
                <div className="border w-28 h-28 rounded-full "></div>
                <span className="text-xl font-bold">{e.name} </span>
              </div>
              <p>{e.descip} </p>
            </div>
            ))}
            {/*  */}
          </div>
        </div>
      </Section>
    </main>
  );
}
