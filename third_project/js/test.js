import fetch from 'node-fetch';
(async function () {
  const response = await fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest');
  const fromServer = await response.json();
  const data = fromServer.data;
  const avgPopulation = Math.round(data.reduce((s, i) => (s = s + i.Population), 0) / data.length);
  let control = null;
  let res = null;
  data.forEach(item => {
    let absol = Math.abs(item.Population - avgPopulation);
    if (res === null || absol < control) {
      res = {
        State: item.State,
        Population: item.Population,
      };
      control = absol;
    }
  });
  console.log(res.State, res.Population);
})();
