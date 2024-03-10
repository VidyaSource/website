import {useEffect, useMemo, useState} from 'react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {Combobox} from '@headlessui/react'

interface BlogPostIndexProps {
    tags: Array<string>
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const BlogPostIndex = (p: BlogPostIndexProps) => {
    const [query, setQuery] = useState("")
    const [selectedTag, selectTag] = useState<string | null>(null)

    const values = p.tags.map(t => ({key: t, value: t.toLowerCase().replace(/\s+/g, '-')}))
    const filteredTags = query === "" ? values : values.filter((v) => v.value.toLowerCase().includes(query.toLowerCase()))


    useEffect(() => {
        if (selectedTag === null) {
            document.querySelectorAll('.blog-post').forEach((e) => e.style.display = 'visible')
        } else {
            const elements = document.querySelectorAll('.blog-post');

            elements.forEach(el => {
                if (el.classList.contains(selectedTag.value)) {
                    el.style.display = 'flex';
                } else {
                    el.style.display = 'none';
                }
            });
        }
    }, [selectedTag])


    return (
        <Combobox as="div" value={selectedTag} onChange={selectTag}>
            <Combobox.Label
                className="block text-lg font-medium text-blue dark:text-blue-light sm:text-xl lg:text-2xl mt-8">Filter
                by tag</Combobox.Label>
            <div className="relative mt-2">
                <Combobox.Input
                    className="w-full rounded-md border border-gray bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red sm:text-2xl text-gray-dark"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(t) => t?.key}
                />
                <Combobox.Button
                    className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </Combobox.Button>
                {filteredTags.length > 0 && (
                    <Combobox.Options
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-dark ring-opacity-5 focus:outline-none sm:text-md lg:text-2xl">
                        {filteredTags.map((tag) => (
                            <Combobox.Option
                                key={tag.key}
                                value={tag}
                                className={({active}) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-blue text-white' : 'text-gray-dark'
                                    )
                                }
                            >
                                {({active, selected}) => (
                                    <>
                                        <span
                                            className={classNames('block truncate', selected && 'font-semibold')}>{tag.key}</span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? 'text-white' : 'text-gray-dark'
                                                )}
                                            >
                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                      </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}