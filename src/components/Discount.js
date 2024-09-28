export default function Offers({ discounts }) {
    return (
      <div>
        <h2>Current Promotions</h2>
        <ul>
          {discounts.map((offer, idx) => (
            <li key={idx}>{offer.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  