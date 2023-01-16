import skillcss from "./style.module.css";
const Cardone = ({ card }) => {
  return (
    <div className={skillcss.borderr} id="Skills">
      <div className={skillcss.wit}>
        <p>{card.name}</p>
        <img className={skillcss.witimg} src={`${card.icon}`} alt="" />
      </div>
    </div>
  );
};
export default Cardone;
