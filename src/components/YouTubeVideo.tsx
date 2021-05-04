interface YouTubeVideoProps {
    id: string
    title: string
}

export const YouTubeVideo = (p: YouTubeVideoProps) => {
    return (
        <div className="youtube">
            <iframe src={`https://www.youtube.com/embed/${p.id}`} allowFullScreen title={p.title} />
        </div>

    )
}