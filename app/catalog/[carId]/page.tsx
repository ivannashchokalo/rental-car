import Section from "@/app/components/Section/Section";
import styles from "./CarDetails.module.css";
import Container from "@/app/components/Container/Container";
import { getCarById } from "@/lib/cars";
import Image from "next/image";
import Icon from "@/app/components/Icon/Icon";
import BookingForm from "@/app/components/BookingForm/BookingForm";

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
          <BookingForm />
        </div>

        <div className={styles.rightColumn}>
          <header className={styles.infoHeader}>
            <div className={styles.titleWrapper}>
              <h1>
                {car.model}, {car.year}
              </h1>

              <p className={styles.idText}>Id: {car.id.split("-")[0]}</p>
            </div>

            <div className={styles.infoWrapper}>
              <p className={styles.infoText}>
                {car.address.split(",")[1]}, {car.address.split(",")[2]}
              </p>

              <p className={styles.infoText}>Mileage: {car.mileage} km</p>
            </div>

            <p className={styles.price}>${car.rentalPrice}</p>

            <p className={styles.description}>{car.description}</p>
          </header>
          <div className={styles.sectionsWrapper}>
            <section>
              <h2 className={styles.infoTitle}>Rental Conditions: </h2>
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
            </section>
            <section>
              <h2 className={styles.infoTitle}>Car Specifications:</h2>
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
                    Engine Size: {car.engineSize}
                  </span>
                </li>
              </ul>
            </section>
            <section>
              <h2 className={styles.infoTitle}>
                Accessories and functionalities:
              </h2>
              <ul className={styles.infoList}>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Leather seats</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Panoramic sunroof</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Remote start</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Blind-spot monitoring
                  </span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>Power liftgate</span>
                </li>
                <li className={styles.infoListItem}>
                  <Icon
                    name="check-circle"
                    width={16}
                    height={16}
                    className={styles.infoListIcon}
                  />
                  <span className={styles.infoListText}>
                    Premium audio system
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
