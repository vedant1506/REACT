import React from "react";

function Card({
  username = "vedu" /*this ensure that whereever the parameter is not passed than automatically consider value as a vedu */,
}) {
  return (
    <div className="self-center, flex flex-col items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/538449165/photo/beautiful-cloudscape-over-the-sea-sunset-shot.jpg?s=612x612&w=0&k=20&c=XwieRIV5Df3Azuk8tH3CnAlLA-GO5GBE7R7dKtb1POw="
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Username
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {username}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Card;
