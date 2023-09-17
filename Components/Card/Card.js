
const Card = ({ title, author, tags = [23, 43, 32, 67], articleImg }) => {
    return (
      <div className=" flex  gap-5 mb-4 bg-slate-300 rounded-2xl px-4 py-3 pr-3">
        <div className=" ">
          <a className="text-xs text-gray-700">{author}</a>
          <h3 className=" font-bold text-lg w-[24rem] font-['Nova_Mono']">
            {title}
          </h3>
          <ul className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-slate-400 px-3 py-1 rounded-2xl text-xs text-gray-800"
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
    );
  };
  
  export default Card;
  