import { Car } from "@/types/car";
import styles from "./CarCard.module.css";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import toast from "react-hot-toast";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

export default function CarCard({ car }: { car: Car }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
    toast.dismiss();
    toast.success(
      !isFavorite ? "Added to favorites" : "Removed from favorites",
    );
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={car.img} alt={car.model} fill className={styles.image} />
        <button
          type="button"
          onClick={handleFavoriteClick}
          className={styles.favoriteButton}
          aria-label="Toggle favorite"
        >
          <Icon
            name="heart"
            className={clsx(
              styles.heartIcon,
              isFavorite && styles.heartIconActive,
            )}
          />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>
            {car.brand} <span className={styles.modelText}>{car.model}</span>,{" "}
            {car.year}
          </h2>

          <p className={styles.priceText}>${car.rentalPrice}</p>
        </div>

        <div className={styles.contentListWrapper}>
          <ul className={clsx(styles.contentList, styles.contentListFirst)}>
            <li className={styles.contentListItem}>{car.location.city}</li>

            <li className={styles.contentListItem}>{car.location.country}</li>

            <li className={styles.contentListItem}>{car.rentalCompany}</li>
          </ul>

          <ul className={clsx(styles.contentList, styles.contentListSecond)}>
            <li className={styles.contentListItem}>{car.type}</li>

            <li className={styles.contentListItem}>{car.mileage} km</li>
          </ul>
        </div>

        <Button
          href={`/catalog/${car.id}`}
          text="Read more"
          variant="primary"
          className={styles.button}
          target="_blank"
        />
      </div>
    </article>
  );
}
