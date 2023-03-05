import React from "react";
import {useSelector} from "react-redux";
import {FaPencilAlt, FaTimes} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import HeaderLayout from "@components/Layout";
import {Data} from "pages/api/events";
import {wrapper} from "../../store/store";
import {fetchData} from "../../store/actions";

import styles from "@styles/EventSlug.module.css";

const SingleEvent = () => {
  const {data} = useSelector((state: any) => state);

  return (
    <HeaderLayout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${data?.id}`}>
            <FaPencilAlt /> Edit event
          </Link>
          <a
            href="#"
            className={styles.delete}
            onClick={() => console.log("Delete")}
          >
            <FaTimes /> Delete item
          </a>
        </div>
        <span>
          {data?.date} at {data?.time}
        </span>
        <h1>{data?.name}</h1>
        {data?.image && (
          <div className={styles.image}>
            <Image
              src={data?.image}
              width={860}
              height={500}
              alt="event-image"
            />
          </div>
        )}
        <h3>Description:</h3>
        <p>{data?.description}</p>
        <h3>Venue:</h3>
        <p>{data?.address}</p>
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

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({params}: any) => {
      const res = await fetch(`http://localhost:3000/api/${params.slug}`);
      const evts = await res.json();
      await store.dispatch(fetchData(evts) as any);

      return {
        props: {},
      };
    }
);

export default SingleEvent;
