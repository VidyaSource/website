import {ReactChildren, ReactElement} from "react";

interface TutorialContentProps {
    title: string
    children: ReactElement
}

export const TutorialContent = (p: TutorialContentProps) => {
    return (
        <article className="relative overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <p className="mt-2 text-xl text-gray-dark leading-8">
                        {p.children}
                    </p>
                </div>
            </div>
        </article>
    )
}
