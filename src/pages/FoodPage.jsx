import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import FoodCard from "../components/FoodCard";
import Img1 from "../assets/food1.jpg";
import Img2 from "../assets/food2.jpg";
import Img3 from "../assets/food3.jpg";

const FoodPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setRecipes([
          {
            id: 1,
            name: "Delicious Pasta",
            description: "Homemade pasta with fresh herbs and vegetables",
            time: "30 mins",
            servings: 4,
            image: Img1,
          },
          {
            id: 2,
            name: "Grilled Salmon",
            description: "Perfectly grilled salmon with lemon butter sauce and roasted vegetables",
            time: "25 mins",
            servings: 2,
            image: Img2,
          },
          {
            id: 3,
            name: "Chocolate Cake",
            description: "Rich and moist chocolate cake with frozen bit and creamy topping",
            time: "45 mins",
            servings: 8,
            image: Img3,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const galleryImages = [Img1, Img2, Img3, Img1];

  return (
    <>
      <Navbar />

      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">
            <h1>
              A <span className="highlight">recipe</span> of happiness :)
            </h1>
            <h2>Cook like a chef</h2>
            <p>
              Start a delicious journey, where tasty discoveries and flavorful
              creations await your every craving
            </p>
            <div className="button-group">
              <button className="btn btn-primary">Explore recipes</button>
              <button className="btn btn-outline">Watch videos</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-gallery">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <img src={img} alt={`Recipe ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recipes-section">
        <div className="recipes-container">
          <h2 className="section-title">Our Featured Recipes</h2>
          <div className="recipes-grid">
            {recipes.map((recipe) => (
              <FoodCard
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                description={recipe.description}
                time={recipe.time}
                servings={recipe.servings}
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodPage;
