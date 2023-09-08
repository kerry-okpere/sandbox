class API {
  uri: string;
  token: string | null;

  constructor(uri: string) {
    this.uri = uri;
    this.token = null;
  }

  private get headers() {
    return {
      Authorization: `Bearer ${this.token}`,
    };
  }

  static async handleResponse(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    }
    // reject if the response is not 2xx
    throw new Error(response.statusText)
  }

  private getURL(path: string) {
    return `${this.uri}/${path}`;
  }

  authorize = (token: string) => {
    this.token = token;
  };

  get = (path: string) => {
    const options = {
      method: "GET",
      headers: this.headers,
    };

    return fetch(this.getURL(path), options).then(API.handleResponse);
  };

  post = <T>(path: string, body: any): Promise<T> => {
    const options = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    };

    return fetch(this.getURL(path), options).then(API.handleResponse);
  };
}

const uri = "/api";
const api = new API(uri);

export default api;
