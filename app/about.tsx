import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about1">
          <div className="about4">
            <div className="about3">
              <Image src="/about-img.jpg" alt="about" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className="about2">
          <div className="aboutb">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolorem eum consequuntur ipsam repellat dolor soluta aliquid
              laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
              corporis tempore.
            </p>
            <button className="about-btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}
