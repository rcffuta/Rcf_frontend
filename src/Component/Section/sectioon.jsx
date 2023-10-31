import { useId } from 'react'

export function Section({ title, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={"id"}
      className="md:border-l md:border-zinc-100 md:pl-6" 
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={1}
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 left-[100] text-blue-100"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
