interface Props {
  color: string
}

const TriangleDivider: React.FC<Props> = ({ color }) => (
  <div
    className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
    style={{ height: '80px' }}
  >
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 110"
      x="0"
      y="0"
    >
      <polygon
        className={`fill-current ${color}`}
        transform="translate(0 10)"
        points="2560 0 2560 110 0 110 0 100"
      ></polygon>
    </svg>
  </div>
)

export default TriangleDivider
