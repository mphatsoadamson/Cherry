import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://th.bing.com/th/id/R.b8d6f9adfd8ddd5ce584e51525971f3e?rik=L7Jw0t94ENQSlg&pid=ImgRaw&r=0',
    caption: 'Slide 1'
  },
  {
    url: 'https://th.bing.com/th/id/R.a572071be63b6dcc3ed82a465aa307a8?rik=QyWlRc1Ieg7S%2bg&pid=ImgRaw&r=0',
    caption: 'Slide 2'
  },
  {
    url: 'https://cdn.wallpapersafari.com/23/69/pPjl80.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://i0.wp.com/techbuzzireland.com/wp-content/uploads/2022/09/Tronsmart-Bang-Mini-Party-Speaker-techbuzzireland.png?fit=1489%2C760&ssl=1',
    caption: 'Slide 4'
  },
  {
    url: 'https://futurespace.mu/wp-content/uploads/2023/08/HP-Laptop-Charger-65W-2.jpg',
    caption: 'Slide 5'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;