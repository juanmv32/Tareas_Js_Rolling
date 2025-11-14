import "../css/card.css";
import "../css/stars.css";

const ProfilesCards = ({ user }) => {
  // desestructura array de objetos
  const { firstName, lastName, avatar, email, id, like } = user;
  return (
    <div className="card">
      {/* doy la clase de card.css */}
      <img
        src={avatar}
        alt={firstName + " " + lastName}
        style={{ borderRadius: "35%" }}
        onClick={()=>alert(`Email: ${email}`)}
      />
      <h3>{firstName + " " + lastName}</h3>
      <div className="rating" style={{fontSize:"1.5rem"}}>
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
    </div>
  );
};

export default ProfilesCards;
