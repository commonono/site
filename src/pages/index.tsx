import Head from "next/head";

import { Spotify } from "../components/spotify";
import { Consts } from "../misc/consts";

export default function Home(): JSX.Element {
  return (
    <div className='centerThisPlease'>
      <Head>
        <title>whats the craic</title>
      </Head>
      <nav>
        <h6>RYANMCGALL</h6>
      </nav>
      <main>
        {/* SPOTIFY */}
        <Spotify />

        {/* ABOUT */}
        <span className='headingStarter'>//</span>
        <h1>ABOUT👋</h1>
        <p>
          Hey, I&apos;m Ryan, a 16 year old Developer 💻. I
          love building things from bottom to top for the web and tools/applications for people from all over
          the world to use. I&apos;ve contributed to many Open Source(d)
          organizations, keep scrolling to learn more 🔍
        </p>

        <div className='spaceInBetweenSections' />

        {/* PROJECTS */}
        <span className='headingStarter'>//</span>
        <h1>PROJECTS 📝</h1>
        <div className='grid'>
          <div className='gridItem'>
            <h1 className='gridHeader'>DISCREATOR</h1>
            <p className='gridParagraph'>
              DISCREATOR is an C# Desktop Application that allows anyone to learn the basics of launching their own discord server! and test anything from Discord API, webhooks and more!
            </p>
            <a
              href=''
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              DISCORD
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>rmcV</h1>
            <p className='gridParagraph'>
              RMCV is an all-in-one essentials tool from - GEO IP locator, Windows essentials optimized to fit your wants and needs.. Spam Bot, IG Checker, IG Bomber and more!
            </p>
            <a
              href='https://www.youtube.com/watch?v=afNRYNHCUZw'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              VIDEO PREVIEW
            </a>
          </div>
          <br /> {/* We're breaking here so they don't go all inline */}
          <div className='gridItem'>
            <h1 className='gridHeader'>DMOD.gg</h1>
            <p className='gridParagraph'>
              dmod.gg is a website where anyone can signup and create your mod profiles so servers can hire and request for you to operate within their servers, we have had moderators be requested and sent to servers with upto 40,000 users!
            </p>
            <a
              href='https://github.com/dmod-gg/dmod'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              REPOSITORY
            </a>
          </div>
          <div className='gridItem'>
            <h1 className='gridHeader'>RYANMCGALL.XYZ</h1>
            <p className='gridParagraph'>
              The website you are currently on as you read this 🤪 you can find the source code within my github linked below free-to-use, no license! also im just gunna type away because my OCD will go mad if these are not equal.. perfect
            </p>
            <a
              href='https://ryanmcgall.xyz'
              className='gridLink'
              target='_blank'
              rel='noreferrer'
            >
              WEBSITE
            </a>
          </div>
        </div>

        <div className='spaceInBetweenSections' />

        {/* CONTACT */}
        <span className='headingStarter'>//</span>
        <h1>CONTACT 📩</h1>
        <ul className='socialMedias'>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://instagram.com/" + Consts.instagram}
              target='_blank'
              rel='noreferrer'
            >
              <h2>INSTAGRAM</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://twitter.com/" + Consts.twitter}
              target='_blank'
              rel='noreferrer'
            >
              <h2>TWITTER</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://github.com/" + Consts.github}
              target='_blank'
              rel='noreferrer'
            >
              <h2>GITHUB</h2>
            </a>
          </li>
          <li className='socialMedia'>
            <span className='socialStart'>\\</span>
            <a
              href={"https://discord.com/users/" + Consts.discordID}
              target='_blank'
              rel='noreferrer'
            >
              <h2>DISCORD</h2>
            </a>
          </li>
        </ul>
        <div className='spaceInBetweenSections' />
      </main>
    </div>
  );
}
