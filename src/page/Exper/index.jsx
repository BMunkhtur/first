const Exper = () => {
  const right = [
    {
      name: "ymar neg yum",
      turul: "bs ymar neg yum",
      ognoo: "bs neg yum",
    },
  ];
  const left = [
    {
      name: "ymar neg yum",
      turul: "bs ymar neg yum",
      ognoo: "bs neg yum",
    },
  ];
  return (
    <div>
      <section class="experience" id="experience">
        <h2 class="heading">
          <i class="fas fa-briefcase"></i> Experience{" "}
        </h2>
        <div class="">
          <div class="">
            <div class="">
              <h2>{right.name}</h2>
            </div>
            <div class="desc">
              <h3>{right.turul}</h3>
              <p>{right.ongoo}</p>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="">
            <div class="">
              <h2>{left.name}</h2>
            </div>
            <div class="desc">
              <h3>{left.turul}</h3>
              <p>{left.ongoo}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exper;
