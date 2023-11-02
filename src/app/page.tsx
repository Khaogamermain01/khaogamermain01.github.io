import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  FaDiscord,
  FaRegEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="p-12 space-x-12 bg-base-100 flex">
        <div className="card w-1/4 bg-neutral text-neutral-content h-full">
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src="https://cdn.discordapp.com/avatars/624819246177845270/a09ace2678b80d74faaa7d9957f88c68.png?size=2048" />
              </div>
            </div>
            <h2 className="card-title">Khao C.</h2>
            <div className="badge badge-lg">Full-Stack Developer</div>
            <div className="divider my-2" />
            <div className="space-y-1 text-start">
              <button className="btn btn-ghost join-item no-animation normal-case w-fit">
                <div className="btn no-animation"><FaRegEnvelope /></div>
                <h1 className="text-lg">khao@khaodoes.dev</h1>
              </button>
              <button className="btn btn-ghost join-item no-animation normal-case w-fit">
                <div className="btn no-animation"><FaDiscord /></div>
                <h1 className="text-lg">@Khao_YT</h1>
              </button>
              <button className="btn btn-ghost join-item no-animation normal-case w-fit">
                <div className="btn no-animation"><FaLocationDot /></div>
                <h1 className="text-lg">Nakhon Pathom, Thailand</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-3/4 bg-neutral text-neutral-content">
          <div className="card-body">
            <h2 className="card-title text-3xl">Resume</h2>
            <div className="divider w-2/12 my-2" />
            <div className="space-y-6">
              <p>
                I'm Khao, a Full Stack Developer from Nakhon Pathom, Thailand. My journey in web development has led me to explore a wide range of technologies, such as Node.js and JavaScript. I also enjoy creating Minecraft plugins and mods, Discord bots, and crafting React websites along with traditional HTML sites.
              </p>
              <p>
                With experience in MongoDB, MySQL, and MariaDB, I can handle databases. I'm currently focused on the hosting industry, constantly learning and adapting to new challenges. My portfolio showcases the projects that define my journey in the world of web development. 
              </p>
            </div>
            <h2 className="font-bold py-2 text-3xl">What I'm doing</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 p-4">
                <div className="card card-side card-compact shadow-lg bg-base-200 rounded-lg p-2">
                  <figure><div className="avatar">
                    <div className="w-28 rounded-xl">
                      <img src="/Minecraft.png" />
                    </div>
                  </div></figure>
                  <div className="card-body">
                    <h2 className="card-title">Minecraft Plugins & Mods</h2>
                    <p>I create Minecraft plugins and mods using Java<br />and Kotlin with Gradle and Maven.</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <div className="card card-side card-compact shadow-lg bg-base-200 rounded-lg p-2">
                  <figure><div className="avatar">
                    <div className="w-28 rounded-xl">
                      <img src="/Pterodactyl.png" />
                    </div>
                  </div></figure>
                  <div className="card-body">
                    <h2 className="card-title">Pterodactyl Setup</h2>
                    <p>I can setup a Pterodactyl Panel<br />in less than 25 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <div className="card card-side card-compact shadow-lg bg-base-200 rounded-lg p-2">
                  <figure><div className="avatar">
                    <div className="w-28 rounded-xl">
                      <img src="/ReactJS.webp" />
                    </div>
                  </div></figure>
                  <div className="card-body">
                    <h2 className="card-title">React Websites</h2>
                    <p>I do web design and I make websites<br />in React with help of TailwindCSS.</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 p-4">
                <div className="card card-side card-compact shadow-lg bg-base-200 rounded-lg p-2">
                  <figure><div className="avatar">
                    <div className="w-28 h-28 rounded overflow-hidden">
                      <img src="/Discord.png" alt="Discord" className="object-cover h-full w-full" />
                    </div>
                  </div></figure>
                  <div className="card-body">
                    <h2 className="card-title">Making of Discord Bots</h2>
                    <p>I also use Discord.JS to make custom Discord Bots.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="font-bold py-2 text-3xl">Clients</h2>
            <div className="carousel carousel-center h-36 bg-neutral rounded-box space-x-4">
              <div className="carousel-item">
                <img src="/clients/DriftHosting.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
              <div className="carousel-item">
                <img src="/clients/WepwawetHosting.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
              <div className="carousel-item">
                <img src="/clients/WepwawetSMP.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
              <div className="carousel-item">
                <img src="/clients/FonxFam.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
              <div className="carousel-item">
                <img src="/clients/FireMM.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
              <div className="carousel-item">
                <img src="/clients/DragonHuntersSMP.png" className="rounded-box transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100" />
              </div> 
            </div>
            <div className="divider my-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;