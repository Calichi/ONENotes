function lottery(min, max) {
  let dis = max - min;
  return Math.round(Math.random() * dis) + min;
}

export {lottery};