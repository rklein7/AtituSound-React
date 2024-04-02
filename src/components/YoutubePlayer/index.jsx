export const YouTubePlayer = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div>
      <iframe
        width="100%"
        height="200"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video Player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};
