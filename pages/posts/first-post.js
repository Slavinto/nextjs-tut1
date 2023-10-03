import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/Layout.component";

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Image
                src='/images/profile.jpg'
                width={331}
                height={400}
                alt='a woman portrait foto'
            />
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
        </Layout>
    );
};

export default FirstPost;
