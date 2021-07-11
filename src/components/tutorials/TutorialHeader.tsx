interface TutorialHeaderProps {
    title: string
    subtitle?: string
}

export const TutorialHeader = (p: TutorialHeaderProps) => {
    return (
        <div className="bg-blue-light dark:bg-gray-dark">
            <div className="max-w-7xl mx-auto px-4 sm:py-16 lg:py-8 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-1 text-4xl font-extrabold text-red dark:text-red-light sm:text-5xl sm:tracking-tight lg:text-6xl">
                        {p.title}
                    </h1>
                </div>
                {
                    p.subtitle &&
                    <div className="text-center">
                        <h2 className="mt-1 text-2xl text-red dark:text-red-light sm:text-3xl sm:tracking-tight lg:text-4xl">
                            {p.subtitle}
                        </h2>
                    </div>
                }
            </div>
        </div>
    )
}