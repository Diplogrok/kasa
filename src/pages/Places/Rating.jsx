function renderStars(rating) {
  const fullStars = Math.round(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa-solid fa-star filled"></i>);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<i key={`empty-${i}`} className="fa-solid fa-star"></i>);
  }
  return stars;
}

export { renderStars };
