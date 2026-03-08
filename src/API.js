import axios from "axios";

const BaseUrl = "http://127.0.0.1:8000/api";

export const getProfileData = async () => {
  try {
    const response = await fetch(`${BaseUrl}/profile`);
    console.log({ response });

    if (response.status == 200) {
      const responseData = response.json();
      return responseData;
    }
  } catch (error) {
    console.error(error);
  }
};

const getVisitorId = () => {
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("visitor_id", id);
  }
  return id;
};
export const trackVisit = () => {
  axios.post(`${BaseUrl}/track/visit`, {
    visitor_id: getVisitorId(),
    page: window.location.pathname,
    referrer: document.referrer,
  });
};

//
