const axios = require('axios');
const cloudantURL="https://*-bluemix.cloudant.com";
const credentialstobeEncoded = "*-bluemix"+ ":" + "**";
let buff = new Buffer(credentialstobeEncoded);  
let encodedString = buff.toString('base64');
// const encodedString = btoa(credentialstobeEncoded);
const httpOptions= {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + encodedString
    }
};
const get = endpoint => axios.get(`${cloudantURL}${endpoint}`,httpOptions);
const post = (endpoint,payload) => axios.post(`${cloudantURL}${endpoint}`, payload, httpOptions);

exports.createPages = async ({ actions: { createPage } }) => {

  const {data:allSessions} = await get(`/ktdata/_all_docs?include_docs=true`);
  console.log(JSON.stringify(allSessions));
  // Create a page that lists all Pokémon.
  createPage({ 
    path: `/`,
    component: require.resolve('./src/templates/sessions.js'),
    context: {allSessions}
  });

  // Create a page for each Pokémon.
  // allSessions.forEach(pokemon => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve('./src/templates/pokemon.js'),
  //     context: { pokemon }
  //   });

  //   // Create a page for each ability of the current Pokémon.
  //   pokemon.abilities.forEach(ability => {
  //     createPage({
  //       path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
  //       component: require.resolve('./src/templates/ability.js'),
  //       context: { pokemon, ability }
  //     });
  //   });
  // });
};