export default function CityItemsSkeleton() {
  return (
    <ul className="w-full flex flex-col bg-background rounded-xl">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>
          {i !== 0 && <hr />}
          <li className="w-full flex gap-2 items-center px-4 py-2 text-base lg:text-lg 2xl:text-xl">
            <span className="w-2/5 h-[28px] rounded-primary animate-pulse bg-gray-300" />
            <span className="w-[28px] h-[28px] rounded-primary animate-pulse bg-gray-300" />
            <span className="ml-auto w-[28px] h-[28px] rounded-primary animate-pulse bg-gray-300" />
          </li>
        </div>
      ))}
    </ul>
  )
}
