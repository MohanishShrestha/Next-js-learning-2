import React from "react";

const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <p>Review page</p>
    </div>
  );
};

export default Reviews;
