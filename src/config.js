export default {
  imgBaseURL:
    process.env.NODE_ENV === "development"
      ? `${process.env.PUBLIC_URL}/img`
      : "https://s3.eu-central-1.amazonaws.com/img.lucianareyes.com",
};
