import React from "react";
import "../index.css";
import Daniel from "../assets/image-daniel.jpg";
import Jeanette from "../assets/image-jeanette.jpg";
import Jonathan from "../assets/image-jonathan.jpg";
import Kira from "../assets/image-kira.jpg";
import Patrick from "../assets/image-patrick.jpg";

const Desktop = () => {
  return (
    <div className="grid">
      <section className="container1">
        <div className="imgBlock">
          <div>
            <img src={Daniel} alt="" />
          </div>

          <div className="job">
            <p>
              Daniel Clifford <span className="span">Lorem ipsumbus</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="aboutme">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero
            in, eligendi autem eos consectetur, voluptatum doloremque adipisci
            placeat, error enim aperiam corporis asperiores maiores labore
            inventore illo quibusdam quos! Distinctio facere, placeat rerum
            iusto atque aut voluptatibus natus corrupti quis blanditiis harum ut
          </h1>
        </div>
        <div>
          <p className="decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusantium. Ipsam aperiam quae corrupti, repellat animi enim porro
            deleniti praesentium similique possimus ipsa blanditiis, nam illo
            excepturi assumenda ea ullam? Officia, consectetur eaque inventore
            repellat culpa, perspiciatis aliquam doloremque velit eum obcaecati
            excepturi magni! Recusandae, nostrum sapiente beatae quisquam, ad
            tempore excepturi unde delectus sequi repudiandae earum illum culpa
            repellendus. Iste sapiente laborum, voluptate velit voluptatem
          </p>
        </div>
      </section>
      <section className="container3">
        <div className="imgBlock">
          <div>
            <img src={Jonathan} alt="" />
          </div>

          <div className="job">
            <p>
              Jonathan<span className="span">Lorem ipsumbus</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="aboutme">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero
            in, eligendi autem{" "}
          </h1>
        </div>
        <div>
          <p className="decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusantium. Ipsam aperiam quae corrupti, repellat animi enim porro
            deleniti praesentium similique possimus ipsa blanditiis, nam illo
            excepturi assumenda ea ullam? Officia, consectetur eaque inventore
          </p>
        </div>
      </section>

      <section className="container4">
        <div className="imgBlock">
          <div>
            <img src={Kira} alt="" />
          </div>

          <div className="job">
            <p>
              Kira<span className="span">Lorem ipsumbus</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="aboutme">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero
            in, eligendi autem eos consectetur, voluptatum doloremque adipisci
            placeat, error enim aperiam corporis asperiores maiores labore
          </h1>
        </div>
        <div>
          <p className="decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusantium. Ipsam aperiam quae corrupti, repellat animi enim porro
            deleniti praesentium similique possimus ipsa blanditiis, nam illo
            excepturi assumenda ea ullam? Officia, consectetur eaque inventore
            repellat culpa, perspiciatis aliquam doloremque velit eum obcaecati
            excepturi magni! Recusandae, nostrum sapiente beatae quisquam, ad
            tempore excepturi unde delectus sequi repudiandae earum illum culpa
          </p>
        </div>
      </section>

      <section className="container2">
        <div className="imgBlock">
          <div>
            <img src={Jeanette} alt="" />
          </div>

          <div className="job">
            <p>
              Jeanette <span className="span">Lorem ipsumbus</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="aboutme">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero
            in, eligendi autem eos consectetur, voluptatum doloremque adipisci
            placeat, error enim aperiam corporis asperiores maiores labore
          </h1>
        </div>
        <div>
          <p className="decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusantium. Ipsam aperiam quae corrupti, repellat animi enim porro
            deleniti praesentium similique possimus ipsa blanditiis, nam illo
            excepturi assumenda ea ullam? Officia, consectetur eaque inventore
            repellat culpa, perspiciatis aliquam doloremque velit eum obcaecati
            excepturi magni! Recusandae, nostrum sapiente beatae quisquam, ad
            tempore excepturi unde delectus sequi repudiandae earum illum culpa
          </p>
        </div>
      </section>

      <section className="container5">
        <div className="imgBlock">
          <div>
            <img src={Patrick} alt="" />
          </div>

          <div className="job">
            <p>
              Patrick <span className="span">Lorem ipsumbus</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="aboutme">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero
            in, eligendi autem eos consectetur, voluptatum doloremque adipisci
            placeat, error enim aperiam corporis asperiores maiores labore
          </h1>
        </div>
        <div>
          <p className="decription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            accusantium. Ipsam aperiam quae corrupti, repellat animi enim porro
            deleniti praesentium similique possimus ipsa blanditiis, nam illo
            excepturi assumenda ea ullam? Officia, consectetur eaque inventore
            repellat culpa, perspiciatis aliquam doloremque velit eum obcaecati
            excepturi magni! Recusandae, nostrum sapiente beatae quisquam, ad
            tempore excepturi unde delectus sequi repudiandae earum illum culpa
          </p>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
