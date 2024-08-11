import axios from "axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get(
      "https://sultan-hospital-backend-api.onrender.com/api/admin/refresh",
      {
        withCredentials: true,
      }
    );
    const newAccessToken = response.data.newAccessToken;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  };

  return refresh;
};

export default useRefreshToken;
