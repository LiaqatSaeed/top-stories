import https from 'https';

export const fetchAPI = (apiURL: string): Promise<string>  => {
  return new Promise((resolve, reject) => {
    https.get(apiURL, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}
