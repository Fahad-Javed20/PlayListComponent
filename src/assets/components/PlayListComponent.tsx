
import type { VideoComponentType } from "../../types/VideoComponentType"
import VideoComponent from "./VideoComponent"

interface PlayListComponentProps{
  data:VideoComponentType[],
  description:string,
}



const PlayListComponent = ({data,description}:PlayListComponentProps) => {
  return (
    <>
    <div className="flex flex-col gap-4">
      <h1 className="my-4 font-bold">{description}</h1>

      {data.map((lecture, i) => (
        <VideoComponent
        key={lecture.id}
        video={lecture}
        index={i + 1}
        />
      ))}
      </div>
    </>
  );
};

export default PlayListComponent;
