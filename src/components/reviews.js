const { resolve } = require("styled-jsx/css");

const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Reviews</div>;
};

export default Reviews;
