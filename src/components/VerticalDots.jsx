import '../assets/css/verticaldots.css';

const VerticalDots = ({ totalPages = 6, current, onDotClick }) => {
  return (
    <div className="vertical-dots">
      {[...Array(totalPages)].map((_, idx) => (
        <div
          key={idx}
          className={`dot ${current === idx ? 'active' : ''}`}
          onClick={() => onDotClick(idx)}
        />
      ))}
    </div>
  );
};

export default VerticalDots;
