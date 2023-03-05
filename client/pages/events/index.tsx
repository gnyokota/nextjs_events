import React from "react";
import {useSelector} from "react-redux";

import HeaderLayout from "@components/Layout";
import EventItem from "@components/EventItem";
import {Data} from "pages/api/events";
import {wrapper} from "../../store/store";
import {fetchData} from "../../store/actions";

const Events = () => {
  const {data} = useSelector((state: any) => state);

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(`http://localhost:3000/api/events`);
    const evts = await res.json();
    await store.dispatch(fetchData(evts) as any);

    return {
      props: {},
    };
  }
);

export default Events;
