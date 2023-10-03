import Head from "next/head";
import Link from "next/link";

import Profile from "./Profile.component";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <div className='wrapper'>
                <header className='layout__header'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit voluptatem delectus alias, veniam iure, vitae sit,
                    adipisci vel accusamus praesentium illo vero. Aspernatur
                    atque laboriosam culpa, animi architecto quibusdam iusto?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit voluptatem delectus alias, veniam iure, vitae sit,
                    adipisci vel accusamus praesentium illo vero. Aspernatur
                    atque laboriosam culpa, animi architecto quibusdam iusto?
                </header>
                <Profile name={name} homePage={home ? true : false}>
                    <main>{children}</main>
                </Profile>
            </div>
        </>
    );
}
