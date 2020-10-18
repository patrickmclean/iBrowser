const AWS = require('aws-sdk');
const config = require('./config/config.js');
const uuid = require('uuid/v1');
const algolia = require('./algolia.js');
const logger = require('./logger.js');

module.exports = {
  insert: function(item){
    if (config.aws_ddb_use == false) return;
    logger.write('aws ddb ', 'log: '+item.imageId,2);

    // Now DDB. This is redundant with Algolia but keeping as backup
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name,
      Item: item
    };
    
    docClient.put(params, function(err, data) {
      if (err) {
          console.log('Error: Server error: '+err);
      } else {
        const { Items } = data;
      }
    });
  },
  
  readAll: function() {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name,
      KeyConditionExpression: 'imageId = :i',
      ExpressionAttributeValues: {
        ':i': '*',
      }
    };
    docClient.query(params, function(err, data) {
      if (err) {
          console.log('Error: Server error: '+err);
      } else {
        console.log('readAll', data);
        const { Items } = data;
      }
    });
    },

    createTable: function () {
      AWS.config.update(config.aws_remote_config);
      const docClient = new AWS.DynamoDB.DocumentClient();
        params = {
        "TableName": "fooBar",
        "Tags": [ 
           { 
              "Key": "myKey",
              "Value": "myValue"
           }
        ]
      };
      docClient.createTable(params, function(err, data) {
        if (err) {
            console.log('Error: Server error: '+err);
        } else {
          console.log('createTable', data);
          const { Items } = data;
        }
      });

    }
}

/*
module.exports = (app) => {
  // Gets all fruits
  app.get('/api/fruits', (req, res, next) => {
      AWS.config.update(config.aws_remote_config);
    
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded fruits',
          fruits: Items
        });
      }
    });
  }); // end of app.get(/api/fruits)
  // Get a single fruit by id
  app.get('/api/fruit', (req, res, next) => {
      AWS.config.update(config.aws_remote_config);
    
    const fruitId = req.query.id;
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name,
      KeyConditionExpression: 'fruitId = :i',
      ExpressionAttributeValues: {
        ':i': fruitId
      }
    };
    docClient.query(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        console.log('data', data);
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded fruits',
          fruits: Items
        });
      }
    });
  });
  // Add a fruit
  app.post('/api/fruit', (req, res, next) => {
      AWS.config.update(config.aws_remote_config);
    const { type, color } = req.body;
    // Not actually unique and can create problems.
    const fruitId = (Math.random() * 1000).toString();
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name,
      Item: {
        fruitId: fruitId,
        fruitType: type,
        color: color
      }
    };
    docClient.put(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        console.log('data', data);
        const { Items } = data;
        res.send({
          success: true,
          message: 'Added fruit',
          fruitId: fruitId
        });
      }
    });
  });
};
*/