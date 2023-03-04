import {useSelector} from "react-redux";
import Link from "next/link";

import {Data} from "./api/events";
import HeaderLayout from "@components/Layout";
import EventItem from "@components/EventItem";
import {wrapper} from "../store/store";
import {fetchData} from "../store/actions";

const Home = () => {
  const {data} = useSelector((state: any) => state.data.reducer);

  return (
    <HeaderLayout>
      <div>
        <div>
          <h1>Upcoming events</h1>
          {data?.length ? (
            data.map((event: Data) => (
              <EventItem key={event.id} event={event} />
            ))
          ) : (
            <h3>No events found</h3>
          )}
        </div>
        <div className="btn-wrapper">
          {data?.length > 0 && (
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
    const res = await fetch("http://localhost:3000/api/events");
    const evts = await res.json();
    await store.dispatch(fetchData(evts));
    return {
      props: {},
    };
  }
);

export default Home;
