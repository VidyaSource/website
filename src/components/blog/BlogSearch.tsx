import {ChangeEvent, useMemo, useState} from 'react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {Combobox} from '@headlessui/react'

const people = [
    {id: 1, name: 'Leslie Alexander'},
    // More users...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

interface BlogSearchProps {
    tags: Array<string>
    selectedTag: string
    onChange: (s: string) => void
}

export default function BlogSearch(p: BlogSearchProps) {
    const [query, setQuery] = useState("")
    const values = p.tags.map(t => ({key: t, value: t}))
    const filteredTags = useMemo(() => {
        console.log("query: " + query)
        if ( query === "") {
            return values
        } else {
            return values.filter((v) => {
                return v.value.toLowerCase().includes(query.toLowerCase())
            })
        }
    }, [query])


    return (
        <Combobox as="div" value={p.selectedTag} onChange={p.onChange}>
            <Combobox.Label className="block text-lg font-medium text-blue dark:text-blue-light sm:text-xl lg:text-2xl mt-8">Filter by tag</Combobox.Label>
            <div className="relative mt-1">
                <Combobox.Input
                    className="w-full rounded-md border border-gray bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red sm:text-2xl text-gray-dark"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Combobox.Button
                    className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <SelectorIcon className="h-5 w-5 text-gray-dark" aria-hidden="true"/>
                </Combobox.Button>

                {filteredTags.length > 0 && (
                    <Combobox.Options
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-dark ring-opacity-5 focus:outline-none sm:text-md lg:text-2xl">
                        {filteredTags.map((tag) => (
                            <Combobox.Option
                                key={tag.key}
                                value={tag.value}
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
