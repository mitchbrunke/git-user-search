import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLink,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Infobox = ({ userData }) => {
  //options for local date method
  const options = { year: "numeric", month: "short", day: "numeric" };
  //take the date data returned and turn into string
  const date_string = userData.created_at.slice(0, 10);
  //run date method on it
  const output = new Date(date_string);
  //convert to au local and in right format
  const joinedDate = output.toLocaleDateString("en-AU", options);

  return (
    <div className="userContainer">
      {console.log(userData)}
      <div className="top">
        <div className="avatar">
          <img src={userData.avatar_url} alt="" />
        </div>
        <div className="userInfo">
          <h3 id="name">{userData.name}</h3>
          <h6 id="handle">@{userData.login}</h6>
          <p id="date">Joined {joinedDate}</p>
        </div>
      </div>

      <div className="bio">
        {userData.bio ? <p>{userData.bio}</p> : <p>This profile has no bio</p>}
      </div>

      <div className="statbox">
        <div className="info">
          <h5>Repos</h5>
          <p id="number">{userData.public_repos}</p>
        </div>
        <div className="info">
          <h5>Followers</h5>
          <p id="number">{userData.followers}</p>
        </div>
        <div className="info">
          <h5>Following</h5>
          <p id="number">{userData.following}</p>
        </div>
      </div>

      <div className="randomInfo">
        <p>
          <FontAwesomeIcon class="icon" icon={faMapMarkerAlt} />
          {userData.location}
        </p>
        <p>
          {" "}
          <FontAwesomeIcon class="icon" icon={faLink} />
          {userData.blog}
        </p>
        <p>
          <FontAwesomeIcon class="icon" icon={faBuilding} />
          {userData.company}
        </p>
      </div>
    </div>
  );
};

export default Infobox;
