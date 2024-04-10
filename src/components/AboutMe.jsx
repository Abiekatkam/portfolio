import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-2">
      <div className="w-full flex flex-row items-center justify-start gap-4">
        <h1 className="text-5xl capitalize font-semibold w-fit">About Me</h1>
        <span className="w-[60%] h-[0.5px] dark:bg-slate-50 bg-stone-950"></span>
      </div>
      <p className="w-full text-md leading-6 text-balance indent-16">
        As a fervent frontend developer, I dive into every project with
        boundless enthusiasm, fueled by my insatiable passion for crafting
        exceptional user experiences. With a relentless pursuit of excellence, I
        continuously expand my skill set to stay at the forefront of the
        ever-evolving world of web development. From mastering the intricacies
        of HTML, CSS, and JavaScript to leveraging the latest frameworks and
        libraries, I am committed to delivering polished, intuitive UI/UX
        designs that captivate and inspire users.
      </p>

      <p className="w-full text-md leading-6 text-balance indent-16">
        Driven by a thirst for knowledge, I embrace challenges as opportunities
        for growth, pushing the boundaries of my abilities with each new
        endeavor. Through my journey as a developer, I have cultivated a deep
        appreciation for the artistry of frontend development, seamlessly
        blending technical expertise with creative flair to bring concepts to
        life. With a meticulous attention to detail and a keen eye for design, I
        strive to exceed expectations and deliver solutions that not only meet
        but exceed user needs and expectations.
      </p>

      <p className="w-full text-md leading-6 text-balance indent-16">
        In my portfolio, you'll find a showcase of projects that reflect my
        dedication to excellence and my unwavering commitment to pushing the
        boundaries of what's possible in frontend development. From sleek,
        responsive designs to seamless user interactions, each project is a
        testament to my passion for creating intuitive, visually stunning
        experiences that leave a lasting impression. Join me on this journey as
        we continue to push the boundaries of frontend development and redefine
        what's possible in the world of UI/UX design.
      </p>
    </div>
  );
};

export default AboutMe;
