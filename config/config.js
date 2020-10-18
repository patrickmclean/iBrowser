module.exports = {
  root_directory: '/Users/patrickmclean/Pictures/Test',
  logfile_directory: '/Users/patrickmclean/Pictures/Test',
  aws_table_name: 'imageID',
  aws_ddb_use: false,
  aws_remote_config: {
    accessKeyId: 'AKIAXEXXAIIBNSGPZXDB',
    secretAccessKey: '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',
    region: 'us-east-2',
  },
  s3_thumbnail_folder: 'ibrowser-thumbnails',
  s3_url: 'https://ibrowser-thumbnails.s3.us-east-2.amazonaws.com/',
  s3_use: true,
  algolia_application_ID: 'ZNBOGT313F',
  algolia_search_key: 'c796103afcccde3243a410ecad0e7eac',
  algolia_admin_key: 'd61e9b3fac9f7c7136c120a8ac2d5a7c',
  algolia_index: 'imageID',
  algolia_use: true,
  thumbnailSize: 400,
  async_limit: 3,
  log_level: 1,
  log_to_file: false,
  log_to_console: true
};