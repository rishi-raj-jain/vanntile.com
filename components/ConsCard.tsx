interface Props {
  title: string
  cons: string[]
}

const ConsCard: React.FC<Props> = ({ title, cons }) => (
  <div className="w-full px-6 pt-4 pb-2 my-6 border border-red-200 rounded dark:border-red-900 bg-red-50 dark:bg-red-800 dark:text-gray-100">
    <span>{`You might not use ${title} if...`}</span>
    <div className="mt-4">
      {cons.map((con) => (
        <div key={con} className="flex items-baseline mb-2 font-medium">
          <div className="w-4 h-4 pt-0.5 mr-2">
            <svg className="w-4 h-4 text-red-500 dark:text-red-200" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </g>
            </svg>
          </div>
          <span>{con}</span>
        </div>
      ))}
    </div>
  </div>
)

export default ConsCard
