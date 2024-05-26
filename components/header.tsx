import Section from "./section"
import { GitHubLogoIcon, 
      LinkedInLogoIcon , 
      TwitterLogoIcon } from "@radix-ui/react-icons"

export const Header = () => {

    return (<>
    <Section>
        <div className="flex justify-between p-2">
        <h1 className="font-semibold ">welcome to myspace... </h1>

          <div className="flex gap-1 items-center">
            <GitHubLogoIcon className="size-6 text-blue-800" />
            <LinkedInLogoIcon className="size-6 text-blue-800" />
            <TwitterLogoIcon className="size-6 bg-blue-800 text-white rounded-sm font-bold" />
          </div>
        </div>
    </Section>
    </>)
}