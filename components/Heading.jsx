"use client";

function Heading({title, subtitle}) {
  return (
    <div className="section__heading">
        <h4 className="heading__subtitle">{subtitle}</h4>
        <h3 className="heading__title">{title}</h3>
    </div>
  )
}

export default Heading