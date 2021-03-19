import axios from "axios";

/**
 *
 * @param {String} method //method for query -> GET,POST,PUT,DELETE
 * @param {String} pathUrl // path
 * @param {String} body //query command
 * @param {Boolean} isTestScript //Is use from test script?
 * @returns
 */
const fetchData = async (method, pathUrl, body) => {
  try {
    const url = process.env.REACT_APP_URLBACKEND
      ? `${process.env.REACT_APP_URLBACKEND}/covid19`
      : "http://localhost:9000/covid19";
    const resp = await axios({
      //   url: `http://${window.location.hostname}:${process.env.REACT_APP_PORTBACKEND}/${pathUrl}`,
      //   url: `http://${window.location.hostname}:${PORT}/${pathUrl}`,
      url: `${url}${pathUrl}`,
      data: body,
      method,

      headers: {
        //  "Access-Control-Allow-Origin": "*",
        //  'Access-Control-Allow-Headers': 'Set-Cookie'
        // Authorization: Cookies.get("tokenAccess"),
      },
    });
    return resp;
  } catch (error) {
    return error;
  }
};
export default fetchData;
