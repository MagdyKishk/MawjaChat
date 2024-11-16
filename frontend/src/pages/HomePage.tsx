import { cn } from "@/util/cn";
import { faChevronLeft, faChevronRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import { useMobileStore } from "@/store/useMobileStore";
import HomeSideMenu from "@/layout/sidemenus/Home.Sidemenu";
import { useStatusStore } from "@/store/useStatusStore";

export default function HomePage() {
    const { isOnMobile } = useMobileStore();
    const { isStatusOpen } = useStatusStore()
    
    const content = (
        <div className="relative w-full min-h-full flex flex-col items-center justify-center">
            <div className="h-full w-full md:py-1 p-2">
                <VideoPlayer />
            </div>
        </div>
    )

    return (
        <div className={cn(
            // Layout
            "h-full flex",
        )}>
            {/* SideMenu */}
            {/* Will always show on desktop */}
            {/* Will show if status is closed on mobile */}
            {!isOnMobile ? <HomeSideMenu /> : !isStatusOpen && <HomeSideMenu />}

            {/* Status */}
            {/* Will always show on desktop */}
            {/* Will show if status is open on mobile */}
            {!isOnMobile ?
                content :
                isStatusOpen &&
                content
            }
        </div>
    );
}

function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
    const { closeStatus, isStatusOpen } = useStatusStore()
    const { isOnMobile } = useMobileStore()

    useEffect(() => {
        const videoDiv = videoRef.current;
        
        function handleVideoPlayState() {
            if (videoDiv) {
                setVideoPlaying(!videoDiv.paused);
            }
        }
        
        if (videoDiv) {
            videoDiv.addEventListener("play", handleVideoPlayState);
            videoDiv.addEventListener("pause", handleVideoPlayState);
        }
        
        return () => {
            if (videoDiv) {
                videoDiv.removeEventListener("play", handleVideoPlayState);
                videoDiv.removeEventListener("pause", handleVideoPlayState);
            }
        };
    }, []);

    const togglePlayVideo = () => {
        const videoDiv = videoRef.current;
        if (videoDiv) {
            if (videoDiv.paused) {
                videoDiv.play();
            } else {
                videoDiv.pause();
            }
        }
    };

    return (
        <div className="relative h-full w-full mx-auto flex rounded-md overflow-hidden">
            <video
                ref={videoRef}
                src="story-1.mp4"
                autoPlay
                loop
                className="max-h-full max-w-full aspect-[9/19] mx-auto object-cover overflow-hidden"
            ></video>
            <div
                className={cn(
                    "opacity-0 hover:opacity-100  transition-opacity duration-150",
                    !videoPlaying && "opacity-100",
                    "absolute z-10 left-0 top-0",
                    "flex justify-center items-center",
                    "h-full w-full text-4xl",
                )}
            >
                {isStatusOpen && isOnMobile && <div onClick={closeStatus} className="z-50 absolute top-[5px] left-[5px] bg-white/50 hover:bg-white/80 h-12 w-12 flex justify-center items-center rounded-full cursor-pointer">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-2xl"
                    />
                </div>}
                <div
                    className={cn(
                        "flex justify-center items-center",
                        "cursor-pointer",
                        "h-16 w-16",
                        "rounded-full bg-white/50",
                    )}
                    onClick={togglePlayVideo}
                >
                    <FontAwesomeIcon
                        icon={videoPlaying ? faPause : faPlay}
                    />
                </div>
                <div className="absolute z-20 left-[5px] flex justify-center items-center h-12 w-12 bg-white/50 hover:bg-white/80 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
                </div>
                <div className="absolute z-20 right-[5px] flex justify-center items-center h-12 w-12 bg-white/50 hover:bg-white/80 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
                </div>
            </div>
        </div>
    )
}