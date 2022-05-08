import avatar from '../assets/favicon.ico';


const MyAvatar = () => {

  
  return (
    <div>
      <img style={{width: 30, height: 30, marginRight: 13, marginTop: 3}} src={avatar} alt='avatar' />
    </div>
  );
};

export default MyAvatar;