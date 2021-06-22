interface TutorialHeaderProps {
    category: string
    name: string
}

export const TutorialHeader = (p: TutorialHeaderProps) => {
    return (
        <div className="bg-blue-light">
            <div className="max-w-7xl mx-auto px-4 sm:py-16 lg:py-8 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-1 text-4xl font-extrabold text-red sm:text-5xl sm:tracking-tight lg:text-6xl">
                        {p.name}
                    </h2>
                </div>
            </div>
        </div>
    )
}