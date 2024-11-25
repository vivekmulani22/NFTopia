import React, { useState, useEffect } from "react";
import { assets2 } from "../assets/CreatorsImg/creators";

const Page1 = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // Array of unique names
    const names = [
      "John Doe",
      "Jane Smith",
      "Mike Johnson",
      "Emily Brown",
      "Chris Lee",
      "Sarah Wilson",
      "Jeffrey Hayes",
      "Patricia Stephens",
      "Carol G. Johnson",
      "Jeffrey Hayes",
      "Patricia Stephens",
      "Carol G. Johnson",

    ];

    // Generate six unique creators with random data
    const newCreators = Array(12).fill().map((_, index) => ({
      id: index + 1,
      name: names[index],
      username: `@${names[index].replace(' ', '.')}`,
      creatorsCount: Math.floor(Math.random() * (1000 - 500 + 1) + 500),
      followerCount: Math.floor(Math.random() * (100000 - 50000 + 1) + 50000),
      followedCount: Math.floor(Math.random() * (100000 - 50000 + 1) + 50000),
      isFollowing: false,
      subtractImage: assets2[`Subtract${index + 1}`],
      ellipseImage: assets2[`Ellipse${index + 1}`],
    }));
    setCreators(newCreators);
  }, []);

  const handleFollowClick = (id) => {
    setCreators(prevCreators =>
      prevCreators.map(creator =>
        creator.id === id
          ? {
              ...creator,
              isFollowing: !creator.isFollowing,
              followerCount: creator.isFollowing
                ? creator.followerCount - 1
                : creator.followerCount + 1
            }
          : creator
      )
    );
  };

  return (
    <>
      <div className="w-full flex px-[10vw] py-[5vw]">
        <div className="w-full flex items-center justify-center font-montserrat">
          <div className="grid grid-cols-3 gap-10 max-w-[1200px] mx-auto">
            {creators.map(creator => (
              <div key={creator.id} className="w-[22vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] font-montserrat">
                {/* Card content */}
                <div className="w-full flex flex-col items-center justify-center">
                  <img className="bg-cover bg-center w-full" src={creator.subtractImage} alt="" />
                  <img className="w-[8.5vw] h-[8.4vw] mt-[13.5vw] absolute" src={creator.ellipseImage} alt="" />
                </div>
                <br /><br />

                <div className="w-full flex flex-col items-center justify-center py-8">
                  <h1 className="font-semibold text-xl">{creator.name}</h1>
                  <p>{creator.username}</p>
                </div>
                
                <div className="flex px-4">
                  <span className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="text-[#00000045]">Creators</h1>
                    <p className="font-medium">{creator.creatorsCount.toLocaleString()}</p>
                  </span>
                  <span className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="text-[#00000045]">Followers</h1>
                    <p className="font-medium">{creator.followerCount.toLocaleString()}</p>
                  </span>
                  <span className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="text-[#00000045]">Followed</h1>
                    <p className="font-medium">{creator.followedCount.toLocaleString()}</p>
                  </span>
                </div>

                <div className="w-full flex items-center justify-center py-4">
                  <button
                    onClick={() => handleFollowClick(creator.id)}
                    className={`bottom-2 text-white px-[4vw] right-5 w-[15vw] py-1 transition-all duration-300 ${
                      creator.isFollowing
                        ? "bg-gray-400 hover:bg-gray-500"
                        : "bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:from-[#21E7B7] hover:to-[#1B63FF]"
                    }`}
                  >
                    {creator.isFollowing ? "Unfollow" : "+ Follow"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;