import "./Label.css"

interface ILabel {
  icon: string;
  text: string;
}

export const Label: React.FC<ILabel> = ({ icon, text }) => {
  return (
    <div className="label-wrapper">
      <span>{text}</span>
      <img src={icon} alt={text} className="label-wrapper-img"/>
    </div>
  );
};
