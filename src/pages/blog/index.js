import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'

const H1 = (children) => <h1>{children}</h1>

const components = {
    img: Image,
    h1: H1,
    h2: H1,
    p: H1,
    code: H1,
    inlineCode: H1
}

const Wrapper = props => (
    <main style={{padding: '20px', backgroundColor: 'tomato'}} {...props} />
)

export default function Post(props) {
    return (
        <MDXProvider components={{wrapper: Wrapper}}>
            <main {...props} />
        </MDXProvider>
    )
}

