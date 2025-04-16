/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */ 

/*array of objects*/
const businesses = [
    {
      name: "Sol Pilates LA",
      category: "Fitness/Wellness",
      description: "The studio is proudly Latina-owned and dedicated to bringing the healing power of pilates to the Hispanic community.",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/IvzhexHZ5G2oP3N6455e-Q/348s.jpg",
      location: "Los Angeles, CA",
      offerings: ["Reformer Pilates", "Sculpt"],
      members: 140,
      website: "https://solpilatesla.com/"
    },
    {
      name: "Refined Pilates Studio",
      category: "Fitness/Wellness",
      description: "Dedicated to promoting wellness and fitness through personalized instruction and a supportive environment",
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/Bk5YaZ9VIRq_XxzdDOUJNw/348s.jpg",
      location: "Whittier, CA",
      offerings: ["Reformer Pilates", "Burn Classes", "Intro Classes"],
      members: 160,
      website: "https://refinedpilatesstudio.com/"
    },
    {
      name: "The LiLa Society",
      category: "Fitness/Wellness",
      description: "Latina Wellness club focused on providing events such as run clubs, or pilates classes throughout Los Angeles, Ornage County, and San Diego",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F842631799%2F2226633698263%2F1%2Foriginal.20240905-154701?crop=focalpoint&fit=crop&h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.499053030303&fp-y=0.484084880637&s=708d7f659b68c5c7b68c8d6137a42bb7",
      location: "CA-Based: Los Angeles, Orange County, San Diego",
      offerings: ["Run Club", "Pilates x Reggaeton events"],
      members: 90,
      website: "https://www.instagram.com/thelilasociety/?hl=en"
    },
    {
        name: "Pilates with Jemima",
        category: "Fitness/Wellness",
        description: "Latina reformer pilates instructor in Orange County that hosts Latin-music pilates classes ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvULvZfTkx_mSrFha5U9Cd7J56XwiG1E1dpA&s",
        location: "Costa Mesa, CA",
        offerings: ["Pilates x Reggaeton events"],
        members: 90,
        website: "https://www.instagram.com/pilatesxjemima/"
      },
      {
        name: "Cocina 35",
        category: "Restaurant",
        description: "Family owned restaurant that was created to bring to San Diego the essence of México",
        img: "https://coronadotimes.com/wp-content/uploads/2024/10/Liberty-Station-Cocina-35.jpg",
        location: "San Diego, CA",
        offerings: ["Breakfast Restaurant, that specializes in Chilaquiles"],
        members: 90,
        website: "https://cocina35.com/"
      },
      {
        name: "Makies Bakery",
        category: "Bakery",
        description: "Specialize in crafting premium, gourmet stuffed cookies that weigh 5 oz (140g) each",
        img: "https://images.squarespace-cdn.com/content/v1/66a073bfb2a3fe788c3d3baf/f0b4ebbf-bb19-45b9-89fe-009b05847934/IMG_7071.jpeg",
        location: "San Antonio, Texas",
        offerings: ["Breakfast Restaurant, that specializes in Chilaquiles"],
        members: 90,
        website: "https://www.makiesbakery.com/"
      },
      {
        name: "La Chula Cafe",
        category: "Cafe",
        description: "First-generation Guatemalan-owned with a deep love for the community and a shared connection through plants and coffee through their pop-up locations.",
        img: "https://b786bb8885fd2de3baf3.cdn6.editmysite.com/uploads/b/b786bb8885fd2de3baf377bf1ea0abe62442bfa32e031f97372712319753448f/Untitled%20design.png_1724198943.png?width=2400&optimize=medium",
        location: "Pasadena, CA",
        offerings: ["Coffee, Lattes"],
        members: 90,
        website: "https://www.lachulacafe.com/"
      }
      ,
      {
        name: "Drink Mas Matcha",
        category: "Cafe",
        description: "Latinx Owned to inspire more people to drink matcha, offers catering",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhCKK-iAqrlINpVdJA4vj4usPlSOrxxMKBQ&s",
        location: "CA-Based: Los Angeles, San Diego, Orange County, Inland Empire",
        offerings: ["Matcha Drinks"],
        members: 90,
        website: "https://www.instagram.com/drinkmasmatcha/"
      }
      ,
      {
        name: "Boston Amigas",
        category: "Social",
        description: "Social group for women to find friends",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQrzHYJHF7Utixger76aQxrn0lewEE3Xs4g&s",
        location: "Boston, MA",
        offerings: ["Events, Outings"],
        members: 90,
        website: "https://www.instagram.com/boston.amigas/"
      },
      {
        name: "Latinas in Tech",
        category: "Professional",
        description: "A non-profit organization dedicated to building the confidence, connections, and career momentum professionals need to succeed in today's fast-moving tech world.",
        img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/Latinas-in-Tech-featured.png",
        location: "San Francsico, CA",
        offerings: ["Professional Events, Summits"],
        members: 90,
        website: "https://latinasintech.org/"
      }
  ];
  
  //making sure to show cards 
  function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
  
    for (const biz of businesses) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <div class="card-content">
          <img src="${biz.img}" alt="${biz.name}" />
          <h2>${biz.name}</h2>
          <p>${biz.description}</p>
          <ul>
            <li><strong>Location:</strong> ${biz.location}</li>
            <li><strong>Services:</strong> ${biz.offerings.join(", ")}</li>
            <li><strong>Members:</strong> ${biz.members}</li>
        
          </ul>
          <a href="${biz.website}" target="_blank" class="visit-btn">Learn More</a>
          
        </div>
      `;
  
      cardContainer.appendChild(card);
    }
  }
  
  //searching businesses
  function searchBusiness() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const filtered = businesses.filter(biz =>
      biz.name.toLowerCase().includes(query) ||
      biz.offerings.join(" ").toLowerCase().includes(query)
    );
    displayFilteredBusinesses(filtered);

    document.getElementById("card-container").scrollIntoView({ behavior: "smooth" });

  }

//searching location
function search_location() {
    const query = document.getElementById("searchLocationInput").value.toLowerCase().trim();
  
    const matchedBusinesses = businesses.filter(biz =>
      biz.location.toLowerCase().includes(query)
    );
  
    if (query === "" || matchedBusinesses.length === 0) {
        alert(`No businesses found for "${query.toUpperCase()}". Try CA, MA, etc.`);
        return;
      }
    
      displayFilteredBusinesses(matchedBusinesses);
      document.getElementById("card-container").scrollIntoView({ behavior: "smooth" });
    }
   
  //displaying filtered bus
  function displayFilteredBusinesses(list) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    list.forEach(biz => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-content">
          <img src="${biz.img}" alt="${biz.name}" />
          <h2>${biz.name}</h2>
          <p>${biz.description}</p>
          <ul>
            <li><strong>Location:</strong> ${biz.location}</li>
            <li><strong>Services:</strong> ${biz.offerings.join(", ")}</li>
            <li><strong>Members:</strong> ${biz.members}</li>
          </ul>
          <a href="${biz.website}" target="_blank" class="visit-btn">Visit Website</a>
        </div>
      `;
      container.appendChild(card);
    });
  }

