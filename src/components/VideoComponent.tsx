/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { VideoComponentType } from "../types/VideoComponentType";

interface VideoComponentProps {
  video: VideoComponentType;
  index: number;
}

const VideoComponent = ({ video, index }: VideoComponentProps) => {

  const [Video,setVideo] = useState<VideoComponentType>(video)
  return (
    <div className="flex items-start gap-4 w-4/5 bg-white rounded-lg shadow-sm p-3 hover:shadow-xl transition">
      <div className="font-bold text-gray-600 w-6 text-center flex my-auto">{index}</div>

      <img
        className="w-40 h-28 rounded-md object-cover shrink-0"
        src={Video.thumbnail}
        alt={Video.title}
      />

      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-lg leading-snug">{Video.title}</h1>
        <div className="flex mt-2 gap-2 text-gray-400 text-sm">
          <span>TensorFlow</span>
          <span>• {Video.views}M views</span>
          <span>• {Video.createdDate} years ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
