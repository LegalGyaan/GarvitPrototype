import Link from "next/link";

const Card = ({ title, author, tags, articleImg, serve }) => {
  return (
    <Link href={`articles/${serve}`}>
      <div className=" flex  gap-5 mb-4 bg-[#e9e9e9] rounded-2xl px-4 py-3 pr-3 shadow-slate-300 shadow-sm">
        <div className=" ">
          <div className="text-xs text-gray-700">{author}</div>
          <h3 className=" font-bold text-lg w-[24rem] font-['Nova_Mono']">
            {title}
          </h3>
          <ul className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-slate-400 px-3 py-1 rounded-2xl text-[10px] text-gray-800"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-40 rounded-2xl">
          <img className="rounded-2xl bg-cover" src={articleImg}></img>
        </div>
      </div>
    </Link>
  );
};

export default Card;
