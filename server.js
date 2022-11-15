module.exports = () => {
  const data = {
    produts: [],
  };

  for (let i = 0; 1 < 1000; i++) {
    data.produts.push({
      id: i + 1,
      peice: 80,
      title: `Camiseta ${i + 1}`,
    });
  }

  return data;
};
