const algoliasearch = require('algoliasearch');
const logger = require('./logger.js');
const config = require('./config/config.js');
const bfs = require('./browsefs');

const client = algoliasearch(config.algolia_application_ID, config.algolia_admin_key);
const index = client.initIndex(config.algolia_index);

module.exports = {
  addObject: function (item) {
    if (config.algolia_use == false) return;
    logger.write('algolia write',item.imageId,2);
    var algoliaObject = {
      objectID: item.imageId,
      photo: config.s3_url+item.imageId+'.jpg',
      year: item.date.year,
      folder: item.folder,
      name: item.filename
    }
    index.addObject(algoliaObject, (err, { objectID } = {}) => {
      logger.write('algolia write',`objectID=${objectID}`,2);
    });
  }
}