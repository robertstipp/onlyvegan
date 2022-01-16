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
      <header className="header">Only Vegans</header>
      <section className="recipes">
        <div className="recipes-center">
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
              <article className="recipe" key={id}>
                <img src={image} alt={title} />
                <div className="recipe-info">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h2>{title}</h2>
                  </a>
                  <h3>Likes: {likes}</h3>
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
