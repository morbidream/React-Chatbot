import React, { useEffect, useState } from 'react';

const Memes = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl("https://random-memer.herokuapp.com/");
  }, []);

  return (
    <div>
      <img style={{
          maxWidth: "100%",
          height: "auto"
        }} src={imageUrl} alt='a meme' />
    </div>
  );
};

export default Memes;