import type {NextPage} from "next";

import {Data} from "./api/events";

import HeaderLayout from "@components/Layout";
import EventItem from "@components/EventItem";
import Link from "next/link";

const Home = ({data}: {data: Data[]}) => {
  return (
    <HeaderLayout>
      <div>
        <div>
          <h1>Upcoming events</h1>
          {data.length ? (
            data.map((event: Data) => (
              <EventItem key={event.id} event={event} />
            ))
          ) : (
            <h3>No events found</h3>
          )}
        </div>
        <div className="btn-wrapper">
          {data.length > 0 && (
            <Link className="btn-secondary" href="/events">
              See more events
            </Link>
          )}
        </div>
      </div>
    </HeaderLayout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/events");
  const evts = await res.json();

  return {
    props: {
      data: evts.slice(0, 2),
    },
  };
};

export default Home;
