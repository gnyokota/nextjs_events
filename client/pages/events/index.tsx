import React from "react";

import HeaderLayout from "@components/Layout";
import EventItem from "@components/EventItem";
import {Data} from "pages/api/events";

const Events = ({data}: {data: Data[]}) => {
  return (
    <HeaderLayout>
      <div>
        <h1>Events</h1>
        {data.length ? (
          data.map((event: Data) => <EventItem key={event.id} event={event} />)
        ) : (
          <h3>No events found</h3>
        )}
      </div>
    </HeaderLayout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/events`);
  const evts = await res.json();

  return {
    props: {
      data: evts,
    },
  };
};

export default Events;
