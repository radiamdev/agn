function ArrowDown({ className }: { className?: string }) {
  return (
    <div className={className} >
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="35" height="35" fill="url(#pattern0_416_80)" />
        <defs>
          <pattern id="pattern0_416_80" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_416_80" transform="scale(0.0078125)" />
          </pattern>
          <image id="image0_416_80" width="128" height="128" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
        </defs>
      </svg>

    </div>
  )
}

export default ArrowDown