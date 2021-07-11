export interface SyllabusType {
    [title: string]: string[]
}

interface SyllabusProps {
    syllabus: SyllabusType
}

const Syllabus = (p: SyllabusProps) => {
    return (
        <section className="py-16 bg-blue-light dark:bg-blue overflow-hidden">
            <div className="w-1/2 mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-red dark:text-red-light sm:text-5xl">
                        Course Syllabus
                    </h2>
                </div>
                <div className="relative z-10">
                    <div className="text-gray-dark dark:text-blue-light mx-auto lg:max-w-none">
                        {
                            Object.entries(p.syllabus).map(l => {
                                const [title, sections] = l

                                return (
                                    <div key={title}>
                                        <p className="font-bold text-red dark:text-red-light text-2xl">
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
        </section>
    )
}

export default Syllabus