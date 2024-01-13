export const NewArticle = ({title, text}) => {
  return (
    <article className="h-[200px] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[170px] lg:pt-1">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-1 font-bold lg:text-[16px] xl:text-[20px]">{title}</h2>
        <p className="text-[14px]">{text}</p>
    </article>
  )
}
