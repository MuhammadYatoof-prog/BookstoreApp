import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios'

export default function Freebook() {
    const [book, setBook] = React.useState([])
    React.useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get('http://localhost:4001/Books');
                const data = response.data;
               console.log(data);
                setBook(data.filter((item) => item.price === 0 ||item.category === "Free"));
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };
        getBook();
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    // console.log(filterFreeBooks); 
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'>
                <div>
                    <h1 className='text-xl font-semibold pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum illum corrupti hic suscipit enim est temporibus ducimus ad repellat unde, aut necessitatibus perspiciatis autem quaerat soluta porro amet omnis.</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}
