
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

//Project section
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Reset when out of view
      }
    });
  },
  {
    threshold: 0.3,
  }
);

projectCards.forEach(card => {
  observer.observe(card);
});

//Stats section

  const counters = document.querySelectorAll(".counter");
  let started = false;

  function animateCounters() {
    if (!started && isInViewport(document.querySelector("#stats"))) {
      started = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 100;
        let count = 0;

        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target;
          }
        };
        updateCount();
      });
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight;
  }

  window.addEventListener("scroll", animateCounters);


function calculatePrice() {
  const siteType = document.getElementById("site-type").value;

  let basePrice = 0;
  switch (siteType) {
    case "basic":
      basePrice = 15000;
      break;
    case "booking":
      basePrice = 22000;
      break;
    case "ecommerce":
      basePrice = 30000;
      break;
    case "enterprise":
      basePrice = 60000;
      break;
  }

  const checkboxes = document.querySelectorAll("fieldset input[type='checkbox']");
  let addOnPrice = 0;

  checkboxes.forEach((box) => {
    if (box.checked) {
      if (box.value === "seo") addOnPrice += 3000;
      if (box.value === "chatbot") addOnPrice += 5000;
      if (box.value === "blog") addOnPrice += 2500;
      if (box.value === "analytics") addOnPrice += 2000;
    }
  });

  const total = basePrice + addOnPrice;
  document.getElementById("dropdown-price-output").textContent = `Estimated: Ksh ${total.toLocaleString()}`;
  document.getElementById("price-disclaimer").style.display = "block"; // Show disclaimer
}


//Service section
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach(card => {
    observer.observe(card);
  });
});


//chatbase ai chatbot

(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="sm4Blc9mNxIxiPDfxqXD9";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
