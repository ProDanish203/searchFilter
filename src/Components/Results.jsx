import React from 'react'

export const Results = ({ results }) => {
  return (
    results.length > 0 &&
    <div className="display-results">
        {
            results.map((x, i) => (
                <div key={i}>{x.name}</div>
            ))
        }
    </div>
  )
}
