import Head from 'next/head'

interface HeadElementProps {
    title: string
}

export const HeadElement = (p: HeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
    )
}
