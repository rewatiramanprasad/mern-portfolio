import React from 'react'

function SkillCard({ title, icon, text }) {
  return (
    <article className=" flex flex-col p-y-4">
      <span>{icon}</span>
      <div className="flex-row mt-6 ">
        <h4 className="font-bold">{title}</h4>
        <p className="text-slate-700 mt-2">{text}</p>
      </div>
    </article>
  )
}

export default SkillCard
