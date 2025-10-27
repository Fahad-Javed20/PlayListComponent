import type { VideoComponentType } from "../../types/VideoComponentType"
import VideoComponent from "./VideoComponent"

interface PlayListComponentProps{
  data:VideoComponentType[];
}



const PlayListComponent = ({data}:PlayListComponentProps) => {
  return (
    <>
    <div className="flex flex-col gap-4">

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
