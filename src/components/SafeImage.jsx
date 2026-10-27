import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function SafeImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}) {
  const [failed, setFailed] = useState(false);
  if (failed || !src)
    return (
      <div
        role="img"
        aria-label={alt || "Image unavailable"}
        className={`grid place-items-center bg-linear-to-br from-sky-100 via-slate-100 to-indigo-100 text-sky-700 ${className} ${fallbackClassName}`}
      >
        <ImageIcon size={30} aria-hidden="true" />
      </div>
    );
  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
