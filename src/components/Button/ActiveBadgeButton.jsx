const ActiveBadgeButton = ({ text, badged }) => {
  return <span className={badged}>{text}</span>;
};

export default ActiveBadgeButton;