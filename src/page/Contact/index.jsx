import style from "./style.css";
const Contact = () => {
  return (
    <div>
      <section class="about" id="about">
        <h2 class="heading">
          <i class="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div class="row">
          <div class="image">
            <img draggable="false" class="tilt" src="./pic/aaaa.jpg" alt="" />
          </div>
          <div class="content">
            <h3>I'm Munkhtur</h3>
            <span class="tag">Full Stack Developer</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              dignissimos. Laboriosam voluptate doloribus corporis vitae non qui
              eum saepe sapiente veritatis nobis. Qui minima obcaecati ut
              consectetur veritatis ex vel, maiores ad possimus neque repellat
              soluta. Quibusdam voluptates perferendis maiores nobis dicta
              dignissimos? Minima magni, vero dolores iusto iste recusandae!{" "}
            </p>

            <div class="box-container">
              <div class="box">
                <p>
                  <span> age: </span> 26
                </p>
                <p>
                  <span> phone : </span> +976 99865598
                </p>
              </div>
              <div class="box">
                <p>
                  <span> email : </span> AzureBayarsaikhanMunkhtur@gmail.com
                </p>
                <p>
                  <span> place : </span> Ulaanbaatar, Mongolia - 00000
                </p>
              </div>
            </div>

            <div class="resumebtn">
              <a href="#" class="btn">
                <span>Resume</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
