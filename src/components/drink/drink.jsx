import './drink.css';
import { Layer } from '../layer/layer';

export const Drink = ({ id, name, ordered, layers, image }) => {
  const drinkMessage = ordered ? 'Zrušit' : 'Objednat';
  return (
    <section id="drink">
      <div className="container">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            {layers.map((layer) => (
              <Layer
                key={layer.label}
                color={layer.color}
                label={layer.label}
              />
            ))}
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="0" />
          <button className="order-btn">{drinkMessage}</button>
        </form>
      </div>
    </section>
  );
};
