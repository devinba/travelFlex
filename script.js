// stroing the data to the static db
const hotels = document.getElementById("hotels");
const restaurants = document.getElementById("restaurants");
const placeToVisit = document.getElementById("placeToVisit");
const searchPlaceInp = document.getElementById("searchPlaceInp");
const searchBtn = document.getElementById("searchBtn");
const resCards = document.createElement("div");
const hotelCards = document.createElement("div");
const placesCards = document.createElement("div");
const parentCardClasses = ["grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4"];
const cardClasses = ["w-full", "rounded-md", "shadow-md", "shadow-gray-100", "p-4", "flex", "flex-col", "gap-y-2", "hover:shadow-gray-300", "hover:transition", "hover:duration-200", "items-center", "justify-center", "sm:items-start", "sm:justify-start"];
const imgclasses = ["h-[18rem]", "w-full", "rounded-md"]
addingClasses(parentCardClasses, hotelCards);
addingClasses(parentCardClasses, resCards);
addingClasses(parentCardClasses, placesCards);
hotels.appendChild(hotelCards);
restaurants.appendChild(resCards);
placeToVisit.appendChild(placesCards);
// Hiding and showing the Model
function hideAndShow(model, element, event) {
  element.addEventListener(event, () => {
    model.classList.toggle("hidden");
  });
};
// Function to build the query string from the params object
function buildQueryString(params) {
  return new URLSearchParams(params).toString();
}
// Adding classes
function addingClasses(classes, element) {
  for (const cls of classes) {
    element.classList.add(cls);
  };
};

function createCard(parent, title, img, place) {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardName = document.createElement("h1");
  const places = document.createElement("h1");
  cardName.textContent = title;
  cardName.classList.add("text-md");
  cardName.classList.add("font-medium");
  places.textContent = place;
  places.classList.add("text-sm")
  places.classList.add("text-gray-600");
  parent.appendChild(card);
  card.appendChild(cardImg);
  card.appendChild(cardName);
  card.appendChild(places);
  cardImg.setAttribute("src", img);
  addingClasses(cardClasses, card);
  addingClasses(imgclasses, cardImg);
  return card;
}

hideAndShow(document.getElementById("signupModel"), document.getElementById("signupMenu"), "click");

