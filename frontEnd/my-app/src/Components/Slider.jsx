import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {/* <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "99%" }}
                        className=""
                        src="https://cdn.hero.page/wallpapers/52c4029c-56f9-4a20-828e-946ad6b36da1-deep-tones-abstract-oil-painting-wallpapers-wallpaper-1.png"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item> */}
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "99%" }}
                        className=""
                        src="https://pasadenahumane.org/wp-content/uploads/2023/06/23_05_Free-Adoption-Day_June-17_Graphics_FB-Timeline-1200x630-1.png"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "99%" }}
                        className=""
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh448v__QWq8AhyphenhyphenGZm1RpTm_rymi6jV1gPYinZhEpOofptwcmzBq9UxqF78Pj3r1IPEZ1G2Z3GaDoLwz7CzEvyRkIgSc9UzPeFhS84F1Dul5kDQ2ra0OrPVdCA16Onr63i_RXGua2Ebgwb6pxQ9fCeVRY0mJyJ6b7kcNhSCPOz_GT61uweGJp0V3A-hA/s1640/PHI%20fundraiser%20Nov%202023.png"
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>

            {/* <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "373.53px" }}
                        className=""
                        src="https://outdoorishome.com/wp-content/uploads/2021/11/Hammocking-in-winter-e1636475924383.jpg"
                        alt="First slide"
                    />
                 
                </div>
            </Carousel.Item> */}
        </Carousel>
    )
}
export default Slider;