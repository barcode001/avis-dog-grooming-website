// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import ClientDogs from "./ClientDogs";
import avi from "../assets/images/dog10.webp";

export default function About() {
  return (
    <main className="wrapper about-page">
      <Helmet>
        <title>About Avigail | Avi's Little Groom Room Houston</title>
        <meta
          name="description"
          content="Learn about Avigail, the heart behind Avi's Little Groom Room in Houston. With years of experience and a passion for dogs, she provides affordable, loving grooming care."
        />
        <link rel="canonical" href="https://avislittlegroomroom.com/about" />
      </Helmet>

      <section className="card ">
        <img className="avis-img" src={avi} alt="Avi Owner with dog" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, my name is <strong>Avigail</strong>, and grooming dogs has been
            my passion since I was 16 years old. I first started as a bather,
            where I spent years learning how to properly care for dogs and keep
            them comfortable. Over time, I was trained in the basics of grooming
            things like trimming feet, sanitary areas, and making dogs feel
            fresh and clean.
          </p>
          <p>
            Life threw me a challenge when I had an accident that left me with a
            broken foot. Standing for long periods became difficult, and many
            places weren’t willing to take a chance on me. But instead of giving
            up on what I loved, I decided to take matters into my own hands.
            That’s when I started my own grooming business.
          </p>
          <p>
            You could say I’m self-taught—learning through TikTok, YouTube,
            hands on experience, and yes, even through mistakes along the way.
            Every dog I’ve worked with has helped me grow, and I’ve poured my
            heart into mastering this craft.
          </p>
          <p>
            Today, I’m proud to say I’ve built something I truly love. My goal
            is simple: to make every dog look and feel their very best. Whether
            it’s a simple bath or a full groom, I treat every pup like they’re
            my own because for me, grooming isn’t just a job, it’s a passion.
          </p>
        </div>
      </section>
      <section className="client-dogs">
        <ClientDogs />
      </section>
    </main>
  );
}
