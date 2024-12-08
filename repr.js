const scale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 100]);

const invertedExtent = scale.invertExtent(50);
console.log(invertedExtent); // [50, 100]
