import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

interface IStallTile {
  logo_url?: string;
  title: string;
  avg_processing_time: number;
  stall_url?: string;
}

const StallTile = ({
  logo_url,
  title,
  avg_processing_time,
  stall_url = "",
}: IStallTile) => {
  return (
    <div className='border border-stone-300 rounded-md cursor-pointer '>
      {logo_url ? (
        <Image
          src={logo_url}
          alt=''
          className='w-full h-32 rounded-t-md'
          width={128}
          height={128}
        />
      ) : (
        <div className='w-full h-32 bg-stone-200'></div>
      )}
      <hr />
      <div className='px-4 py-2 w-36'>
        <h1 className='font-bold text-ellipsis overflow-hidden'>{title}</h1>
        <div className='flex flex-row items-center my-2 gap-1 text-stone-400'>
          <FaRegClock />
          <p className='text-sm'>{avg_processing_time} min</p>
        </div>
      </div>
    </div>
  );
};

export default StallTile;
