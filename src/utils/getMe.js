import { useEffect, useState } from "react";
import axios from "axios";

const GetMe = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhone, setUserPhone] = useState(null);

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    console.log("Auth token:", authToken);

    const fetchData = async () => {
      try {
        const response = await axios.get(
            "https://opencrm-backend.onrender.com/get/me",
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            }
        );

        setUser(response.data.user);
        setUserId(response.data.user._id);
        setUserFirstName(response.data.user.firstName);
        setUserLastName(response.data.user.lastName);
        setUserSurname(response.data.user.surname);
        setUserPhone(response.data.user.phone);
      } catch (err) {
        console.error("Error during request:", err);
      }
    };

    fetchData();
  }, [authToken]);

  return {
    userFirstName: user ? user.firstName : null,
    userLastName: user ? user.lastName : null,
    userSurname: user ? user.surname : null,
    userPhone: user ? user.phone : null,
  };
};

export default GetMe;
