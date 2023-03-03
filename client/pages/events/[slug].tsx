import React from "react";
import {FaPencilAlt, FaTimes} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import HeaderLayout from "@components/Layout";
import {Data} from "pages/api/events";

import styles from "@styles/EventSlug.module.css";

const SingleEvent = ({data}: {data: Data}) => {
  const deleteEvent = () => {
    console.log("delete");
  };
  return (
    <HeaderLayout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${data.id}`}>
            <FaPencilAlt /> Edit event
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete item
          </a>
        </div>
        <span>
          {data.date} at {data.time}
        </span>
        <h1>{data.name}</h1>
        {data.image && (
          <div className={styles.image}>
            <Image
              src={data.image}
              width={960}
              height={600}
              alt="event-image"
            />
          </div>
        )}
        <h3>Description:</h3>
        <p>{data.description}</p>
        <h3>Venue:</h3>
        <p>{data.address}</p>
        <Link href="/events" className={styles.back}>
          {"<"} Back to the events
        </Link>
      </div>
    </HeaderLayout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/events`);
  const evts = await res.json();

  const paths = evts.map((item: Data) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({params}: {params: {slug: string}}) => {
  console.log(params.slug);
  const res = await fetch(`http://localhost:3000/api/${params.slug}`);
  const evts = await res.json();

  return {
    props: {
      data: evts,
    },
  };
};

export default SingleEvent;
