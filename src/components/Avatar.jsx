export default function Avatar({ src, alt, size = "md" }) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-36 w-36",
    xl: "h-44 w-44",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-white border-4`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ objectPosition: "center 10%" }}
        />
      ) : (
        <span className="text-sm text-gray-500">N/A</span>
      )}
    </div>
  );
}
