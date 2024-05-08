import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";
import { MdStar } from "react-icons/md";

interface IStallTile {
  id: string;
  summary: string;
  category: string;
  logo_url?: string;
  title: string;
  avg_processing_time: number;
  stall_url?: string;
}

const StallTile = ({
  id,
  summary,
  category,
  logo_url,
  title,
  avg_processing_time,
  stall_url = "",
}: IStallTile) => {
  return (
    <Link
      href={`stores/${id}`}
      className='border border-stone-300 rounded-md cursor-pointer'>
      {logo_url ? (
        <>
          <div className='relative'>
            <div className='absolute h-full w-full bg-black/20'></div>
            <Image
              src={logo_url}
              alt=''
              className='w-full h-64 rounded-t-md'
              width={512}
              height={512}
            />
          </div>
        </>
      ) : (
        <div className='w-full h-32 bg-stone-200'></div>
      )}
      <hr />
      <div className='p-2 w-64'>
        <div className='flex gap-x-4 justify-between items-center'>
          <h1 className='font-medium text-ellipsis overflow-hidden'>{title}</h1>
          <div className='flex items-center gap-1'>
            <MdStar className='text-amber-500' />
            <p className='text-sm'>4.5</p>
            <p className='text-sm text-stone-500'>(200+)</p>
          </div>
        </div>
        <h1 className='text-ellipsis text-sm overflow-hidden text-stone-500 max-w-[16ch]'>
          {category}
        </h1>
        <div className='flex flex-row items-center mt-2 gap-1 text-stone-400'>
          <FaRegClock size={12} />
          <p className='text-xs'>{avg_processing_time} min</p>
        </div>
      </div>
    </Link>
  );
};

export default StallTile;
