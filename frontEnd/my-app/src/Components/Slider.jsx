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
                        src="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldCUyMGFkb3B0aW9ufGVufDB8fDB8fHww.png"
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