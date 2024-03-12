import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import MediaZoomItem from "./MediaZoomItem";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../../styles/css/components/MediaComponents/MediaScroller.css";

function MediaScroller({ media }) {
    return (
        <div className='MediaScroller'>
            <div className='window'>
                <Swiper
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={32}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[FreeMode, Pagination, Mousewheel, Keyboard]}
                    freeMode={{
                        sticky: true,
                    }}
                    mousewheel={{
                        enabled: true,
                        forceToAxis: true,
                    }}
                >
                    {media.map((mediaObject, i) => {
                        // if (mediaObject.url) mediaObject.url += "err";

                        return (
                            <SwiperSlide className='media-item'>
                                <MediaZoomItem mediaObject={mediaObject} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default MediaScroller;
