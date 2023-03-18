<template>
  <div class="about">
    <h1 class="title">ESTHER SIMON'S GITHUB REPO</h1>
    <hr class="break" />
    <div class="avatar-area">
        <img src="https://avatars.githubusercontent.com/u/93126974?v=4" alt="">
    </div>
    <div class="socials">
      <a class="social-link twitter" href="https://twitter.com/JustTalis">
        <p><i class="fa-brands fa-twitter"></i> Esther Simon</p>
      </a>
      <a class="social-link linkedin" href="https://www.linkedin.com/in/esther-simon-956a65227/">
        <p><i class="fa-brands fa-linkedin"></i> Esther Simon</p>
      </a>
    </div>
    <p>
      I'm passionate about software engineering and currently learning how to build web apps with
      HTML, CSS, React, Vue and Javascript. I will love to be part of tech communities and
      contribute to open-source projects.
    </p>

    <img
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=just-talis&langs_count=8&layout=compact&hide_border=true"
      alt="Esther's GitHub stats"
    />
  </div>
</template>

<style>
body{
    display: flex;
    justify-content: center;
    align-items: center;
}


.about {
  /* border: 1px solid grey; */
  box-shadow: 0px 0px 2px #0000006c;
  width: max-content;   
  margin: 25px auto 0;
  border-radius: 0.5rem;

  padding: 10px 25px;
  color: rgb(47, 44, 44);
}

.avatar-area{
    width: max-content;
    margin: 0 auto;
}

.avatar-area img{
    width: 150px;
    border-radius: 50px;
}

.title {
  text-align: center;
}

.break {
  
  color: rgb(177, 173, 173);
 
}

img{
    text-align: center;
}

.social-link {
  display: flex;
  background-color: rgb(128, 128, 249);
  color: white;
  width: 150px;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  height: 30px;
}

.twitter{
background-color: #00acee;
}

.linkedin{
  background-color: #0077b5;
}

.socials{
display: flex;
gap: 8px;
}


@media screen and (max-width: 800px) {
  
  .socials{
    display: block;
   
  }
  .social-link{
    width: 100%;
    margin: 5px 0;
    justify-content: center;
  }
}
</style>
