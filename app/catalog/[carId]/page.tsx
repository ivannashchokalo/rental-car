import Section from "@/components/Section/Section";
import styles from "./CarDetails.module.css";
import Container from "@/components/Container/Container";
import { getCarById } from "@/lib/cars";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import BookingForm from "@/components/BookingForm/BookingForm";
import clsx from "clsx";

interface CarDetailesProps {
  params: Promise<{ carId: string }>;
}

export default async function CarDetails({ params }: CarDetailesProps) {
  const { carId } = await params;

  const car = await getCarById(carId);

  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.imgWrapper}>
            <Image
              src={car.img}
              width={640}
              height={512}
              alt={`${car.brand} ${car.model}`}
              priority
            />
          </div>
          <div className={styles.formWrapper}>
            <h2 className={clsx(styles.secondTitle, styles.formTitle)}>
              Book your car now
            </h2>
            <p className={styles.formText}>
              Stay connected! We are always ready to help you.
            </p>
            <BookingForm carId={car.id} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.topInfoWrapper}>
            <div className={styles.titleWrapper}>
              <h1>
                {car.model}, {car.year}
              </h1>
              <p className={styles.idText}>Article: {car.id.slice(0, 4)}</p>
            </div>
            <div className={styles.infoWrapper}>
              <p className={styles.infoText}>
                {car.location.city}, {car.location.country}
              </p>
              <p className={styles.infoText}>Mileage: {car.mileage} km</p>
            </div>
            <p className={styles.price}>${car.rentalPrice}</p>
            <p className={styles.description}>{car.description}</p>
          </div>
          <div className={styles.detailsWrapper}>
            <div className={styles.details}>
              <h2 className={clsx(styles.secondTitle, styles.infoTitle)}>
                Rental Conditions:
              </h2>
              <ul>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    {car.rentalConditions[0]}
                  </span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Security deposite required{" "}
                  </span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Valid driver’s license
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.details}>
              <h2 className={clsx(styles.secondTitle, styles.infoTitle)}>
                Car Specifications:
              </h2>
              <ul>
                <li className={styles.infoListItem}>
                  <Icon
                    name="calendar"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Year: {car.year}</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="car"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Type: {car.type}</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="fuel-pump"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Fuel Consumption: {car.fuelConsumption}
                  </span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="gear"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Engine Size: {car.engine}
                  </span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="mileage"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Mileage: {car.engine}
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.details}>
              <h2 className={clsx(styles.secondTitle, styles.infoTitle)}>
                Accessories and functionalities:
              </h2>
              <ul className={styles.infoList}>
                {car.features.map((feature) => (
                  <li key={feature} className={styles.infoListItem}>
                    <Icon
                      name="check-circle"
                      width={16}
                      height={16}
                      className={styles.infoListIcon}
                    />
                    <span className={styles.infoListText}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
