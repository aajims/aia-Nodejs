const fetch = require('node-fetch')
const parser = require('fast-xml-parser');


exports.index = async function(req, res, next) {
  const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne');
  let body = await response.text();

  let flickr = parser.parse(body, {
    ignoreAttributes: false,
    parseAttributeValue: true,
    attributeNamePrefix : ''
  })

  return res.send(flickr.feed.entry)
}
