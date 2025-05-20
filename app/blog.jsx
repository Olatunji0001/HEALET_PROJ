export default function Blog() {
  return (
    <>
      <section>
        <div className="blog-holder">
          <h1 className="blog-head">Latest From Blog</h1>
          <div className="blog">
            <div className="blog-card1">
              <div className="blog-img1"></div>
              <div className="bottom">
                <div className="age1">
                  <p className="img-text">
                    14 <br /> july
                  </p>
                </div>
                <h1>Molestiae ad reiciendis dignissimos</h1>
                <p>
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="blog-card2">
              <div className="blog-img2"></div>
              <div className="bottom">
                <div className="age">
                  <p className="img-text">
                    15 <br />
                    july
                  </p>
                </div>
                <h1>Dolores vel maiores voluptatem enim</h1>
                <p>
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
