import PropTypes from "prop-types";

function Profile(props) {
    return (
      <div className="Profile">
        <h1>My name is : { props.name }</h1>
        <h1>My BIO : { props.bio }</h1>
        <h1>My profession : { props.profession }</h1>
        <h1>My image : </h1><img src={props.children} alt="profileImage" style={{width:350,height:350}}/>
        <h2><a href="/" onClick={props.hnf} style={{letterSpacing:2,border:"solid",borderRadius:"20%",padding:6,textDecoration:"none"}}>Click me</a></h2>
      </div>
    );
  }

  Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string,
    hnf: PropTypes.func
   };

  Profile.defaultProps = {
    name: "No Name",
    bio: "No bio",
    profession: "No profession"
   };
  
  export default Profile;