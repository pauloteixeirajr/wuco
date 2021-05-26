import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

import Section from "../components/section/section";
import PhotoGallery from "../components/gallery/gallery";
import Card from "../components/card/card";
import ContactForm from "../components/contact-form/contact-form";

import "../pages-styles/index.scss";
import "../pages-styles/media.scss";

const IndexPage = ({ data }) => {
  const { edges } = data.allFile;

  return (
    <Layout>
      <Seo title="Home" />
      <PhotoGallery sourceName="gallery" />
      <h2>World United Combat Organisation</h2>
      <h4>Official website for WUCO Martial Arts Club</h4>
      <div className="about-section">
        <Section header="Who Are We?">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Section>
        <Section header="Our Mission">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Section>
      </div>
      <div className="training-section">
        <h2>Start Training</h2>
        <div className="training-cards">
          <Card header="Kenpo">A modern self defence system</Card>
          <Card header="Jiu-Jitsu">
            A family of Japanese martial arts and a system of close combat
          </Card>
          <Card header="Muay Thai">
            A martial art and combat sport that uses stand-up striking along
            with various clinching techniques
          </Card>
          <Card header="K1">
            The letter K in K-1 is officially designated as a representation of
            words karate, kickboxing and kung fu
          </Card>
          <Card header="Judo">
            A modern Japanese martial art, which has since evolved into an
            Olympic event.
          </Card>
          <Card header="Tae Kwon Do">
            A Korean martial art, characterized by punching and kicking
            techniques, with emphasis on head-height kicks, jumping spinning
            kicks, and fast kicking techniques.
          </Card>
        </div>
      </div>
      <div className="contact-section">
        <Section header="We are happy to hear from you">
          <ContactForm />
        </Section>
        <Section header="Connect with us">
          <p>
            For support or any questions email us at:{" "}
            <strong>email@wuco.com</strong>
          </p>
          <p>Wuco: 123 Irish Road, Irish Borough, Dublin, Ireland </p>
          <div>
            <iframe
              title="Google Maps Widget"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </Section>
      </div>
      <div className="follow-section">
        <div className="bg-video">
          <video autoPlay muted={true} loop>
            {edges.map(({ node }) => (
              <source
                key={node.id}
                src={node.publicURL}
                type={`video/${node.extension}`}
              />
            ))}
            Your browser is not supported
          </video>
        </div>
        <Section header="Follow Us" white>
          <iframe
            className="facebook-widget"
            title="Facebook Widget"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=500px&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500px"
            height="800"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <a
            className="twitter-timeline"
            data-width="600"
            data-height="600"
            href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw"
          >
            A Twitter List by TwitterDev
          </a>
        </Section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const videoQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
      edges {
        node {
          id
          publicURL
          extension
        }
      }
    }
  }
`;
