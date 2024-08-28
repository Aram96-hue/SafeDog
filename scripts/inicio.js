const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Tu ubicación actual es:");
    console.log(`Latitud : ${crd.latitude}`);
    console.log(`Longitud: ${crd.longitude}`);
    console.log(`Más o menos ${crd.accuracy} metros.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
  //Testimonial Data
const testimonials = [
  {
      nameTestimonial:"María de los Montes",
      locationTestimonial:"Guadalajara - Jalisco",
      imageTestimonial: "../assets/rsns/resena1.jpg",
      reviewTestimonial: "    El mejor servicio para cuidar a mi mascota, me sirivó mucho para una emergencia, mi perro se encariñó mucho con el cuidador, me dan un poco de celos jaja",
  },
  {
      nameTestimonial:"Ricardo de la Rosa (Firulais)",
      locationTestimonial:"Lindavista - Ciudad de México",
      imageTestimonial: "../assets/rsns/perrito.jpeg",
      reviewTestimonial: "Mi perrito me paso el siguiente comentario, 🐶:'Me cuidaron mejor que mi dueño, creo que se puso celoso, pero ya quiero regresar a SafeDog woof woof'  ",
  },
  {
      nameTestimonial:"Mitzi Martinez",
      locationTestimonial:"Ciudad de México - Tláhuac",
      imageTestimonial: "../assets/fotosAcercadeNosotros/Mitzi.png",
      reviewTestimonial: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi adipisci eius exercitationem ratione ex quod. Libero impedit et quos est qui neque deleniti veniam?",
  },
  {
      nameTestimonial:"Johana Frias",
      locationTestimonial:"Ciudad de México - Ajusco",
      imageTestimonial: "../assets/fotosAcercadeNosotros/Johana.png",
      reviewTestimonial: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a ipsam earum quasi ducimus repellat tempora id quas minima iste unde neque sed quidem, dolore fugiat eligendi itaque laborum blanditiis et ea culpa. Ea, fugiat."},
];

//Current slide
let i = 0;
//Total slide
let j = testimonials.length;

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");


nextBtn.addEventListener("click", () => {
  i = (j + i + 2) % j; // Move forward by two for the next pair
  displayTestimonials(i);
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 2) % j; // Move backward by two for the previous pair
  displayTestimonials(i);
});

let displayTestimonials = (index) => {
  // Card One Elements
  const cardOne = document.getElementById("Card-one");
  const nameElementOne = cardOne.querySelector('#testimonialName');
  const locationElementOne = cardOne.querySelector('#testimonialLocation');
  const reviewElementOne = cardOne.querySelector('#testimonialReview');
  const imageElementOne = cardOne.querySelector('#imageTestimonial');

  // Card Two Elements
  const cardTwo = document.getElementById("Card-two");
  const nameElementTwo = cardTwo.querySelector('#testimonialName');
  const locationElementTwo = cardTwo.querySelector('#testimonialLocation');
  const reviewElementTwo = cardTwo.querySelector('#testimonialReview');
  const imageElementTwo = cardTwo.querySelector('#imageTestimonial');

  // Display data in Card One
  nameElementOne.innerText = testimonials[index].nameTestimonial;
  locationElementOne.innerText = testimonials[index].locationTestimonial;
  reviewElementOne.innerText = testimonials[index].reviewTestimonial;
  imageElementOne.src = testimonials[index].imageTestimonial;

  // Display data in Card Two (Next Testimonial)
  let nextIndex = (index + 1) % j;
  nameElementTwo.innerText = testimonials[nextIndex].nameTestimonial;
  locationElementTwo.innerText = testimonials[nextIndex].locationTestimonial;
  reviewElementTwo.innerText = testimonials[nextIndex].reviewTestimonial;
  imageElementTwo.src = testimonials[nextIndex].imageTestimonial;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTestimonials(i);
});