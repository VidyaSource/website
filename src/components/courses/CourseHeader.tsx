interface CourseHeaderProps {
    category: string
    name: string
    blurb: string
}

export const CourseHeader = (p: CourseHeaderProps) => {
    return (
        <section className="bg-blue-light">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-base font-semibold text-green-dark tracking-wide uppercase">{p.category}</h1>
                    <h2 className="mt-1 text-4xl font-extrabold text-red sm:text-5xl sm:tracking-tight lg:text-6xl">
                        {p.name}
                    </h2>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-dark">
                        {p.blurb}
                    </p>
                </div>
            </div>
        </section>
    )
}