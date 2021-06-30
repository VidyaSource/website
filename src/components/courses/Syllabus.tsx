interface Syllabus {
    [title: string]: string[]
}

interface SyllabusProps {
    syllabus: Syllabus
}

const Syllabus = (p: SyllabusProps) => {
    return (
        <div className="py-16 bg-blue-light overflow-hidden">
            <div className="w-1/2 mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-blue sm:text-5xl">
                        Course Syllabus
                    </h2>
                </div>
                <div className="relative z-10">
                    <div className="text-gray-dark mx-auto lg:max-w-none">
                        {
                            Object.entries(p.syllabus).map(l => {
                                const [title, sections] = l

                                return (
                                    <div key={title}>
                                        <p className="font-bold text-red text-2xl">
                                            {title}
                                        </p>
                                        {
                                            sections.map(s => {
                                                return (
                                                    <ul className="text-xl" key={s}>
                                                        <li>{s}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Syllabus