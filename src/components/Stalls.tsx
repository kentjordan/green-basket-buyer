import StallTile from "./StallTile";
import getStores from "@/data/stores";

const Stalls = () => {
  return (
    <div className='mt-4 flex flex-col items-center'>
      <div className='mt-2 mb-4 flex flex-col justify-center w-full max-w-[1200px] mx-2 p-2'>
        <p className='text-xl font-bold h-fit mb-6 text-center sm:text-start'>
          Stingers
        </p>
        <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
          {getStores().map((item) => (
            <StallTile
              key={item.id}
              category={item.category}
              id={item.id}
              summary={item.summary}
              title={item.name}
              logo_url={item.stall_thumbnail.src}
              avg_processing_time={3}
            />
          ))}
        </div>
      </div>
      <div className='mt-2 mb-4 flex flex-col justify-center w-full max-w-[1200px] mx-2 p-2'>
        <p className='text-xl font-bold h-fit mb-6 text-center sm:text-start'>
          Agora
        </p>
        <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
          {getStores().map((item) => (
            <StallTile
              key={item.id}
              category={item.category}
              id={item.id}
              summary={item.summary}
              title={item.name}
              logo_url={item.stall_thumbnail.src}
              avg_processing_time={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stalls;
