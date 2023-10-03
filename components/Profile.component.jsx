import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profile = (props) => {
    // console.log(props.children);
    const { name, homePage, children } = props;
    return (
        <section className='profile _container'>
            <figure className='profile__container'>
                <div className='profile__image-container'>
                    <Image
                        priority
                        src='/images/profile.jpg'
                        className='profile__image'
                        sizes='(max-width: 30rem) 100vw'
                        height={100}
                        width={1}
                        alt=''
                    />
                </div>
                <h1 className='profile__title'>{name}</h1>
                <p className='profile__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis unde aspernatur ratione, autem perspiciatis
                    quibusdam neque eligendi eveniet consectetur atque qui
                    provident officiis laudantium non fugiat vero nostrum
                    dolorum dicta cum aut temporibus! Architecto deleniti
                    expedita molestias culpa temporibus consequuntur accusamus.
                    Asperiores nobis facere iusto dolorum, omnis quis numquam
                    reiciendis impedit provident repudiandae sed voluptate
                    obcaecati. Excepturi cum dignissimos perspiciatis veniam quo
                    rem eius impedit mollitia, provident dicta deleniti minima
                    nobis culpa eaque iusto similique libero expedita eum
                    laudantium. Saepe, ea similique alias obcaecati tenetur nam.
                    Alias illo accusantium, quis perferendis ex sapiente impedit
                    deserunt blanditiis autem{" "}
                    <Link
                        className='profile__link'
                        href='https://www.ted.com/speakers/tim_ferriss'
                    >
                        iusto labore
                    </Link>{" "}
                    doloremque.
                </p>
                {children}
            </figure>
            {!homePage && (
                <div className='profile__home-link'>
                    <Link href='/'>← Back to home</Link>
                </div>
            )}
        </section>
    );
};

export default Profile;