//category filtering 
  function filterByCategory(category) {
    const filtered = businesses.filter(biz => 
      biz.category.toLowerCase() === category.toLowerCase()
    );
    displayFilteredBusinesses(filtered);
  }

  function showAllBusinesses() {
    displayFilteredBusinesses(businesses);
  }




  document.addEventListener("DOMContentLoaded", () => {
    showAllBusinesses();
  
    document.getElementById("cafe-btn").addEventListener("click", () => filterByCategory("Cafe"));
    document.getElementById("res-btn").addEventListener("click", () => filterByCategory("Restaurant"));
    document.getElementById("fitness-btn").addEventListener("click", () => filterByCategory("Fitness/Wellness"));
    document.getElementById("social-btn").addEventListener("click", () => filterByCategory("Social"));
    document.getElementById("bakery-btn").addEventListener("click", () => filterByCategory("Bakery"));
    document.getElementById("pro-btn").addEventListener("click", () => filterByCategory("Professional"));
    document.getElementById("all-btn").addEventListener("click", showAllBusinesses);
  });



  //updating Stats
  function updateStats() {
    const totalStudios = businesses.length;
    const totalMembers = businesses.reduce((sum, biz) => sum + biz.members, 0);
    document.getElementById("summary").innerHTML = `
      <p><strong>Total Studios:</strong> ${totalStudios}</p>
      <p><strong>Total Members:</strong> ${totalMembers}</p>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showCards();
    updateStats();
  });
  