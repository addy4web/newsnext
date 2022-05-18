import Head from "next/head";
import Link from "next/link";

export default function FirstPost(){
    return (
        <>
            <Head>
                <title>First Post | Indian National News </title>
            </Head>
            <h1>This is my FIrst Post Page</h1>
            <Link href="/">
                Back to Home
            </Link>
        </>
    );
}