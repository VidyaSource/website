import Image from 'next/image'

interface PostImageProps {
    width: number
    height: number
    alt: string
    src: string
}

export const PostImage = (p: PostImageProps) => (
    <div style={{width: `${p.width}px`, height: `${p.height}px`}} className="relative mx-auto">
        <Image alt={p.alt} src={p.src} layout="fill" objectFit="cover" />
    </div>
)