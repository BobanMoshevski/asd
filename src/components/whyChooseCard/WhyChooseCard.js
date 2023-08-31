const WhyChooseCard = ({ cardDetail }) => {
  return (
    <div className="why-choose-card-wrapper">
      <div className="why-choose-card">
        <h6 className="font-color why-choose-card-heading">
          {cardDetail.cardHeading}
        </h6>

        <p className="why-choose-card-text">{cardDetail.cardText}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
