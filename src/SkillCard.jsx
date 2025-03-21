function SkillCard({ title, icon, text }) {
  return (
    <article className=" flex flex-col items-center p-y-4">
      <span>{icon}</span>
      <div className="flex-row justify-items-center mt-6 ">
        <h4 className="font-bold">{title}</h4>
        <p className="text-slate-700 block mt-2 lg:hidden">{text}</p>
      </div>
    </article>
  )
}

export default SkillCard
