import { Car } from "@/types/car";
import styles from "./CarCard.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import Icon from "../Icon/Icon";
import clsx from "clsx";

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={car.img}
          alt={car.model}
          width={276}
          height={268}
          // className={styles.image}
        />
        <Icon
          name="heart"
          width={16}
          height={16}
          className={styles.heartIcon}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>
            {car.brand} <span className={styles.modelText}>{car.model}</span>,
            {car.year}
          </h2>
          <p className={styles.priceText}>${car.rentalPrice}</p>
        </div>
        <ul className={clsx(styles.contentList, styles.contentListFirst)}>
          <li className={styles.contentListItem}>{car.location.city}</li>

          <li className={styles.contentListItem}>{car.location.country}</li>

          <li className={styles.contentListItem}>{car.rentalCompany}</li>
        </ul>
        <ul className={clsx(styles.contentList, styles.contentListSecond)}>
          <li className={styles.contentListItem}>{car.type}</li>
          <li className={styles.contentListItem}>{car.mileage} km</li>
        </ul>
        <Button
          href={`/catalog/${car.id}`}
          text="Read more"
          variant="primary"
          className={styles.button}
        />
      </div>
    </article>
  );
}
