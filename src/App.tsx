
import './App.css'
import PlayListComponent from './assets/components/PlayListComponent'

function App() {
  
const Playlist1: VideoComponentType[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    title: "Exploring Beautiful Villages and Landscapes You Have Never Seen Before",
    views: "5.7",
    createdDate: "9"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5",
    title: "My Complete Morning Routine for a Productive and Peaceful Day",
    views: "5.8",
    createdDate: "19"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Why Gratitude and Patience Can Transform Your Entire Life",
    views: "11.8",
    createdDate: "1"
  },
   {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Why Gratitude and Patience Can Transform Your Entire Life",
    views: "11.8",
    createdDate: "1"
  }
];
const Playlist2: VideoComponentType[] = [
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "Exploring Beautiful Villages and Landscapes You Have Never Seen Before",
    views: "5.7",
    createdDate: "9"
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    title: "My Complete Morning Routine for a Productive and Peaceful Day",
    views: "5.8",
    createdDate: "19"
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1760669347025-dcceae4c8841?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    title: "Why Gratitude and Patience Can Transform Your Entire Life",
    views: "11.8",
    createdDate: "1"
  },
   {
    id: 8,
    thumbnail: "https://plus.unsplash.com/premium_photo-1756236543159-c49f8adb9dda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    title: "Why Gratitude and Patience Can Transform Your Entire Life",
    views: "11.8",
    createdDate: "1"
  }
];

  return (
    <>
      <div className="flex flex-col gap-4">

      <PlayListComponent data = {Playlist1} />
      <PlayListComponent data = {Playlist2} />
      </div>
    </>
  )
}

export default App
