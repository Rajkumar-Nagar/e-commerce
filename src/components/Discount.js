export default function Offers({ discounts }) {
  return (
    <div className="offers">
      <h2>Current Promotions</h2>
      <ul className="offer-list">
        {discounts.map((offer, idx) => (
          <li key={idx} className="offer-item">{offer.title}</li>
        ))}
      </ul>

      <style jsx>{`
        .offers {
          background-color: #f0f4f8;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 15px;
          font-weight: bold;
          color: #333;
        }

        .offer-list {
          list-style-type: none;
          padding: 0;
        }

        .offer-item {
          background-color: #fff;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .offer-item:hover {
          background-color: #e0f7fa;
        }
      `}</style>
    </div>
  );
}
