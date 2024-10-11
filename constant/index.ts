const cards = [
    {
      description: "Basic ToDo web app",
      title: "TODO",
      src: "/images/Todos.png",
      ctaText: "GitHub",
      ctaLink: "/",
      content: () => {
        return <p>Simple ToDo web app made with React.js.</p>;
      },
    },
    {
      description: "Aether Connect",
      title: "Video Calling App",
      src: "/images/Aetherconnect.png",
      ctaText: "Visit",
      ctaLink: "https://aetherconnect.vercel.app/",
      content: () => {
        return <p>A Video Calling app made with Next.js.</p>;
      },
    },
  
    {
      description: "The Watcher",
      title: "An AI based Surveillance System",
      src: "/images/theWatcher.png",
      ctaText: "GitHub",
      ctaLink: "/",
      content: () => {
        return (
          <p>
            Atharva's minor project, The Watcher, is an AI-powered surveillance
            system that processes real-time CCTV footage to detect violence,
            crimes, or accidents. By identifying unusual events and alerting
            authorities, the project aims to enhance public safety and make
            streets safer through proactive monitoring.
          </p>
        );
      },
    },
    //   {
    //     description: "Lord Himesh",
    //     title: "Aap Ka Suroor",
    //     src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    //     ctaText: "Visit",
    //     ctaLink: "https://ui.aceternity.com/templates",
    //     content: () => {
    //       return (
    //         <p>
    //           Himesh Reshammiya, a renowned Indian music composer, singer, and
    //           actor, is celebrated for his distinctive voice and innovative
    //           compositions. Born in Mumbai, India, he has become a prominent figure
    //           in the Bollywood music industry. <br /> <br /> His songs often feature
    //           a blend of contemporary and traditional Indian music, capturing the
    //           essence of modern Bollywood soundtracks. With a career spanning over
    //           two decades, Himesh Reshammiya has released numerous hit albums and
    //           singles that have garnered him a massive fan following both in India
    //           and abroad.
    //         </p>
    //       );
    //     },
    //   },
  ];