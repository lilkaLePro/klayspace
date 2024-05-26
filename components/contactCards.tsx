import { ContactInfo } from "@/lib/definitions"
import { ArrowTopRightIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import Link from "next/link";

const contactInfo : ContactInfo[] = [
    {name : 'Linkedin', link : '' , icon : LinkedInLogoIcon, image : '/photo-profile.jpg' },
    {name : 'Wathsapp', link : '' , icon : TwitterLogoIcon , image : '/photo-profile.jpg' },
    {name : 'Twiter', link : '' , icon : TwitterLogoIcon, image : '/photo-profile.jpg' },
]

export const ContactCard : React.FC = () => {
    return(<div className="max-w-xs p-5 bg-secondary shadow-lg">
          <h1 className="text-xl font-semibold px-5 mb-2 w-80 ">Me contacter </h1>
        {contactInfo.map((c , index) => {
            const Icone = c.icon;
            return <div key={index} className="bg-primary-foreground flex mt-3 border px-3 gap-4 items-center rounded-lg">
                    <div className="size-14 flex items-center">
                        <Image src={c.image} width={150} height={150} alt="image de profils" 
                        className="rounded-full"/>
                        <div className="absolute translate-x-7 translate-y-3 bg-red-700 text-white font-semibold w-fit rounded-full p-1"><Icone /></div>
                    </div>
                        <Link href={c.link} className="border-b flex w-full flex-row justify-between text-muted-foreground ">
                            <span className="font-semibold">{c.name}</span> 
                            <ArrowTopRightIcon />
                        </Link>
                </div>
        })}
    </div>)
}

