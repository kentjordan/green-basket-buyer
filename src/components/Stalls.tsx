import StallTile from "./StallTile";
import coffeeguys from "@/assets/coffeeguys.png";
import chookstogo from "@/assets/chookstogo.jpg";

const Stalls = () => {
  return (
    <div className='mt-4 flex flex-col items-center'>
      <div>
        <div className='mt-2 mb-4 flex flex-col justify-center max-w-[900px] p-4'>
          <p className='text-xl font-bold h-fit border-b border-b-stone-300 mb-8'>
            Stingers
          </p>
          <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
            <StallTile
              title='Coffee Guys'
              logo_url={coffeeguys.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Coffee Guys'
              logo_url={coffeeguys.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
          </div>
        </div>
        <div className='mt-2 mb-4 flex flex-col justify-center max-w-[900px] p-4'>
          <p className='text-xl font-bold h-fit border-b border-b-stone-300 mb-8'>
            Agora
          </p>
          <div className='flex gap-4 flex-wrap sm:justify-start justify-center'>
            <StallTile
              title='Coffee Guysssssssssss'
              logo_url={coffeeguys.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Coffee Guys'
              logo_url={coffeeguys.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
            <StallTile
              title='Chooks-to-go'
              logo_url={chookstogo.src}
              avg_processing_time={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stalls;
