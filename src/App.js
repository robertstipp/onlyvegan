import React from "react";

import { useGlobalContext } from "./context";

function App() {
  const { isLoading, startLoading, stopLoading, recipes } = useGlobalContext();
  // if (isLoading) {
  //   return <div className="loading" onClick={() => stopLoading()}></div>;
  // }
  console.log(recipes);

  return (
    <main>
      <h1>Only Vegan</h1>
      <section className="photos">
        <div className="photos-center">
          {recipes.map((recipe) => {
            const {
              id,
              title,
              image,
              aggregateLikes: likes,
              diets,
              sourceUrl: url,
            } = recipe;
            return (
              <article classname="photo" key={id}>
                <img src={image} alt={title} />
                <div className="photo-info">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h2>{title}</h2>
                  </a>

                  <h3>Likes: {likes}</h3>
                  <h3>Diets:</h3>
                  <ul>
                    {diets.map((diet) => {
                      return <li>{diet}</li>;
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
