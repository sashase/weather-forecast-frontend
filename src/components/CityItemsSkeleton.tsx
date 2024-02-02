export default function CityItemsSkeleton() {
  return (
    <ul className="w-full flex flex-col bg-background rounded-xl">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>
          {i !== 0 && <hr />}
          <li className="w-full flex gap-2 items-center px-4 py-2 text-base lg:text-lg 2xl:text-xl">
            <div className="flex flex-col gap-1.5">
              <div className="w-32 h-6 rounded-primary animate-pulse bg-gray-300" />
              <div className="w-44 h-5 rounded-primary animate-pulse bg-gray-300" />
            </div>
            <span className="ml-auto w-7 h-7 rounded-primary animate-pulse bg-gray-300" />
          </li>
        </div>
      ))}
    </ul>
  )
}
