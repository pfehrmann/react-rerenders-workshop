import image from "./Download.png";

export function Content() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <img key={index} src={image} alt="image" />
      ))}
      <div className="tech-debt">
        {Array.from({ length: 10 }).map((_, index) => (
          <img key={`tech-debt-${index}`} src={image} alt="image" />
        ))}
      </div>
    </>
  );
}
