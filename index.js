let showHiddenSection = false;
let inputField = document.getElementById('locationSelector');
let firstSearchClick = true;

const predefinedProperties = {
  Delhi: [
  { locality: "Ace Divino", price: "30000", advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://newprojects.99acres.com/projects/ace_group_noida/ace_divino/images/4jbf4dwu.png" },
  { locality: "Dasnac The Jewel of Noida", price: "37500" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://imagecdn.99acres.com/media1/25795/15/515915069O-1725354703824.jpg" },
  { locality: "Supreme Enclave", price: "35000" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://images.nobroker.in/images/8a9f8bc391fe5d9e0191fe6af886032e/8a9f8bc391fe5d9e0191fe6af886032e_67653_970492_large.jpg" },
  { locality: "DLF The skycourt", price: "42500" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://imagecdn.99acres.com/media1/25602/19/512059697O-1723636314908.jpg" },
  { locality: "E2 Vasant Kunj", price: "45000" , advance: "2", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://imagecdn.99acres.com/media1/25936/3/518723439O-1726547521983.jpg" },
  { locality: "Saraswati Narmada Ganga Yamuna Apartment", price: "28000" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://imagecdn.99acres.com/media1/26031/16/520636821O-1727263871411.jpg" }
  ],
  Mohali: [
  { locality: "Sector 122", price: "20000" , advance: "3", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/12/11/Project-Photo-25-Hero-Homes-Mohali-Mohali-5086287_563_1000_310_462.jpg" },
  { locality: "Sector 125", price: "27000" , advance: "1", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://imagecdn.99acres.com/media1/25358/14/507174257M-1722052563792.webp" },
  { locality: "Sector 126", price: "35000" , advance: "2", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://mediacdn.99acres.com/media1/15392/13/307853978M-1626852294170.jpg" },
  { locality: "Sahibzada, Ajit Singh Nagar", price: "34000" , advance: "2", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://www.asenseinterior.com/assets/uploads/e0360387eaf8ef1740180f1012d4826a.jpg" },
  { locality: "MIG SUPER, Sector 70", price: "30000" , advance: "1", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://housing-images.n7net.in/01c16c28/22cb7329ea24ce70e905aae63ac6e7c4/v0/fs/2_bhk_apartment-for-rent-sector_70_sahibzada_ajit_singh_nagar-Mohali-bedroom.jpg" },
  { locality: "TDI Wellington Heights, Sector 117", price: "38000" , advance: "3", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://housing-images.n7net.in/01c16c28/bfc626c9b77d5bbed8e5530a838bfd22/v0/fs/2_bhk_apartment-for-rent-sector_117_1-Mohali-hall.jpg" }
  ],
  Patiala: [
  { locality: "Urban Estate II", price: "32000" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/May/11/Photo_h300_w450/72764243_6_7_300_450.jpg" },
  { locality: "Sardar Patel Enclave", price: "26000" , advance: "2", furnish: "Un-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jul/29/Photo_h0_w320/74064201_2_000506672_0_320.jpg" },
  { locality: "Dashmesh Nagar", price: "22000" , advance: "4", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/11/Photo_h300_w450/72297291_7_hatsAppImage20240411at12.25.27PM_300_450.jpeg" },
  { locality: "Urban Estate", price: "25000" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://housing-images.n7net.in/01c16c28/b40d6741e6e52209d5d353f264ba02ef/v0/fs/3_bhk_independent_house-for-rent-anand_nagar_patiala-Patiala-bedroom.jpg" },
  { locality: "B510 Garden Heights", price: "27000" , advance: "3", furnish: "Un-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/10/Photo_h300_w450/71590439_6_PropertyImage16-808712153246418_300_450.jpg" },
  { locality: "Majathia Enclave", price: "30000" , advance: "2", furnish: "Fully-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Dec/27/Photo_h470_w1080/58630267_10_1640582449089-51410_470_1080.jpg" }
  ],
  Zirakpur: [
  { locality: "Zirakpur nagar", price: "20000" , advance: "2", furnish: "Un-Furnished", parking: "No-Parking", img: "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/12/23/Project-Photo-21-Joynest-MOH-1-Chandigarh-5098627_600_800_0_320.jpg" },
  { locality: "Zirakpur society", price: "30000" , advance: "3", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2020/03/20/Project-Photo-14-Ananta-Lifestyle-Chandigarh-5124217_742_1280_0_320.jpg" },
  { locality: "Zirakpur colony", price: "40000" , advance: "4", furnish: "Fully-Furnished", parking: "No-Parking", img: "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2019/11/14/Project-Photo-6-EL-Spazia-Chandigarh-5127047_473_800_0_320.jpg" },
  { locality: "Zirakpur", price: "50000" , advance: "6", furnish: "Un-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2022/07/19/Project-Photo-10-Green-Lotus-Saksham-Chandigarh-5110603_600_800_0_320.jpg" },
  { locality: "DLF The skycourt", price: "42500" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Aug/05/Photo_h0_w320/74184239_1_PropertyImage331-5034630858746_0_320.jpg" },
  { locality: "DLF The skycourt", price: "42500" , advance: "2", furnish: "Semi-Furnished", parking: "Car-Parking", img: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jul/19/Photo_h300_w450/66819033_2_MG7899_300_450.jpeg" }
  ]
};

// Define an object to map input values to their corresponding section IDs
const sections = {
  Delhi: 'Delhi',
  Mohali: 'Mohali',
  Patiala: 'Patiala',
  Zirakpur: 'Zirakpur'
};

// Function to check if the user is logged in
function isUserLoggedIn() {
  return localStorage.getItem('loggedInUser') !== null;
}

// Function to show the popup
function showPopup() {
  document.getElementById('popup').style.display = 'block'; 
}

// Function to hide the popup
function hidePopup() {
  document.getElementById('popup').style.display = 'none'; 
}

function search() {
  if (!isUserLoggedIn()) {
    showPopup();
    return;
  }

  const selectedLocation = inputField.value.trim();

  // Hide all sections first
  for (let section in sections) {
    document.getElementById(sections[section]).style.display = 'none';
  }

  // Check if the selected location matches any of the sections
  if (sections[selectedLocation]) {
    showHiddenSection = true;
    document.getElementById(sections[selectedLocation]).style.display = 'block';
  } else {
    showHiddenSection = false;
  }

  // To load the property details for the selected location
  updateProperties();
}

function updateProperties() {
  let selectedLocation = document.getElementById('locationSelector').value;
  let properties = JSON.parse(localStorage.getItem(selectedLocation)) || [];

  if (properties.length === 0) {
    properties = predefinedProperties[selectedLocation] || [];
  }

  let propertyList = document.getElementById('propertyList' + selectedLocation); // Use dynamic ID for each section
  propertyList.innerHTML = ''; // Clear any existing content

  if (properties.length === 0) {
    propertyList.innerHTML = '<p>No properties available for this location.</p>';
    return;
  }
  
  properties.forEach((property, index) => {
    let propertyCard = `
    <div class="col-md-3 mt-2 mb-2 mb-md-0 d-flex align-items-stretch">
      <div class="card rounded-4 border-3 mb-3" style="width: 18rem; background-color: #afafaf;">
        <img src="${property.img}" class="img-fluid card-img-top rounded-3" style="height: 200px; object-fit: cover;" alt="...">
        <div class="card-body">
          <h5 class="card-title">
            Ratings: 
            <div class="Stars" style="--rating: 2.6;"></div>
          </h5>
          <h6>
            <i class="fa-solid fa-location-dot"></i> ${property.locality}
          </h6>
          <p class="card-text">
            Rs. ${property.price}/mo  | ${property.advance} month-Advance<br>
            ${property.furnish} | ${property.parking}<br>   
            </p>
          <a href="House_${selectedLocation}${index+1}.html" class="btn m-auto d-block card-button">View More</a>
        </div>
      </div>
    </div>`;
    console.log()
    propertyList.innerHTML += propertyCard;
  });

  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const maxPrice = button.getAttribute('data-price');

      // Filter properties based on the selected price range
      const filteredProperties = properties.filter(property => {
        if (maxPrice === 'all') {
          return true;
        }
        else if(maxPrice === '50001'){
          return parseInt(property.price) >= parseInt(maxPrice);
        }
        else if(maxPrice === '45001'){
          return parseInt(property.price) >= parseInt(maxPrice);
        }
        else {
          return parseInt(property.price) <= parseInt(maxPrice);
        }
      });

      // Update the property list with the filtered properties
      propertyList.innerHTML = '';
      filteredProperties.forEach((property, index) => {
        let propertyCard = `
        <div class="col-md-3 mt-2 mb-2 mb-md-0 d-flex align-items-stretch">
          <div class="card rounded-4 border-3 mb-3" style="width: 18rem; background-color: #afafaf;">
            <img src="${property.img}" class="img-fluid card-img-top rounded-3" style="height: 200px; object-fit: cover;" alt="...">
            <div class="card-body">
              <h5 class="card-title">
                Ratings: 
                <div class="Stars" style="--rating: 2.6;"></div>
              </h5>
              <h6>
                <i class="fa-solid fa-location-dot"></i> ${property.locality}
              </h6>
              <p class="card-text">
                Rs. ${property.price}/mo  | ${property.advance} month-Advance<br>
                ${property.furnish} | ${property.parking}<br>   
                </p>
              <a href="House_${selectedLocation}${index+1}.html" class="btn m-auto d-block card-button">View More</a>
            </div>
          </div>
        </div>`;
        propertyList.innerHTML += propertyCard;
      });
    });
  });
}

document.getElementById('signInButton').addEventListener('click', function() {
  window.location.href = 'sign.html'; 
});

document.getElementById('closePopupButton').addEventListener('click', function() {
  hidePopup(); // Hide the popup
});

// Load properties for the default location on page load
document.addEventListener('DOMContentLoaded', () => {
  updateProperties();
});

// Event listener to hide sections instantly if input is cleared
  inputField.addEventListener('input', function() {
    const selectedLocation = inputField.value.trim();

    if (!showHiddenSection) return;

    if (selectedLocation === '' || !sections[selectedLocation]) {
      // If input is cleared or no valid section exists, hide all sections
      for (let section in sections) {
        document.getElementById(sections[section]).style.display = 'none';
      }
    }
  });
    
  inputField.addEventListener('focus', function() {
  firstSearchClick = false; 
});

function updateAuthSection() {
  const authSection = document.getElementById('authSection');
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
  if (loggedInUser) {
    authSection.innerHTML = `
    <div class="d-flex align-items-center justify-content-between">
      <!-- Profile picture with responsive classes -->
      <img src="${loggedInUser.profilePic}" alt="Profile Picture" class="rounded-circle img-fluid" style="width: 40px; height: 40px;">
               
      <!-- Welcome message for medium and larger screens, hidden on small screens -->
      <span class="d-none d-md-inline ms-2 fw-bold">Welcome, ${loggedInUser.username}</span>
                
      <!-- Logout button with margin and responsive behavior -->
      <button class="btn enquiry ms-2 p-2" onclick="logout()">Logout</button>
    </div>
   `;
  } else {
    authSection.innerHTML = `<a href="sign.html" class="btn enquiry" type="submit">Sign Up/Log In</a>
    `;
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');  
  updateAuthSection(); 
}

window.onload = function () {
    updateAuthSection(); 
};

// Function to display the two most recent testimonials
function loadRecentTestimonials() {
  var testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
            
  if (testimonials.length > 0) {
    var recentTestimonials = testimonials.slice(-2).reverse(); 

    if (recentTestimonials[0]) {
      var review1 = `
        <img src="${recentTestimonials[0].imgSrc}" alt="customer" class="img-fluid rounded-circle" width="200">
        <p>"${recentTestimonials[0].review}"</p>
        <h6>- ${recentTestimonials[0].name}</h6>
        `;
      document.getElementById('recentReview1').innerHTML = review1;
    }

    if (recentTestimonials[1]) {
      var review2 = `
        <img src="${recentTestimonials[1].imgSrc}" alt="customer" class="img-fluid rounded-circle" width="200">
        <p>"${recentTestimonials[1].review}"</p>
        <h6>- ${recentTestimonials[1].name}</h6>
        `;
      document.getElementById('recentReview2').innerHTML = review2;
    }
  }
}

document.addEventListener('DOMContentLoaded', loadRecentTestimonials);