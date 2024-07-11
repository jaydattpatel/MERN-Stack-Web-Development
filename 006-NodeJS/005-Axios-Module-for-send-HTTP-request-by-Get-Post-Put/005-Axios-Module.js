/*
author : Jaydatt Patel
Axios Module: 
Axios is an open-source, promise-based HTTP client. It uses JavaScript’s promises to send HTTP requests and manage their responses. Moreover, it offers additional features for fetching APIs that are not available in the basic Fetch API.

Now, you can use the functions Axios provides for each HTTP method like these:
- axios.get()
- axios.post()
- axios.put()
*/

import axios from 'axios';

const Solution = async () => {

  axios.get('https://api.codingninjas.com/api/v3/event_tags')
      .then(response => {
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
      });
};
Solution();