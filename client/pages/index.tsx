import type {NextPage} from "next";

import {Data} from "./api/events";

import HeaderLayout from "@components/Layout";
import EventItem from "@components/EventItem";
import Link from "next/link";
import {wrapper} from "../store/store";
import {fetchRequest} from "../store/actions";

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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(fetchRequest());
  }
);

export default Home;
