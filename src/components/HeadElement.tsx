import Head from 'next/head'

interface HeadElementProps {
    title: string
}

export const HeadElement = (p: HeadElementProps) => {
    return (
        <Head>
            <title>{p.title}</title>
            <HeadElementCommon />
        </Head>
    )
}

export const HeadElementCommon = () => {
    return (
        <>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </>
    )
}