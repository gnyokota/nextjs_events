import React from "react";

import {Data} from "pages/api/events";
import Image from "next/image";

import styles from "@styles/EventItem.module.css";
import Link from "next/link";

const EventItem = ({event}: {event: Data}) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={event.image ? event.image : "/images/fallback.jpeg"}
          alt="event-item"
          width={200}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {event.date} at {event.time}
        </span>
        <h3>{event.name}</h3>
      </div>
      <div className={styles.btn}>
        <Link href={`/events/${event.slug}`}>Details</Link>
      </div>
    </div>
  );
};

export default EventItem;
