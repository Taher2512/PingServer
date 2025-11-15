import axios from "axios";

const TARGET_URL = "https://insightai-cojq.onrender.com/";
const PING_INTERVAL = 60000; // 60 seconds

console.log(
  `Ping server started. Will ping ${TARGET_URL} every ${
    PING_INTERVAL / 1000
  } seconds.`
);

const pingServer = async () => {
  try {
    const response = await axios.get(TARGET_URL, { timeout: 30000 });
    console.log(
      `[${new Date().toISOString()}] Ping successful - Status: ${
        response.status
      }`
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `[${new Date().toISOString()}] Ping failed - ${error.message}`
      );
    } else {
      console.error(
        `[${new Date().toISOString()}] Ping failed - Unknown error`
      );
    }
  }
};

// Initial ping on startup
pingServer();

// Then ping every 10 seconds
setInterval(pingServer, PING_INTERVAL);
