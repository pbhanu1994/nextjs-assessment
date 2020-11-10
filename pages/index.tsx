import Head from 'next/head';
import Header from '../components/header';
import Events from '../components/events';
import Speakers from '../components/speakers';
import Sponsors from '../components/sponsors';
import Team from '../components/team';
import Posts from '../components/posts';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';
import Timer from '../components/timer';

const Home: React.FC = () => {
  return (
    <div className="2xl:container">
      <Header />
      <Timer />
      <Events />
      <Speakers />
      <Sponsors />
      <Team />
      <Posts />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;