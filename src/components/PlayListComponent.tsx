import { useState } from "react";
import type { VideoComponentType } from "../types/VideoComponentType";
import VideoComponent from "./VideoComponent";

interface PlayListComponentProps {
  data: VideoComponentType[];
  description: string;
}

const PlayListComponent = ({ data, description }: PlayListComponentProps) => {


  const [listData,setListData] = useState<VideoComponentType[]>(data)
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="my-4 font-semibold text-2xl">{description}</h1>

        {listData.map((lecture, i) => (
          <VideoComponent key={lecture.id} video={lecture} index={i + 1} />
        ))}
      </div>
    </>
  );
};

export default PlayListComponent;