// hotel image storage
const hotelImages = {
  bangalore: {
    hotel: {
      1: {
        name: "The Leela Palace",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/293981219.jpg?k=68e73e4958e97117d428711ed124e4f2fd88cf8f8265e071515af6cea6637235&o=&hp=1",
        location: "Kodihalli, Bengaluru"
      },
      2: {
        name: "Taj West End",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/545842818.jpg?k=717d50f41ffeb585cd5edf9531e02aadaf5a103abcc16d30475867812c8ff12e&o=&hp=1",
        location: "Race course, Bengaluru"
      },
      3: {
        name: "Hotel City Meridian",
        image: "https://lh3.googleusercontent.com/p/AF1QipOAeCG9dEwnnaw7PaZMDZTLV9ybsbsbsRwu1FgB=s680-w680-h510",
        location: "Chickpet, Bengaluru"
      },
      4: {
        name: "The Oberoi",
        image: "https://cf.bstatic.com/xdata/images/hotel/square240/31211348.webp?k=a8869335c2d3f78c272422935df075e7c8fc1d2b8c132468c2b472e1b9511831&o=",
        location: "Chickpet, Bengaluru"
      },
      5: {
        name: "Taj MG Road",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/195291012.jpg?k=822fa4ebdd400344fa3d4dbb19a7bff6f9a6187e255f4963d2d9190b703991bd&o=&hp=1",
        location: "Mg Road, Bengaluru"
      }
    },
    restaurants: {
      1: {
        name: "Meghana Foods",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/zbrpxvywfsrrb7os11jf",
        location: "Indiranagar, Bengaluru"
      },
      2: {
        name: "California Burrito",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/850b109187edc3968df3c00cc8b9c825",
        location: "Gandhi Bazar, Bengaluru"
      },
      3: {
        name: "Olive Street Foods Cafe",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/943897392be23027ecc381a5d0c5245c",
        location: "BTM, Bengaluru"
      },
      4: {
        name: "A2b",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/11/c9d1e353-93c5-4bc8-963e-68a6df68d87d_496a83fc-032f-4e64-a342-e16968c6f5d5.jpg_compressed",
        location: "BTM, Bengaluru"
      }
    },
    PlaceToVisit: {
      1: {
        name: "Lal Bagh",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSdG49u07dysfHye3UAm56GQ7mffUqiCjoOU6mQsE_uPLRnsZrT6caJqNeDK5BLwybnQbVVuTK-NU062vEWYll3I4myHUakzVB3ZcwCoSk",
        location: "Town hall, Bengaluru"
      },
      2: {
        name: "ISKCON Temple",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRdIy1zWAO9iN-NAQuM6oYq-JuL5XrwnM_eFj4bIxIGEj25CFWsNALrBsbBZlNa9KXbF915zt_4nB2L7oDExu-PzX5uZMhJpeHxY3xpeg",
        location: "Rajajinagar Bengaluru"
      },
      3: {
        name: "Nandi hills",
        image: "https://lh5.googleusercontent.com/p/AF1QipN7AVVaTraDMYck42ASUPmYVPEvxjNShP97A7PI=w540-h312-n-k-no",
        location: "Chikkaballapur  Bengaluru"
      },
      4: {
        name: "Bannerughatta Biological Park",
        image: "https://lh5.googleusercontent.com/p/AF1QipP3ZYCyXbVzwUiwxlOb9qCe-XxrJOSUMbP0vSN4=w408-h306-k-no",
        location: "Bannerghatta  Bengaluru"
      }
    }
  },
  coimbatore: {
    hotel: {
      1: {
        name: "The ibis Hotel",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/252216708.jpg?k=9e4b0c674129340ec3668fcc0dc2d838c48ac0a5e0118af11f4973b40ff08c99&o=&hp=1",
        location: "Lakshmi Mills, Coimbatore"
      },
      2: {
        name: "Le Meridien",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467539406.jpg?k=e88226739db80e85e5e6e45d8df3de38d6dd470a367ff1d79c9b1a754d228bf5&o=&hp=1",
        location: "Neelambur, Coimbatore"
      },
      3: {
        name: "Hotel Gokulam Park",
        image: "https://r1imghtlak.ibcdn.com/5d625f542bdd11ebb4880242ac110006.jpg?downsize=634:357",
        location: "Chinniampalayam, Coimbatore"
      },
      4: {
        name: "ITC Hotel",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295099604.jpg?k=2294fa48ef7e19526b6eea44394c281152a2d82abd25cfed6ea7cda4be7b0974&o=&hp=1",
        location: "RaceCourse, Coimbatore"
      },
      5: {
        name: "Radisson Blu",
        image: "https://lh3.googleusercontent.com/p/AF1QipPf_NQ_Bm2jpYOAN_Gn8Hh_YYX4n8VuplfUfbv6=s680-w680-h510",
        location: "Nava India, Coimbatore"
      }
    },
    restaurants: {
      1: {
        name: "Denmark Drive-Inn",
        image: "https://b.zmtcdn.com/data/reviews_photos/6ef/9f8a5a3d53a329d80eaeb6148ddd16ef_1532973511.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        location: "Nehru Stadium, Coimbatore"
      },
      2: {
        name: "Barbeque Nation",
        image: "https://d4t7t8y8xqo0t.cloudfront.net/app//resized/818X450/restaurant/662365/restaurant1420191212043204.jpg",
        location: "Fun Republic Mall, Coimbatore"
      },
      3: {
        name: "Kovai Kitchen",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1a/7f/c4/patthar-ki-macchi.jpg?w=1200&h=-1&s=1",
        location: "Airport Road, Coimbatore"
      },
      4: {
        name: "The French Door",
        image: "https://lh3.googleusercontent.com/p/AF1QipNmHRdYfvYHJv--i9XIrgcSzrvnRDEzcdHRXM0v=s680-w680-h510",
        location: "RS puram, Coimbatore"
      }
    },
    PlaceToVisit: {
      1: {
        name: "Marudhamalai Temple",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/9c/a5/hill-temple-marudha-malai.jpg?w=800&h=500&s=1",
        location: "Coimbatore, Tamilnadu"
      },
      2: {
        name: "Siruvani Waterfalls",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRijd2OHX2jYAiMOvcE2wWpnbARzu7RwNaSN5EnLr4fa1DCvb6gOC_t98xAf-YOxUo-Ko_BjBmow2dVOKB8LKUd8le_nHDZmyQ3S07Xsg",
        location: "Coimbatore Tamilnadu"
      },
      3: {
        name: "Isha Yoga Center Coimbatore",
        image: "https://lh3.googleusercontent.com/p/AF1QipN8M6LS6CyOSAuMmdJmJXigdq6NIQNZFC9MP0DE=s680-w680-h510",
        location: "Coimbatore Tamilnadu"
      },
      4: {
        name: "Velliangiri Mountains",
        image: "https://lh3.googleusercontent.com/p/AF1QipPXYWIMupV5-WgTT7bwHLJ8qbUjpUwDIY2e9yPf=s680-w680-h510",
        location: "Coimbatore, Tamilnadu"
      }
    }
  }
};
localStorage.setItem("hotelImages", JSON.stringify(hotelImages));

function renderCards(place) {
  const hoteldata = JSON.parse(localStorage.getItem("hotelImages"));
  // Extract data for the selected place
  const data = hoteldata[place];
  console.log("data on places: ", data);

  // remove the existing hotel card
  while (hotelCards.firstChild) {
    hotelCards.removeChild(hotelCards.firstChild);
  }

  // Render hotel cards
  for (const key in data.hotel) {
    if (data.hotel.hasOwnProperty(key)) {
      const hoteldet = data.hotel[key];
      hotelCards.appendChild(createCard(hotelCards, hoteldet.name, hoteldet.image, hoteldet.location));
    }
  }

  while (resCards.firstChild) {
    resCards.removeChild(resCards.firstChild);
  }
  // Render restaurant cards
  for (const key in data.restaurants) {
    if (data.restaurants.hasOwnProperty(key)) {
      const resdet = data.restaurants[key];
      resCards.appendChild(createCard(resCards, resdet.name, resdet.image, resdet.location));
    }
  }

  while (placesCards.firstChild) {
    placesCards.removeChild(placesCards.firstChild);
  }
  // Render place-to-visit cards
  for (const key in data.PlaceToVisit) {
    if (data.PlaceToVisit.hasOwnProperty(key)) {
      const placedet = data.PlaceToVisit[key];
      placesCards.appendChild(createCard(placesCards, placedet.name, placedet.image, placedet.location));
    }
  }
};

searchBtn.addEventListener("click", () => {
  const newPlace = searchPlaceInp.value;
  searchPlaceInp.value = newPlace;
  renderCards(newPlace);
});

document.addEventListener("DOMContentLoaded", () => {
  renderCards(searchPlaceInp.value);
});









