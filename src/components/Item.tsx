import { JsonDataStructure } from "../App";

interface ItemProps {
  item: JsonDataStructure;
}

export const Item = ({
  item: { url, MainImage, title, currency_code, price, quantity },
}: ItemProps) => {
  if (
    !url ||
    !MainImage ||
    !title ||
    !currency_code ||
    !price ||
    !quantity
  ) {

    return null;

  }
  return (
    
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage?.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {title.split("").length <= 50
              ? title
              : title.substring(0, 51) + "..."}
          </p>
          <p className="item-price">
            {(currency_code === "USD" && `$${price}`) ||
              (currency_code === "EUR" && `€${price}`) ||
              `${price} ${currency_code}`}
          </p>
          <p
            className={`item-quantity level-${
              (quantity <= 10 && "low") ||
              (quantity <= 20 && "medium") ||
              "high"
            }`}
          >
            {quantity} left
          </p>
        </div>
      </div>
    
  );
};