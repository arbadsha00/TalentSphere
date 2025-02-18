
import HomeTitle from "../HomeTitle/HomeTitle";
import Marquee from "react-fast-marquee";
import { Player } from "@lottiefiles/react-lottie-player";
import trustAnim from "../../../assets/trust.json"
const clients = [
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },

  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },

  
];
const Client = () => {
  return (
      <div className="mt-10 px-4 mb-16">
              <Player
                  autoplay
                  loop
                  src={trustAnim}
                  style={{ height: "230px", width: "230px" }}
                ></Player>
      <HomeTitle
        title="Trusted by Leading Companies"
        subTitle="Join the businesses that rely on TalentSphere for seamless employee management."
      ></HomeTitle>
      <Marquee speed={50} pauseOnHover gradient={true}>
        {clients.map((client, index) => (
          <div key={index} className="mx-8">
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Client;
