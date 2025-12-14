import React from "react";

interface BlobProps {
    imageSrc?: string;
    className?: string;
    fill?: string;
    children?: React.ReactNode;
}

const BLOB_PATH =
    "M60.2,-58.7C75.5,-45,83.3,-22.5,77.4,-5.9C71.5,10.7,51.7,21.3,36.5,32C21.3,42.7,10.7,53.3,-0.5,53.8C-11.7,54.3,-23.3,44.7,-39,34C-54.6,23.3,-74.2,11.7,-75.3,-1.1C-76.4,-13.9,-59.1,-27.9,-43.5,-41.5C-27.9,-55.1,-13.9,-68.4,4.3,-72.7C22.5,-77,45,-72.3,60.2,-58.7Z";

export default function Blob({
    imageSrc,
    className = "",
    fill = "#F1C21B",
    children,
}: BlobProps) {
    return (
        <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ display: "block" }}
        >
            <defs>
                {imageSrc && (
                    <pattern
                        id="blob-img-pattern"
                        patternUnits="userSpaceOnUse"
                        width="200"
                        height="200"
                    >
                        <image
                            href={imageSrc}
                            x="0"
                            y="0"
                            width="200"
                            height="200"
                            preserveAspectRatio="xMidYMid slice"

                        />
                    </pattern>
                )}
            </defs>
            <path
                d={BLOB_PATH}
                transform="translate(100 100)"
                fill={imageSrc ? "url(#blob-img-pattern)" : fill}
            />
            {children}
        </svg>
    );
}